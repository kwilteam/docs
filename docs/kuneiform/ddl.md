---
sidebar_position: 2
sidebar_label: "DDL"
id: kuneiform-ddl
title: Kuneiform Data Definition Language
description: An outline of Kuneiform's supported data definition language.
slug: /kuneiform/ddl
---

DDL in Kuneiform is comprised of "Tables" that contain the structure of data.

## Table Declaration in Kuneiform Language

Kuneiform Language allows you to establish your own tables, along with defining the corresponding columns and indexes. For every column, you have the option to specify the variable type. Here's an example:

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
    ...other columns
}
```

## Indexing in Tables

The Kuneiform Language not only allows column declarations, but also the creation of indexes on one or more columns within your table. Kuneiform supports standard SQLite B-tree indexes. For more details on SQLite indexes, please refer to [this tutorial](<https://www.sqlitetutorial.net/sqlite-index/>).

## Index Declaration

You can declare two types of indexes:

1. Standard binary tree index: This is a conventional B-tree index applied to the chosen column(s). Here's the syntax:

```typescript
index(column1, column2, ...)
```

2. Unique index: This enforces the unique attribute on the specified columns while also creating a B-tree index. The syntax is:

```typescript
unique(column1, column2, ...)
```

To declare an index, prefix the index definition with a #. Then, specify the index type and the column(s) the index will apply to. Here's an example:

```typescript
table users {
    id int primary notnull,
    name text notnull minlen(5),
    #new_index_name unique(id, name),
    ...other columns & indexes
}
```

And that wraps up our guide to table, column, and index declarations in the Kuneiform Language. With this knowledge, you're equipped to define and structure your data tables effectively.
