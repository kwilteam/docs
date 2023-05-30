---
sidebar_position: 1
sidebar_label: "Kuneiform Intro"
id: kuneiform-intro
title: Kuneiform Introduction
description: An introduction to the Kuneiform schema language.
slug: /kuneiform/introduction
---

Kuneiform is a language for defining databases on Kwil.  While we typically refer to entire an entire schema file as a "Kuneiform" file, schema files are technically made of two distinct languages:

- Kuneiform (DDL): The Kuneiform language is specifically a Data Defintion Language (DDL) for Kwil databases.  DDL's typically manage structuring metadata; a common example is the `CREATE TABLE ...` statement in typical SQL databases.  Kuneiform is a more "modern" version of this, featuring a C-like syntax, as well as new features.

- SQL (DML): In Kwil, regular SQL is used as the Data Manipulation Language (DML).  SQL is written within a Kuneiform file to store, update, or retrieve data.  While Kwil uses it's own SQL standard for security purposes, it is most similar to the SQL-92 standard.  For most users, it can be thought of as a slightly restrictive version of SQLite's syntax.

```
database social_network;

// table for storing users
// each wallet can have a user
table users {
    id int primary notnull,
    username text notnull unique minlen(5) maxlen(32),
    age int notnull max(69),
    address text notnull unique // wallet address
}
```

## DDL

