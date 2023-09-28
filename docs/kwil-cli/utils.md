---
sidebar_position: 5
sidebar_label: "Utils"
id: kwil-cli-utils
title: Utils
description: Utility commands provided in kwil-cli
slug: /kwil-cli/utils
---

The `utils` subcommand contains utility functions that may be generally helpful as you use Kwil. The subcommand contains the following functionality:

* [ping](#ping): Pings your Kwil provider to check if it is accessible.
* [print-config](#print-config): Prints your local CLI configuration.
* [query-tx](#query-tx): Queries the status of a transaction, identified by its hash.

## ping

The `ping` subcommand is used to see if you can establish a connection with your Kwil provider. It takes no arguments and has no flags.

```bash
$ kwil-cli utils ping

## Output
pong
```

## print-config

The `print-config` subcommand is used to print your local CLI configuration.  It takes no arguments and has no flags.

```bash
kwil-cli utils print-config

## output
PrivateKey: ***
GrpcURL: 127.0.0.1:50051
TLSCertFile: 
```

## query-tx

the `query-tx` subcommand queries a tx by its transaction id, and returns its current status.

```bash
kwil-cli utils query-tx 852aaa9d923359b1b65f0fedb28a4ded92d0ea3276b60bb3c1ce7f9345ec1276

## output
Transaction ID: 852aaa9d923359b1b65f0fedb28a4ded92d0ea3276b60bb3c1ce7f9345ec1276
Status: success
Height: 725
Log: success
```
