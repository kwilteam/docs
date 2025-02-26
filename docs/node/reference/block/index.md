---
sidebar_position: 99
sidebar_label: "block"
id: "kwild-block"
title: "kwild block"
description: "Leader block execution commands"
slug: /ref/kwild/block
---

## kwild block

Leader block execution commands

### Synopsis

The `block` command group has subcommands for managing leader block execution, including status and aborting.

### Options

```
      --authrpc-cert string   kwild's TLS server certificate, required for HTTPS server
  -h, --help                  help for block
      --output string         the format for command output - either 'text' or 'json' (default "text")
      --pass string           admin server password (alternative to mTLS with tlskey/tlscert)
  -s, --rpcserver string      admin RPC server address (either UNIX socket path or TCP address) (default "/tmp/kwild.socket")
      --tlscert string        TLS client certificate file for server to authenticate us (default "auth.cert")
      --tlskey string         TLS client key file to establish a mTLS (authenticated) connection (default "auth.key")
```

### Options inherited from parent commands

```
  -r, --root string   root directory (default "~/.kwild")
```

### SEE ALSO

* [kwild](/docs/ref/kwild)	 - Kwil daemon
* [kwild block abort](/docs/ref/kwild/block/abort)	 - Abort active execution of the current block.
* [kwild block status](/docs/ref/kwild/block/status)	 - Get the status of any ongoing block execution.

