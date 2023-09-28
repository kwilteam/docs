---
sidebar_position: 3
sidebar_label: "Databases"
id: kwil-cli-databases
title: Databases
description: Database related operations.
slug: /kwil-cli/databases
---

The database subcommand contains functionality for interacting with databases deployed on Kwil networks.  

It supports the following subcommands:

* [deploy](#deploy): Deploy a database schema as a new database.
* [drop](#drop): Drop a database schema that is deployed to the network.
* [query](#query): Query a database using a raw SELECT statement.
* [list](#list): List the schemas deployed by a certain public key.
* [read-schema](#read-schema): Display the schema of a deployed database.
* [execute](#execute): Execute an [action](../Kuneiform/dml#action-declaration-in-Kuneiform-language) against database.
* [batch](#batch): Execute a transactionally consistent batch execution from a CSV.
* [call](#call-action): Call an `view` [action](../Kuneiform/dml#action-declaration-in-Kuneiform-language) against database.

:::info
You can check the documentation of a command while calling it by passing the flag `--help` or `-h`:
:::

:::tip
Subcommands that send a transaction to the Kwil network (`deploy`, `drop`, `execute`, and `batch`) are asynchronous, and return a transaction hash.  You can query the result of these transactions using `kwil-cli utils query-tx [HASH]`:

```bash
$ kwil-cli utils query-tx e64e4946980ae3c535ab08e0e2446dc16b9902b2ac549ccf0e7149b71810752e
Transaction ID: 8830620e005f01c0aedaebf83586cbb8738ac7891db2b7f3a2d54a2095a40887
Status: success
Height: 53531
```

:::

## Deploy

The `deploy` subcommand is used to deploy a database schema. The `deploy` command takes no arguments, however has one required flag `--path` or `-p`, which is the relative file path to a Kuneiform file. You can also use a Kuneiform JSON file by provide the flag `--type json` or `-t json`.

```bash
$ kwil-cli database deploy --path=./my_db.kf
# or
$ kwil-cli database deploy --path=./my_db.json --type json

## output
TxHash: 52b32477ec6f8919de28af413893ab153e8c8adbf4a47682fa1bba272773f119
```

## Drop

The `drop` subcommand is used to drop a deployed database.  You can only drop a database that have been deployed with your [configured private key](./configuration.md).  The drop command takes one argument, which is the name of the database you wish to drop.

```bash
kwil-cli database drop mydb
```

## Query

The `query` subcommand is used to execute an ad-hoc SELECT statement against database. This statement cannot modify state, and is therefore read-only. It takes one argument, which is the SQL query you wish to execute.  

A target database can either be selected with `--owner` and `--name`, or with a database ID `--dbid`.  The `--owner` flag takes the hex encoded public key of a database deployer, and the `--name` flag takes the name given to the database when it was deployed. `--dbid` will be used if both are provided. If an `--owner` flag is not provided, it will default to the public key of the private key that is [configured](./kwil-cli/configuration).

```bash
$ kwil-cli database query 'SELECT * FROM users LIMIT 1' --dbid x24c29a32f0bc70ffa5b413687f8d122c67a4d316ac245197adf82436
# or
# configured private key will be used to determine owner
$ kwil-cli database query 'SELECT * FROM users LIMIT 1' --name mydb
# or
$ kwil-cli database query 'SELECT * FROM users LIMIT 1' --name mydb --owner 04fa5c2d7e9272aca88958a86b444bfe77d0cffb0687e37f02203d356aa63af56ce33426eb39a2966245d6da26257c0678299d3a3728cfbe917314a13ec3b1536e

## output
| age | id | username |
+-----+----+----------+
|  33 |  2 | satoshi  |
```

## List

The `list` subcommand is used to list the databases deployed by a particular public key.  
This command takes no arguments, and by default will list the databases for the private key you have configured.  
You can list databases deployed from any hex encoded public key using the optional --owner (or -o) flag.

```bash
$ kwil-cli database list --owner=04fa5c2d7e9272aca88958a86b444bfe77d0cffb0687e37f02203d356aa63af56ce33426eb39a2966245d6da26257c0678299d3a3728cfbe917314a13ec3b1536e

## output
Databases belonging to '04fa5c2d7e9272aca88958a86b444bfe77d0cffb0687e37f02203d356aa63af56ce33426eb39a2966245d6da26257c0678299d3a3728cfbe917314a13ec3b1536e':
 - testdb   (dbid:x24c29a32f0bc70ffa5b413687f8d122c67a4d316ac245197adf82436)
```

## Read Schema

The `read-schema` subcommand is used to display schema information for a deployed database.  This command takes no arguments, however it can accept several different flags.

A database can either be selected with `--owner` and `--name`, or with a database ID `--dbid`. `--dbid` will be used if both are given. If an `--owner` flag is not provided, it will default to the hex public key of the private key that is [configured](./kwil-cli/configuration).

```bash
# configured private key will be used to determine owner
$ kwil-cli database read-schema --name=mydb
# or
$ kwil-cli database read-schema --owner=04fa5c2d7e9272aca88958a86b444bfe77d0cffb0687e37f02203d356aa63af56ce33426eb39a2966245d6da26257c0678299d3a3728cfbe917314a13ec3b1536e --name=mydb
# or
$ kwil-cli database read-schema --dbid=x24c29a32f0bc70ffa5b413687f8d122c67a4d316ac245197adf82436

## output
Tables:
  users
    Columns:
    id
      Type: INT
      PRIMARY_KEY
      NOT_NULL
```

## Execute

The `execute` subcommand is used to execute an predefined action against the database.

A database can either be selected with `--owner` and `--name`, or with a database ID `--dbid`. `--dbid` will be used if both are given. If an `--owner` flag is not provided, it will default to the hex public key of the private key that is [configured](./kwil-cli/configuration).

You need to pass a required `--action` flag to specify the name of the action you wish to execute.  This name must be the same as the one defined in the Kuneiform schema.

Finally, in order to pass parameters to the query, you must specify the inputs as arguments.  You must first specify the name of the parameter you are filling, and then the value.  Queries should follow the layout below:

```bash
kwil-cli database execute <input_name_1>:<value> <input_name_2>:<value> --action=<action_name> --dbid=<db_id>
```

For example, if you were executing an action named "create_user" that took three parameters: $id (int), $username (text), and $age (int), you would pass arguments as follows:

```bash
$ kwil-cli database execute 'id:1' 'username:satoshi' 'age:33' --name mydb --action=create_user  

## output
TxHash: f955d6e835e033786aa2ad6b001b91558a7504852ea4fd88c85e6c4ea0bdd147
```

## Call Action

The `call` subcommand is used to execute an predefined [`view` action](../kuneiform/supported-features.mdx#access-tags) against a database.

The same flags that the []`execute`](#execute) subcommand supports can be used here.  This command contains one additional flag `--authenticate`, which signs the message, identifying the caller's public key to the database. If this flag is not provided, the message will not be signed.

For example, to call an action named `get_user` that took one parameter `username (text)`, you would pass arguments as follows:

```bash
$ kwil-cli database call 'username:satoshi' --action=get_user  --name=mydb

## output
| age | id | username |
+-----+----+----------+
|  33 |  2 | satoshi  |

```

## Batch

The `batch` subcommand is used to execute an action with the data from a CSV file.  The action is executed transactionally, with either all succeeding or all failing.

A database can either be selected with `--owner` and `--name`, or with a database ID `--dbid`. `--dbid` will be used if both are given. If an `--owner` flag is not provided, it will default to the hex public key of the private key that is [configured](./kwil-cli/configuration).

You need to pass a required `--action` flag to specify the name of the action you wish to execute.  This name must be the same as the one defined in the Kuneiform schema.

`--path` need to provided to point to the csv file containing the actual inputs.

### Input Mappings

In order for the `kwil-cli` to recognize what action input should be filled by each row, you should specify the relationship between CSV columns and action inputs. This can be done by specifying the CSV column and the corresponding input, delimited by a colon, using the flag `--map-input` or `-m`.

For example, if we have the following CSV:

```csv
id,full_name,age
1,Theodore Berry,51
2,Ada Rodriquez,22
3,Warren Ray,33
```

And the following action:

```typescript
action create_user($id, $name, $age) public {
    INSERT INTO users VALUES($id, $name, $age);
}
```

You would specify these inputs as follows:

```bash
--map-input='id:id' --map-input='full_name:name' --map-input='age:age'
```

or

```bash
-m=id:id -m=full_name:name -m=age:age
```

### Column Values

You can also set a fixed value for every input.  This is helpful if you want to use something like a `created_at` column, where you use your machine's local time.  
This can be set with the flag `--value` or `-v`.

An example that sets all inserted rows in the column `created_at` to your machine's local time using the bash date function would look like:

```bash
--value=created_at:$(date +%s)
# or
-v=created_at:$(date +%s)
```

### Example

An example batch execution might look like this:

```bash
$ kwil-cli database batch --path=./users.csv --action=create_user -m=id:id -m=full_name:name -m=age:age --dbid=x24c29a32f0bc70ffa5b413687f8d122c67a4d316ac245197adf82436 --value=created_at:$(date -I seconds)

## output
TxHash: 852aaa9d923359b1b65f0fedb28a4ded92d0ea3276b60bb3c1ce7f9345ec1276
```
