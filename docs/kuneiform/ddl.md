---
sidebar_position: 2
sidebar_label: "DDL"
id: kuneiform-ddl
title: Kuneiform Data Definition Language
description: An outline of Kuneiform's supported data definition language.
slug: /kuneiform/ddl
---

DDL in Kuneiform is comprised of "tables" that contain the structure of data.

## Database Declaration in Kuneiform Language

At the top of every Kuneiform file is the database declaration. Note that the database name **must** be followed by semi-colon, otherwise you will get an error when the the file is compiled.

```typescript
database mydb;
```

## Table Declaration

The Kuneiform Language allows you to establish your own tables, along with defining the corresponding [columns](#adding-columns), [foreign keys](#foreign-key), and [indexes](#indexing-in-tables). For every column, you must specify a [data type](/docs/kuneiform/supported-features#data-types) and have the option to set an [attribute type](/docs/kuneiform/supported-features#attributes). Here is an example:

```typescript
table users {
    id int primary,     // The id column
    name text notnull,  // The name column
    username text notnull,  // The username column
    wallet text notnull,    // The wallet column
    #wallet_index index(wallet) // B-tree index on the wallet column
}
```

## Naming a Table

Initiating a table declaration begins with naming the table. Use the following structure to name your table:

```typescript
table <your_desired_name> {}
```

## Adding Columns

To append a column to your table, declare the column name along with a valid column variable type. The supported column types are int and text. Here's how you can declare columns:

```typescript
table users {
    id int,
    name text,
    // ...other columns
}
```

## Foreign Key

Within your table declaration, you can add foreign key declaration to link a column in your declared table to a column in another table. You can also optionally set an operation to be executed when the linked column is updated or deleted. A reference column must be unique. The syntax for a foreign key declaration looks like:

```typescript
foreign_key (<column-name>) references <table-name>(<reference-column-name>) on_update | on_delete <foreign-key-operation>
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
    foreign_key (userid) references users(id) on_delete cascade
    foreign_key (username) references users(name) on_update cascade
}
```

Below are a list of operations that available for the foreign key declaration:

- ```no_action``` No operation is triggered.
- ```restrict``` Other calls to the other refrenced column will fail to update the column.
- ```set_null``` The column is set to null.
- ```set_default``` The column is set to the column's default value (if specified in the table declaration).
- ```cascade``` The change in the reference column cascades to the specified column.  In the case of a deletion, it will delete the entire record.

## Indexing in Tables

The Kuneiform Language not only allows column declarations, but also the creation of indexes on one or more columns within your table. Kuneiform supports standard SQLite B-tree indexes. For more details on SQLite indexes, please refer to [this tutorial](<https://www.sqlitetutorial.net/sqlite-index/>).

## Index Declaration

You can declare [three types](/docs/kuneiform/supported-features#indexes) of indexes:

1. Standard binary tree index: This is a conventional B-tree index applied to the chosen column(s). Here's the syntax:

```typescript
index(column1, column2, ...)
```

2. Unique index: This enforces the unique attribute on the specified columns while also creating a B-tree index. The syntax is:

```typescript
unique(column1, column2, ...)
```

3. Primary index: Primary index creates a composite primary key on the specified columns. The syntax is:

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
