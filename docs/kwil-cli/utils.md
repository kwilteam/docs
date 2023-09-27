---
sidebar_position: 5
sidebar_label: "Utils"
id: kwil-cli-utils
title: Utils
description: Utility commands provided in kwil-cli
slug: /kwil-cli/utils
---

The `utils` subcommand contains utility functions that may be helpful as you use Kwil. The command contains the following functionality:

* [ping](#ping): pings your Kwil provider to check you correctly configured the provider
* [print-config](#print-config): prints your local configuration
* [query-tx](#query-tx): Queries the status of a transaction by hash

## ping

The `ping` subcommand is used to see if you can establish a connection with your Kwil provider. It takes no arguments and has no flags.

```bash
kwil-cli utils ping

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

```bash
kwil-cli utils query-tx 852aaa9d923359b1b65f0fedb28a4ded92d0ea3276b60bb3c1ce7f9345ec1276

## output
Transaction ID: 852aaa9d923359b1b65f0fedb28a4ded92d0ea3276b60bb3c1ce7f9345ec1276
Status: success
Height: 725
Log: success
```