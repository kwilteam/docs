---
sidebar_position: 99
sidebar_label: "utils"
id: "kwild-utils"
title: "kwild utils"
description: "Miscellaneous utility commands."
slug: /ref/kwild/utils
---

## kwild utils

Miscellaneous utility commands.

### Synopsis

The `utils` commands provide various miscellaneous utility commands such as `query-tx` for querying a transaction status.

### Options

```
      --authrpc-cert string   kwild's TLS server certificate, required for HTTPS server
  -h, --help                  help for utils
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
* [kwild utils query-tx](/docs/ref/kwild/utils/query-tx)	 - Queries a transaction from the blockchain. Requires 1 argument: the hex encoded transaction ID.

