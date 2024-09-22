---
sidebar_position: 99
sidebar_label: "migrate"
id: "kwil-admin-migrate"
title: "kwil-admin migrate"
description: "The `migrate` command provides functions for managing migration proposals."
slug: /ref/kwil-admin/migrate
---

## kwil-admin migrate

The `migrate` command provides functions for managing migration proposals.

### Synopsis

The `migrate` command provides functions for managing migration proposals.

### Options

```
      --authrpc-cert string   kwild's TLS certificate, required for HTTPS server
  -h, --help                  help for migrate
      --pass string           admin server password (alternative to mTLS with tlskey/tlscert). May be set in ~/.kwil-admin/rpc-admin-pass instead.
  -s, --rpcserver string      admin RPC server address (either unix or tcp) (default "/tmp/kwild.socket")
      --tlscert string        kwil-admin's TLS certificate file for server to authenticate us (default "auth.cert")
      --tlskey string         kwil-admin's TLS key file to establish a mTLS (authenticated) connection (default "auth.key")
```

### Options inherited from parent commands

```
      --output string   the format for command output - either 'text' or 'json' (default "text")
  -S, --silence         Silence logs
```

### SEE ALSO

* [kwil-admin](/docs/ref/kwil-admin)	 - The Kwil node admin tool.
* [kwil-admin migrate approve](/docs/ref/kwil-admin/migrate/approve)	 - Approve a migration proposal.
* [kwil-admin migrate genesis-state](/docs/ref/kwil-admin/migrate/genesis-state)	 - Download the genesis state corresponding to the ongoing migration.
* [kwil-admin migrate list](/docs/ref/kwil-admin/migrate/list)	 - List all the pending migration proposals.
* [kwil-admin migrate propose](/docs/ref/kwil-admin/migrate/propose)	 - Submit a migration proposal.
* [kwil-admin migrate status](/docs/ref/kwil-admin/migrate/status)	 - Get the status of the pending migration proposal.

