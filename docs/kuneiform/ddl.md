---
sidebar_position: 2
sidebar_label: "DDL"
id: kuneiform-ddl
title: Kuneiform Data Definition Language
description: An outline of Kuneiform's supported data definition language.
slug: /kuneiform/ddl
---

DDL (data definition language) in Kuneiform is comprised of "tables" that contain the structure of data.

## Database Declaration in Kuneiform Language

At the top of every Kuneiform file is the database declaration. Note that the database name **must** be followed by semi-colon, otherwise you will get an error when the file is parsed. Database names must be unique for the wallet deploying them. A global
unique identifier (DBID) is assigned to each database when it is deployed. The DBID is derived from the deployer's wallet address
and the schema name.

```typescript
database mydb;
```

## Table Declaration

The Kuneiform Language allows you to establish your own tables, along with defining the corresponding [columns](#adding-columns), [foreign keys](#foreign-key), and [indexes](#indexing-in-tables). For every column, you must specify a [data type](/docs/kuneiform/introduction#data-types) and have the option to set one or more [attribute types](/docs/kuneiform/ddl#adding-columns). Here is an example:

```typescript
table users {
    id int primary,                     // The id column
    name text notnull,                  // The name column
    username text notnull, minlen(5),   // The username column
    wallet text notnull,                // The wallet column
    #wallet_index index(wallet)         // B-tree index on the wallet column
}
```

## Naming a Table

Initiating a table declaration begins with naming the table. Use the following structure to name your table:

```typescript
table <your_desired_name> {}
```

## Adding Columns

Columns can be declared with their column name, type, and several attributes:

```typescript
table users {
    id int primary key,
    name text not null minlen(30),
    // ...other columns
}
```

Below is a table of all supported attributes:

| Attribute Name | Kuneiform Symbol | Description |
| --------- | --------- | ----------- |
| Primary Key | `primary`, `primary key`, `pk`, `primary_key` | The column is the primary key of the table.  A table can only have one primary key. |
| Unique | `unique` | The column must have a unique value for each row. |
| Not Null | `notnull`, `not null` | The column cannot be null. |
| Default Value | `default(value)` | The column will have a default value if no value is provided. |
| Minimum Integer | `min(int_value)` | The column must be greater than or equal to the value provided. |
| Maximum Integer | `max(int_value)` | The column must be less than or equal to the value provided. |
| Minimum Text Length | `minlen(int_value)` | The column must have a text length greater than or equal to the value provided. |
| Maximum Text Length | `maxlen(int_value)` | The column must have a text length less than or equal to the value provided. |

## Foreign Key

Within your table declaration, you can add foreign key declaration to link a column in your declared table to a column in another table. You can also optionally set an operation to be executed when the linked column is updated or deleted. A reference column must be unique. The syntax for a foreign key declaration looks like:

```typescript
foreign key (<column-name>) references <table-name>(<reference-column-name>) on update | delete <foreign-key-operation>
```

In a table, a foreign key declaration would look like:

```typescript
table users {
    id int primary,
    name text unique,
    // ...other columns
}

table posts {
    id int primary,
    userid int notnull,
    username text notnull,
    content text notnull,
    foreign key (userid) references users(id) on delete cascade
    foreign key (username) references users(name) on update cascade
}
```

Below are a list of operations that available for the foreign key declaration:

- ```no action``` No operation is triggered.
- ```restrict``` Other calls to the other referenced column will fail to update the column.
- ```set null``` The column is set to null.
- ```set default``` The column is set to the column's default value (if specified in the table declaration).
- ```cascade``` The change in the reference column cascades to the specified column.  In the case of a deletion, it will delete the entire record.

## Indexing in Tables

The Kuneiform Language not only allows column declarations, but also the creation of indexes on one or more columns within your table. Kuneiform only supports standard B-tree indexes.

### Index Declaration

You can declare three types of indexes:

1. Standard B-tree index: This is a conventional B-tree index applied to the chosen column(s). Here's the syntax:

```typescript
index(column1, column2, ...)
```

2. Unique index: This enforces the unique attribute on the specified columns while also creating a B-tree index. The syntax is:

```typescript
unique(column1, column2, ...)
```

3. Primary index: Primary index creates a composite primary key on the specified columns. **If a primary index is present, the table cannot have another primary key or primary index.** The syntax is:

```typescript
primary(column1, column2, ...)
```

To declare an index, prefix the index definition with a #. Then, specify the index type and the column(s) the index will apply to. Here's an example:

```typescript
table users {
    id int primary notnull,
    name text notnull minlen(5),
    #new_index_name unique(id, name),
    // ...other columns & indexes
}
```

This concludes the guide to table, column, and index declarations in the Kuneiform Language. With this knowledge, you're equipped to define and structure your data tables effectively.
