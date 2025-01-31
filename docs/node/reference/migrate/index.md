---
sidebar_position: 99
sidebar_label: "migrate"
id: "kwild-migrate"
title: "kwild migrate"
description: "Management of migration proposals"
slug: /ref/kwild/migrate
---

## kwild migrate

Management of migration proposals

### Synopsis

The `migrate` commands provide functions for managing network migration proposals.

### Options

```
      --authrpc-cert string   kwild's TLS server certificate, required for HTTPS server
  -h, --help                  help for migrate
      --output string         the format for command output - either 'text' or 'json' (default "text")
      --pass string           admin server password (alternative to mTLS with tlskey/tlscert)
  -s, --rpcserver string      admin RPC server address (either UNIX socket path or TCP address) (default "/tmp/kwild.socket")
      --tlscert string        TLS client certificate file for server to authenticate us (default "auth.cert")
      --tlskey string         TLS client key file to establish a mTLS (authenticated) connection (default "auth.key")
```

### Options inherited from parent commands

```
  -r, --root string   root directory (default "/home/jon/.kwild")
```

### SEE ALSO

* [kwild](/docs/ref/kwild)	 - Kwil daemon
* [kwild migrate approve](/docs/ref/kwild/migrate/approve)	 - Approve a migration proposal.
* [kwild migrate genesis-state](/docs/ref/kwild/migrate/genesis-state)	 - Download the genesis state corresponding to the ongoing migration.
* [kwild migrate proposal-status](/docs/ref/kwild/migrate/proposal-status)	 - Get the status of the pending migration proposal.
* [kwild migrate proposals](/docs/ref/kwild/migrate/proposals)	 - List all the pending migration proposals.
* [kwild migrate propose](/docs/ref/kwild/migrate/propose)	 - Submit a migration proposal.
* [kwild migrate status](/docs/ref/kwild/migrate/status)	 - Get the migration status of the network.

