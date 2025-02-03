---
sidebar_position: 99
sidebar_label: "consensus"
id: "kwild-consensus"
title: "kwild consensus"
description: "Functions for dealing with consensus update proposals"
slug: /ref/kwild/consensus
---

## kwild consensus

Functions for dealing with consensus update proposals

### Synopsis

The consensus command provides functions for dealing with consensus update proposals.

### Options

```
      --authrpc-cert string   kwild's TLS server certificate, required for HTTPS server
  -h, --help                  help for consensus
      --pass string           admin server password (alternative to mTLS with tlskey/tlscert)
  -s, --rpcserver string      admin RPC server address (either UNIX socket path or TCP address) (default "/tmp/kwild.socket")
      --tlscert string        TLS client certificate file for server to authenticate us (default "auth.cert")
      --tlskey string         TLS client key file to establish a mTLS (authenticated) connection (default "auth.key")
```

### Options inherited from parent commands

```
      --output string   the format for command output - either 'text' or 'json' (default "text")
  -r, --root string     root directory (default "/home/jon/.kwild")
```

### SEE ALSO

* [kwild](/docs/ref/kwild)	 - Kwil daemon
* [kwild consensus approve](/docs/ref/kwild/consensus/approve)	 - Approve a consensus update proposal.
* [kwild consensus list-proposals](/docs/ref/kwild/consensus/list-proposals)	 - List all the pending consensus update proposals.
* [kwild consensus params](/docs/ref/kwild/consensus/params)	 - Show active consensus parameters.
* [kwild consensus propose](/docs/ref/kwild/consensus/propose)	 - Submit a migration proposal.
* [kwild consensus update-status](/docs/ref/kwild/consensus/update-status)	 - Pending consensus update proposal status.

