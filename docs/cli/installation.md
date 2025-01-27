---
sidebar_position: 1
sidebar_label: "Installation"
id: kwil-cli-installation
title: Installation
description: Install kwil-cli
slug: /kwil-cli/installation
---

`kwil-cli` is a command line tool for interacting with a Kwil network. It allows users to author transactions, deploy database, write and read data, and manage tokens.

## Download the `kwil-cli` Executable

The Kwil CLI (`kwil-cli`) is packaged together with Kwil Daemon (`kwild`), which can be [downloaded from the main Kwil repo](https://github.com/kwilteam/kwil-db/releases). One downloaded, extract the `kwil-cli` file from the archive and put it
into a folder that is in your `PATH` environment.

## Verify Installation

Open a terminal and run the following at the command prompt:

```bash
kwil-cli version
```

If installed correctly, it should display the version info match your downloaded version.

Continue to the [Configuration](/docs/cli/configuration.md) page to setup a default CLI configuration.
