---
sidebar_position: 2
sidebar_label: "Configuration"
id: kwil-cli-configuration
title: Configuration
description: Configurations for kwil-cli
slug: /kwil-cli/configuration
---

`kwil-cli` supports two ways to provide configuration:

- persistent configuration, via a local configuration file
- global flags, which last only for the specified command's lifetime

Global flag configs are given precedence over persistent configs.

## Persistent Configuration

To create a reusable, persistent configuration, you can use the `configure` command.  This will give you the option to set a default value for all global configs.

```bash
kwil-cli configure
```

:::tip
You can skip over any config by simply pressing enter.
:::

The configuration file will be stored at `~/.kwil-cli/config.json`.

## Global Flags

Global flags override the values in the configuration file at runtime, without modifying the configuration file itself.  Below is an example of a `kwil-cli` command that is configured to connecting to `https://your.kwild.rpc.here` using a config flag:

```bash
kwil-cli --provider=https://your.kwild.rpc.here
```

## Available Configs

Below is a table containing the available configs, their flags, an example value, and a description.

| Config | Flag | Example | Description |
|-|-|-|-|
| Kwil RPC Provider URL | `--provider` | `https://longhorn.kwil.com`  | The endpoint of a Kwil node, which will be used for accessing data on the node's network. |
| Kwil Chain ID | `--chain-id` | `kwil-test-chain` | The chain ID of the Kwil network to use. Can be left blank to trust a server-provided value. |
| Private Key | `--private-key` | `0371808159548bae6fe902a88cb432ca`<br/>`d31044324fc8df9c2a0ee72643cf3dda` | The secp256k1 private key to use for signing messages and transactions. |

> NOTE: There is another specical flag `--output`, which is used to specify the output format. By default it's `text`, but you can also set it to `json`.  When set to `json`, command output will be formatted as JSON instead of text.
