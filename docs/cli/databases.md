---
sidebar_position: 3
sidebar_label: "Databases"
id: cli-databases
title: Databases
description: Learn how to deploy, drop, view, and execute queries on a database
slug: /cli/databases
---

## The "database" Subcommand

The database subcommand contains all of the commands necessary for interacting with databases.  Currently, the subcommand supports the following functionalities:

* Deploy: Deploying a database schema
* Drop: Dropping a database schema
* Query: Queries a database (can only accept read-only statements)
* List: Listing database schemas for a wallet
* Read Schema: Displays the schema of a deployed database
* Execute: Execute a query against a database
* Batch: Execute a transactionally consistent batch execution from a CSV

## Deploy

The `deploy` subcommand is used to deploy a database schema. The `deploy` command takes no arguments, however has one required flag.  Users must specify the relative filepath to their JSON with the `--path` or `-p` flag.

```
kwil-cli database deploy --path=./my_db.json
```

> If you're looking to deploy a database ASAP, we recommend using our in-browser [IDE](https://ide.kwil.com/).  It is more native than building your own JSON from scratch, and includes validation tools to help prevent errors.

## Drop

The drop subcommand is used to drop a deployed database.  You can only drop databases that have been deployed with your configured wallet.  The drop command takes one argument, which is the name of the database you wish to drop.

```
kwil-cli database drop mydb
```

## Read

The read subcommand is used to execute an ad-hoc SELECT statement against a database.
This statement cannot modify state, and is therefore read-only.  It takes one argument, which is the SQL query you wish to execute.  It can be configured to point to either database ID's or databases identified by name and owner:

```bash
kwil-cli database query 'SELECT * FROM my_table LIMIT 10' --dbid xca123

kwil-cli database query 'SELECT * FROM my_table LIMIT 10' --name my_db --owner 0xabc123
```

## List

The list subcommand is used to list the databases deployed by a particular wallet.  This command takes no arguments, and by default will list the databases for the wallet you have configured.  You can list databases deployed from any wallet using the optional --owner (or -o) flag.

```
kwil-cli database list --owner=0x37Fc1953e4A26007E6Df52f06B5897a998F51f5D
```

## Read Schema

The read-schema subcommand is used to display schema information for a deployed database.  This command takes no arguments, however it can accept several different flags.  A database can either be selected with an owner and name, or with a database ID.  If both are passed as flags, it will give preference to the database ID.

To select a database by its owner and name, you can use the `--owner`(or `-o`) flag, and the `--name` (or `-n`) flag.  If no `--owner` flag is provided, it will default to databases owned by the wallet you are using, if a wallet has been [configured](../cli/configuration).

```
kwil-cli database read-schema --name=mydb
```

or

```
kwil-cli database read-schema --owner=0x37Fc1953e4A26007E6Df52f06B5897a998F51f5D --name=db1
```

Alternatively, you can pass the `--dbid` flag (or `-i`)`  to identify the database to read from.

```
kwil-cli database read-schema --dbid=xc57b99f921ac99896d861b4462d7874212e0a63e53b2c53d91b0f6d2
```

## Executing Queries

The `execute` subcommand is used to execute against the database.  Currently, Kwil does not support ad-hoc queries, and only supports prepared statements defined in your schema.

To specify the name of the database you are targeting, you must use either pass a database `--owner` and `--name`, or a `--dbid`.  This works exactly the same as the [read-schema command](#read-schema), where it will auto-fill your address if you only pass a `--name` flag.

To specify the name of the query you wish to execute, you also have to pass a required `--action` flag.  This name must be the same as the one defined in your database.  To read more about query definitions, see the SQL Queries section.

Finally, in order to pass parameters to the query, you must specify the inputs as arguments.  You must first specify the name of the parameter you are filling, and then the value.  Queries should follow the layout below:

```
kwil-cli database execute <input_name_1>:<value> <input_name_2>:<value> --action=<action_name> --dbid=<db_id>
```

For example, if you were executing an INSERT query named "create_user" that took two parameters: name (text), and age (int), you would pass my arguments as follows:

```
kwil-cli database execute name:satoshi age:32 --action=create_user  --name=mydb --owner=0x37Fc1953e4A26007E6Df52f06B5897a998F51f5D
```

## Batch

The batch subcommand is used to batch execute an action with a CSV file.  The action is executed transactionally, with either all succeeding or all failing.

The batch command takes a variety of different flags to specify database target, the action to execute, the CSV file to use, and mappings between the CSV column headers and the action inputs.

### DBID

The database target can be specified either with the DBID flag, or by specifying a name and owner:

```
--dbid=<database_id>
#short-hand
-i=<database_id>
```

OR

```
--name=<db_name> --owner=<owner_address>`
#short-hand
`-n=<db_name> -o=<owner_address>`
```

### Action

The target action can be specified with the action flag:

```
`--action=<action_name>
#short-hand
-a=<action_name>
```

### CSV File

The CSV file containing the inputs can be specified with the path flag:

```
--path=<path_to_csv>
#short-hand
-p=<path_to_csv>
```

### Input Mappings

In order for the CLI to recognize what action input should be filled by each row, you should specify the relationship between CSV columns and action inputs. This can be done by specifying the CSV column and the corresponding input, delimited by a colon. **Since Kwil action inputs begin with a '$', bash will recognize this as a variable if it is not wrapped in quotations.** The Kwil CLI will also automatically detect if a '$' has not been added, and can add it accordingly.

For example, if we have the following CSV:

```
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
--map-input='id=$id' --map-input='full_name:$name' --map-input='age:$age'
```

Like the other flags, map-input also has a shorthand.  The above flags are displayed below as the shorthand usage, and without dollar signs and quotes.  Functionally, these two flags will work the same.

```
-m=id:id -m=full_name:name -m=age:age
```

### Setting Column Values

You can also set entire column values for batch inserts.  This is helpful if you want to use something like a created_at column, where you use your machine's local time.  Columns can be set with the --value flag (or -v).

```
--value=<column_name>:<value>
#short-hand
-v=<column_name>:<value>
```

An example that sets all batch inserted rows in the column created_at to your machines local time using the bash date function would look like:

```
--value=created_at:$(date -I seconds)
# unix:
--value=created_at:$(date +%s)
```

### Example:
An example usage of the batch command looks like this:

```
kwil-cli database batch --path=./users.csv --action=create_user -m=id:id -m=full_name:name -m=age:age --dbid=xe37cbd1f883460c05d773a685b1c53b4b809f8c3794476b32e7fb5d3 --value=created_at:$(date -I seconds)
```