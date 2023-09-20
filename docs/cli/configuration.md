---
sidebar_position: 2
sidebar_label: "Configuration"
id: cli-configuration
title: Configuration
description: Learn how to set default configurations for your CLI
slug: /cli/configuration
---

The Kwil CLI supports setting default values that are commonly passed as flags.  These default values are persisted locally on your machine, and are used between sessions.  Not all values need to be configured; instead, certain functions require certain values to be configured.  As an alternative to configuration, the values can also be passed as a global flag, or be temporarily overwritten by a global flag.

To set defaults that persist on your machine, run the command:

```sh
kwil configure
```

You can skip over any value by simply pressing enter.

## Kwil gRPC URL

The Kwil gRPC URL is the URL of the Kwil provider you are connecting to.  This acts as your gateway to the network, similar to Ethereum providers.  It is necessary for virtually all functions besides approving tokens, reading your total deposit balance, and utils.   Your URL can be passed in with a protocol (i.e. `http://localhost:8080` or without one `locahost:8080`).

To set the Kwil RPC URL with a flag, you can pass `--kwil-provider=localhost:8080`.

> The current Kwil gRPC URL can be found [here](../links).

## Client Chain RPC URL

The Client Chain RPC URL is the URL of your chain provider for the chain on which your deposit smart contract lives.  This is necessary for any functions that involve funding or interacting with the chain on which the deposit smart contract lives.  Unlike the Kwil RPC URL, **this requires you to pass the protocol in the endpoint** (i.e. `http://localhost:8080`).  Due to how popular EVM providers give keys, we are unable to dynamically fill this information.

To set this variable with a global flag, you can pass `--client-chain-provider=localhost:8080`.

## Private Key

Your private key is the key that is used to sign transactions for any network. **This key never leaves your client.** Currently, Kwil only supports the keys that are supported by EVM chains, however we plan on adding more.

To set this variable with a global flag, you can pass `--private-key=your_private_key`.
