---
sidebar_position: 2
sidebar_label: "Configuration"
id: kwil-cli-configuration
title: Configuration
description: Configurations for kwil-cli
slug: /kwil-cli/configuration
---

**kwil-cli** supports two ways to provide configuration:
- persistent configuration, e.g. local configuration file
- global flags, taking effect only for the current cli invocation

## Persistent Configuration 

A configuration file will be used to store the configuration, which also serves
as default values for global flags(if file exists). The configuration file is located at `~/.kwil_cli/config.json` by default.

You can run this command to easily configure the CLI:

```sh
kwil-cli configure
```

> You can skip over any value by simply pressing enter.

### Kwil gRPC URL

The Kwil gRPC URL is the URL of the Kwil provider you are connecting to.  This acts as your gateway to the network, similar to Ethereum providers.  It is necessary for virtually all subcommands except `utils`.   

To set the Kwil RPC URL with flag, you can use `--kwil-provider=localhost:8080`.

> NOTE: This is gRPC url, you don't need to specify protocal like http/https.

> NOTE: We provide a public gRPC [URL](grpc.kwil.com:80) for testing purposes, but we recommend running your own node for production.

### Private Key

Your private key(you can get from your wallet) is used to sign transaction/message for Kwil network.

Currently, **kwil-cli** supports following wallet private key:
- evm private key, i.e. secp256k1 private key

To set this variable with a global flag, you can use `--private-key=[YOUR_PRIVATE_KEY]`.

### TLS certeficate

TLS certificate file is used to establish secure connection to Kwil provider.

To set the TLS certeficat file with flag, you can use `--tls-cert-file=[YOUR_TLS_CERT_FILE]`.


## Global Flags

Global flags just override the values in the configuration file(if exists) in runtime, without modifying the configuration file itself.

Flags includes:
- `--kwil-provider`: specify Kwil gRPC URL
- `--private-key`: specify private key
- `--tls-cert-file`: specify TLS certificate file


> NOTE: There is another specical flag `--output`, which is used to specify the output format. By default it's `text`, but you can also set it to `json`.  When set to `json`, command output will be formatted as JSON instead of text.