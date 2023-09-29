---
sidebar_position: 1
sidebar_label: "Installation"
id: kwil-cli-installation
title: Installation
description: Install kwil-cli
slug: /kwil-cli/installation
---

Until the main Kwil DB repository is open source, the `kwil-cli` command line
application may be downloaded from the Kwil binary release repository.


## Download the `kwil-cli` Executable

The Kwil cli (`kwil-cli`) will be packaged together with Kwil deamon (`kwild`) and Kwil admin tool (`kwil-admin`).
Download the [latest release](https://github.com/kwilteam/binary-releases/releases/tag/v0.6.0-beta)
for your platform.  Extract the `kwil-cli` file from the archive and put it
into a folder that is in your `PATH` environment.

:::note
The binaries will be packaged as described above after the next major release.
The repository link may change soon.
:::

## Verify Installation

Open a terminal and run the following at the command prompt:

```bash
kwil-cli version
```

If installed correctly, it should display a message such as ` Version:	0.6.0-beta`.

Continue to the [Configuration](./configuration) page to setup.
