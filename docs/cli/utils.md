---
sidebar_position: 5
sidebar_label: "Utils"
id: cli-utils
title: Utils
description: Learn about the utility commands provided in the Kwil CLI
slug: /cli/utils
---

## The "utils" Subcommand

The `utils` subcommand contains utility functions that may be helpful as you use Kwil. The command contains the following functionality:

* Encode: Encodes data to the Kwil native format
* Ping: pings your Kwil provider to ensure you have a connection
* Print-Config: Prints your local default CLI configuration
* Sign: Generates an ECDSA signature of a string

## Ping

The `ping` subcommand is used to see if you can establish a connection with your Kwil provider. It takes no arguments and has no flags.

```
kwil-cli utils ping
```

## Print-Config

The `print-config` subcommand is used to print your local CLI configuration.  It takes no arguments and has no flags.

```
kwil-cli utils print-config
```

## Sign

The `sign` subcommand is used to generate a signature for a string input.  By default, it will use your locally configured private key.  It takes one argument, which is the string you want to sign, and has no flags.

```
kwil-cli utils sign my_message_to_sign
```