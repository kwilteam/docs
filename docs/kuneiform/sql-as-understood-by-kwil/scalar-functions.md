---
sidebar_position: 2
sidebar_label: "Scalar Functions"
id: scalar-functions
title: Scalar Functions
description: Scalar Functions
slug: /scalar-functions
---

### abs(_X_)

The abs(_X_) function returns the absolute value of _X_. 

### error(_X_)

The error(_X_) function raises an exception and causes the SQL statement to fail. When triggered, error(_X_) takes string _X_ and returns it to the user in the query result.

### format(_FORMAT,..._)

The first argument is a format string that specifies how to construct the output string using values taken from subsequent arguments. Placeholder %s represents a string argument. Placeholder %d represents an integer argument. Placeholder %L represents a literal argument. Placeholder %I represents a SQL Identifier as an argument. This works like the printf() function from the standard C library. 
For Example:

```
FORMAT('INSERT INTO %I (column1, column2) VALUES (%L, %s), (%L, %d)', 'table_name', ‘First string’, ‘Second string', ‘Third string', 42)
```

This would return the SQL string: 
```
INSERT INTO table_name (column1, column2) VALUES (‘First string’, ‘Second string'), (‘Third string’, 42)
```

### length(_X_)

The length(_X_) function returns the number of characters in string X. 

### lower(_X_)

The lower(_X_) function returns a copy of input string X with all characters converted to lowercase. 

### upper(_X_)

The upper(_X_) function returns a copy of input string X with all characters converted to uppercase.

