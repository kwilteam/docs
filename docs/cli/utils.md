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

## Encode

The `encode` subcommand is used to generate a Base64 encoding of data that can be read natively by the Kwil network.  Since Kwil guarantees type safety across different languages and systems, it has its own binary encoding to enforce type safety.

The `encode` command takes no arguments, but has two required flags.  The first flag is the `--value` (or `-v`) flag, which is the value you wish to encode. The second flag is the `--type` (or `-t`) flag, which is used to designate the data type of your passed variable. This value must be either `text` or `int`. 

```
kwil-cli utils encode --value=satoshi --type=text
```

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