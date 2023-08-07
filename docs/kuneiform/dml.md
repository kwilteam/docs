---
sidebar_position: 3
sidebar_label: "DML (SQL)"
id: kuneiform-dml
title: Kuneiform SQL
description: An outline of Kuneiform's supported SQL DML syntax.
slug: /kuneiform/dml
---

DML in Kuneiform is defined in "action" blocks.

## Action Declaration in Kuneiform Language

In Kuneiform, you can define specific SQL queries to execute against your database using action declarations. Here's an example:

```typescript
action add_user($id, $name, $username) public {
    INSERT INTO users (id, name, username, wallet)
    VALUES ($id, $name, $username, @caller);
}
```

## Naming an Action

Naming an action starts with an action declaration followed by your preferred name:

```typescript
action <your_desired_name>() <privacy> {}
```

## Defining Action Parameters

Action parameters represent user inputs provided when the action is called. These parameters should be prefixed with a $ symbol, which subsequently maps to the values passed to the SQL query:

```typescript
action add_user($id, $name, $username) <public | private> {}
```

## Setting Action Privacy

Privacy levels can be set for your action. Similar to public / private in [TypeScript](https://www.tutorialsteacher.com/typescript/data-modifiers), private actions can only be called by other actions in the Kuneiform schema. Public actions can be called by any external database user.

```typescript
action add_user($id, $name, $username) public {}
```

## Defining SQL Queries in an Action

The SQL queries to be executed when the action is called can be defined within the action's body. Parameters within the SQL query must be prefixed with $.  Multiple queries can be included in the same action.  The two queries will be executed within one transaction, with either all succeeding or all failing. All query statements **must** end with a semicolon. If queries return results, the final query statement will be returned to the client.

```typescript
// the following queries will be executed transactionally.
action add_user($id, $name, $username) public {
    INSERT INTO users (id, name, username, wallet)
    VALUES ($id, $name, $username, @caller);

    INSERT INTO ... // some other query
}
```

## Raising Errors in Kwil

In a SQL query on Kwil, you can use the ```ERROR()``` function to raise an error and stop the execution of an action. This is useful for enforcing conditional logic in a query / action.

```typescript
// a sample action to check a user's balance before revealing data.
action read_data($id) public {
    SELECT
        CASE
            WHEN balance < 10 THEN ERROR('insufficient balance')
            ELSE null
        END
    FROM balances WHERE id = $id;
    SELECT * FROM some_table;
}
```

## Using Contextual Variables in Actions

Contextual variables can be used in queries like a user-provided value.  Unlike user-provided values, these values will exist for queries without the user needing to provide it.

A list of supported variables will be kept here:

| Variable | Description                                           |
|----------|-------------------------------------------------------|
| @caller  | The wallet address of the wallet executing the action |
| @action  | The name of the action being executed                 |
| @dataset | The DBID of the dataset that is being used            |

This concludes the overview of action declarations in Kuneiform Language, offering insights on naming actions, setting parameters, managing query privacy, crafting SQL queries within actions, and utilizing modifiers for specific inputs.
