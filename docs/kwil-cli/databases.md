---
sidebar_position: 3
sidebar_label: "Databases"
id: kwil-cli-databases
title: Databases
description: Database related operations.
slug: /kwil-cli/databases
---

The database subcommand contains all of the commands for interacting with databases.  

Currently, it has following subcommand:
* [deploy](#deploy): Deploy a database schema, by sending TX.
* [drop](#drop): Drop a database schema, by sending TX.
* [query](#direct-query-owner-only): Query a database using raw sql(`select` only).
* [list](#list): List deployed databases associated with a wallet.
* [read-chema](#read-schema): Display the schema of a deployed database.
* [execute](#executing-action): Execute an [action](../kuneiform/dml#action-declaration-in-kuneiform-language) against database, , by sending TX.
* [batch](#batch): Execute a transactionally consistent batch execution from a CSV, , by sending TX.
* [call](#call-action): Call an (view) [action](../kuneiform/dml#action-declaration-in-kuneiform-language) against database.

> NOTE: You can always check the documentation comes with kwil-cli binary, just run `kwil-cli database -h`.

> NOTE: All subcommands that send transaction will return a transaction hash. You can check the status of the transaction using `kwil-cli utils query-tx <hash>`

## Deploy

The `deploy` subcommand is used to deploy a database schema. The `deploy` command takes no arguments, however has one required flag `--path` or `-p`, which is the relative file path to a kuneiform file. You can also use a kuneiform JSON file by provide the flag `--type json` or `-t json`.

```bash
kwil-cli database deploy --path=./my_db.kf
# or
kwil-cli database deploy --path=./my_db.json --type json

## output
TxHash: 52b32477ec6f8919de28af413893ab153e8c8adbf4a47682fa1bba272773f119
```

> If you're looking to deploy a database ASAP, we recommend using our in-browser [IDE](https://ide.kwil.com/).  It is more native than building your own JSON from scratch, and includes validation tools to help prevent errors.

## Drop

The `drop` subcommand is used to drop a deployed database.  You can only drop a database that have been deployed with your provided wallet.  The drop command takes one argument, which is the name of the database you wish to drop.

```bash
kwil-cli database drop mydb
```

## Direct Query (owner only)

The `query` subcommand is used to execute an ad-hoc SELECT statement against database.
This statement cannot modify state, and is therefore read-only, and you can only query against database deployed by the provided private key.  
It takes one argument, which is the SQL query you wish to execute.  

A database can either be selected with `--owner` and `--name`, or with a database ID `--dbid`, `--dbid` will be used if both are given. If `--owner` flag is not provided, it will default to the public key(HEX) of the private key that is [configured](./kwil-cli/configuration).

```bash
kwil-cli database query 'SELECT * FROM users LIMIT 10' --dbid x24c29a32f0bc70ffa5b413687f8d122c67a4d316ac245197adf82436
# or
# configured private key will be used to determine owner
kwil-cli database query 'SELECT * FROM users LIMIT 10' --name mydb
# or
kwil-cli database query 'SELECT * FROM users LIMIT 10' --name mydb --owner abc123

## output
| age | id | username |
+-----+----+----------+
|  33 |  2 | satoshi  |
```

## List

The `list` subcommand is used to list the databases deployed by a particular wallet.  
This command takes no arguments, and by default will list the databases for the wallet you have configured.  
You can list databases deployed from any wallet using the optional --owner (or -o) flag.

```bash
kwil-cli database list --owner=04812bef44f6e7b2a19c0b01c2dca5e54ba1935a1890ffdcb93abd0c534b209c21e4f6176823fef493f7b5afaa456f31d5293363d8f801c540ebcc061812890cba

## output
Databases belonging to '04812bef44f6e7b2a19c0b01c2dca5e54ba1935a1890ffdcb93abd0c534b209c21e4f6176823fef493f7b5afaa456f31d5293363d8f801c540ebcc061812890cba':
 - testdb   (dbid:x24c29a32f0bc70ffa5b413687f8d122c67a4d316ac245197adf82436)

```

## Read Schema

The `read-schema` subcommand is used to display schema information for a deployed database.  This command takes no arguments, however it can accept several different flags. 

A database can either be selected with `--owner` and `--name`, or with a database ID `--dbid`, `--dbid` will be used if both are given. If `--owner` flag is not provided, it will default to the public key(HEX) of the private key that is [configured](./kwil-cli/configuration).


```bash
# configured private key will be used to determine owner
kwil-cli database read-schema --name=mydb
# or
kwil-cli database read-schema --owner=04812bef44f6e7b2a19c0b01c2dca5e54ba1935a1890ffdcb93abd0c534b209c21e4f6176823fef493f7b5afaa456f31d5293363d8f801c540ebcc061812890cba --name=mydb
# or
kwil-cli database read-schema --dbid=x24c29a32f0bc70ffa5b413687f8d122c67a4d316ac245197adf82436

## output
Tables:
  users
    Columns:
    id
      Type: INT
      PRIMARY_KEY
      NOT_NULL
    username
      Type: TEXT
      DEFAULT
        sds
    age
      Type: INT
      MIN
        0
    wallet
      Type: BLOB
      UNIQUE
Actions:
  get_user
    Inputs: [$username]
  create_user
    Inputs: [$id $username $age]
```

## Executing Action

The `execute` subcommand is used to execute an predefined action against the database.

A database can either be selected with `--owner` and `--name`, or with a database ID `--dbid`, `--dbid` will be used if both are given. If `--owner` flag is not provided, it will default to the public key(HEX) of the private key that is [configured](./kwil-cli/configuration).

You need to pass a required `--action` flag to specify the name of the action you wish to execute.  This name must be the same as the one defined in your kuneiform.

Finally, in order to pass parameters to the query, you must specify the inputs as arguments.  You must first specify the name of the parameter you are filling, and then the value.  Queries should follow the layout below:

```bash
kwil-cli database execute <input_name_1>:<value> <input_name_2>:<value> --action=<action_name> --dbid=<db_id>
```

For example, if you were executing an action named "create_user" that took three parameters: id (int), username (text), and age (int), you would pass arguments as follows:

```bash
kwil-cli database execute "id:1" "username:satoshi" "age:33" --name mydb --action=create_user  

## output
TxHash: f955d6e835e033786aa2ad6b001b91558a7504852ea4fd88c85e6c4ea0bdd147
```

## Batch

The `batch` subcommand is used to execute an action with the data from a CSV file.  The action is executed transactionally, with either all succeeding or all failing.

A database can either be selected with `--owner` and `--name`, or with a database ID `--dbid`, `--dbid` will be used if both are given. If `--owner` flag is not provided, it will default to the public key(HEX) of the private key that is [configured](./kwil-cli/configuration).

You need to pass a required `--action` flag to specify the name of the action you wish to execute.  This name must be the same as the one defined in your kuneiform.

`--path` need to provided to point to the csv file contains the actuall inputs.


### set input mappings

In order for kwil-cli to recognize what action input should be filled by each row, you should specify the relationship between CSV columns and action inputs. This can be done by specifying the CSV column and the corresponding input, delimited by a colon, using flag `--map-input` or `-m`.

For example, if we have the following CSV:

```csv
id,full_name,age
1,Theodore Berry,51
2,Ada Rodriquez,22
3,Warren Ray,33
```

And the following action:

```
action create_user($id, $name, $age) public {
    INSERT INTO users VALUES($id, $name, $age);
}
```

You would specify these inputs as follows:

```
--map-input='id=id' --map-input='full_name:name' --map-input='age:age'
```
or

```
-m=id:id -m=full_name:name -m=age:age
```

### set column values

You can also set a fix value for every input.  This is helpful if you want to use something like a created_at column, where you use your machine's local time.  
This can be set with the flag `--value` or `-v`.

An example that sets all inserted rows in the column created_at to your machines local time using the bash date function would look like:

```bash
--value=created_at:$(date +%s)
# or
-v=created_at:$(date +%s)
```

### example

An example usage of the batch command looks like this:

```bash
kwil-cli database batch --path=./users.csv --action=create_user -m=id:id -m=full_name:name -m=age:age --dbid=x24c29a32f0bc70ffa5b413687f8d122c67a4d316ac245197adf82436 --value=created_at:$(date -I seconds)

## output
TxHash: 852aaa9d923359b1b65f0fedb28a4ded92d0ea3276b60bb3c1ce7f9345ec1276
```

## Call Action

The `call` subcommand is used to execute an predefined **view** action against the database. 

All the flags `execute` subcommand supports can be used here, with one more flag `--authenticate` that is used to 
tell **kwil-cli** to sign the message with the provided private key.  If this flag is not provided, the message will not be signed.

For example, if you were calling an action named "get_user" that took one parameter: username (text), you would pass arguments as follows:

```bash
kwil-cli database call username:satoshi --action=get_user  --name=mydb

## output
| age | id | username |
+-----+----+----------+
|  33 |  2 | satoshi  |

```