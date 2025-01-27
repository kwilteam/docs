---
sidebar_position: 99
sidebar_label: "validators"
id: "kwild-validators"
title: "kwild validators"
description: "Validator related actions"
slug: /ref/kwild/validators
---

## kwild validators

Validator related actions

### Synopsis

The validators command provides functions for creating and broadcasting validator-related transactions (join/approve/leave), and retrieving information on the current validators and join requests.

### Options

```
      --authrpc-cert string   kwild's TLS server certificate, required for HTTPS server
  -h, --help                  help for validators
      --output string         the format for command output - either 'text' or 'json' (default "text")
      --pass string           admin server password (alternative to mTLS with tlskey/tlscert)
  -s, --rpcserver string      admin RPC server address (either UNIX socket path or TCP address) (default "/tmp/kwild.socket")
      --tlscert string        kwild's TLS client certificate file for server to authenticate us (default "auth.cert")
      --tlskey string         kwild's TLS client key file to establish a mTLS (authenticated) connection (default "auth.key")
```

### Options inherited from parent commands

```
  -r, --root string   root directory (default "/home/jon/.kwild")
```

### SEE ALSO

* [kwild](/docs/ref/kwild)	 - Kwil daemon
* [kwild validators approve](/docs/ref/kwild/validators/approve)	 - Approve an active join request for a candidate validator (your node must be a validator).
* [kwild validators join](/docs/ref/kwild/validators/join)	 - Request to join the validator set.
* [kwild validators join-status](/docs/ref/kwild/validators/join-status)	 - Get the status of a pending validator join request.
* [kwild validators leave](/docs/ref/kwild/validators/leave)	 - Leave the validator set (your node must be a validator).
* [kwild validators list](/docs/ref/kwild/validators/list)	 - List the current validator set of the network.
* [kwild validators list-join-requests](/docs/ref/kwild/validators/list-join-requests)	 - List all pending join requests.
* [kwild validators remove](/docs/ref/kwild/validators/remove)	 - Votes to remove a validator from the validator set (this node must be a validator).

