---
sidebar_position: 4
sidebar_label: "Procedures"
id: kuneiform-procedures
title: Kuneiform Procedures
description: An outline of Kuneiform procedures.
slug: /kuneiform/procedures
---

Kuneiform supports a basic procedural language for building logic into schemas. Procedures can be used for building access control logic, performing arithmetic, and managing control flow.

## Procedure Blocks

Procedures are declared using the `procedure` key word. They can be given a list of parameters and their corresponding types, return types, and access modifiers. The example below shows the signature for a `get_user` procedure. It takes one input (the id of the user, of type `uuid`), and returns the user's name and age. It will return exactly one record, containing a name and age:

```ts
procedure get_user($id uuid) public view returns (name text, age int) {
    // procedure implementation
}
```

Procedures can also return tables, which are a collection of many records. The below example returns all user IDs and names of a certain age:

```ts
procedure get_users($age int) public view returns table(id uuid, name text) {
    // procedure implementation
}
```

If a procedure does not return anything, the return should not be specified:

```ts
procedure create_user($name text, $age int) public {
    // procedure implementation
}
```

## Procedure Syntax

### Declaring and Assigning Variables

All variables in procedures are strongly typed. They can be assigned at declaration, or assigned to after declaration. They can also be type casted:

```ts
procedure declare_vars() public {
    // declare and assign new int var:
    $var1 int := 1;

    // declare a new var to be assigned to later
    $var2 text;

    // assign to $var2. type cast to match type text:
    $var2 := $var1::text;
}
```

### Arithmetic

Basic arithmetic can be performed in procedures:

```ts
procedure do_math($num1 int, $num2 int) public {
    // add and divide, with precedence:
    $avg int := ($num1 + $num2)/2;

    // modulo:
    $mod int := $num2%10;

    // negate
    $neg_mul int := (-$avg)*$mod;
}
```

### Executing SQL

SQL statements can be executed at any point in a procedure. In the below example, we generated a deterministic UUID using a random UUID namespace and the transaction ID. We then use the generated id as the user's primary key.

```ts
procedure create_user($name text, $age int) public {
    $id uuid := generate_uuid_v5('455f60aa-0569-4aaa-8469-63be2ec4dd96'::uuid, @txid)
    // do something
    // ...
    INSERT INTO users (id, name, age)
    VALUES ($id, $name, $age);
}
```

### Handling Arrays

Procedures support basic array operations. It supports the following functions:

- `array_append(type[], type) type[]`: appends a value to the end of an array.
- `array_prepend(type, type[]) type[]`: prepends a value to the beginning of an array.
- `array_cat(type[], type[]) type[]`: concatenates two arrays together.
- `array_length(type[]) int`: returns the length of the array.

**Arrays are 1-indexed.**

```ts
procedure handle_array() public view returns (val text) {
    $arr text[] := ['hello', 'world'];
    $arr := array_append($arr, 'goodbye');

    $len int := array_length($arr); // $len == 3

    // return the first value.
    return $arr[1];
}
```

### If/Then

```ts
procedure age_conditional($age int) public {
    if $age < 0 {
        // do something
    } elseif age < 18 {
        // do something
    } else {
        // something else
    }
}
```

### For Loop

For loops can be declared over 4 different targets: arrays, ranges, procedure calls, and SQL statements.

#### Array Loop

```ts
procedure iterate_over_array(names text[]) public {
    for $name in names {
        // $name is of type `text`
    }
}
```

#### Range Loop

```ts
procedure iterate_over_range() public {
    // iterating over all numbers from 1 to 25
    for $i in 1..25 {
        // $i is type int
    }
}

procedure iterate_range_dynamic($start int, $end int) public {
    // can also iterate over dynamic ranges
    for $i in $start..$end {
        // ...
    }
}
```

#### Procedure Loops

You can iterate over any SQL statement as well. The following examples reference an example table `users`, with columns `id`, `name`, and `age`.

```ts
procedure iterate_over_sql() public {
    for $row in SELECT id, name, age from users {
        // can access $row.id, $row.name, and $row.age
    }
}
```

You can also iterate of returning clauses:

```ts
procedure iterate_over_delete() public {
    $age int := 100;
    for $row in delete from users
        where age = $age
        returning * {
        // can access $row.id, $row.name, and $row.age
        // for all deleted users
    }
}
```

Procedures that return tables can also be iterated over:

```ts
procedure get_users() public view returns table(id uuid, name text, age int) {
    // ...
}

procedure iterate_over_users() public {
    for $row in SELECT * FROM get_users() {
        // can access $row.id, $row.name, and $row.age
    }
}
```

#### Breaking From a Loop

To conditionally exit a loop, you can use `break`:

```ts
procedure get_users() public {
    $count int := 0;
    for $row in SELECT * FROM users {
        // do something

        // break if too many records have been read
        $count := $count + 1;
        if $count >= 50 {
            break
        }
    }
}
```



### Returning Values

#### Return Single Records

To return a single record, simply use the `return` key word:

```ts
procedure get_numbers() public view returns (num1 int, num2 int) {
    $number1 int := 1;
    return $number1, 2;
}
```

To return a single row from a SQL query, you should iterate over the result and return on the first iteration:

```ts
procedure get_user($id uuid) public view returns (name text, age int) {
    for $row in SELECT name, age from users where id = $id {
        // this will always return on the first iteration.
        return $row.name, $row.age;
    }

    // if no iterations, then there is no matching user.
    error('user not found');
}
```

#### Return Table

To return a table from a procedure, you can simply return any SQL query that returns data:

```ts
procedure get_users() public view returns table(id uuid, name text, age int) {
    return select * from users;
}
```

#### Return Next

If a procedure returns a table and should to selectively return values, you can use `return next` to return a record inside of a for loop. Unlike `return`, `return next` will not exit the procedure, but instead continue. In the below example, we query a table `prices` with columns `value` and `day`, and return the net change from each day. We assume that our first day is day 1. If a day is missing, it returns an error.

```ts
procedure get_change() public returns table(day int, change int) {
    $last_value int := 0;
    $last_day int := 0;
    for $row in SELECT day, value from prices order by day asc {
        // if we received a day out of order, return error
        if $row.day != $last_day + 1 {
            error(format('missing day %d', $last_day+1));
        }

        // add the change to the result set
        return next $row.day, $row.value - $last_value;
        // update our last seen value
        $last_value := $row.value;
    }
}
```
