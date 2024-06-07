---
sidebar_position: 0
sidebar_label: "validators"
id: "kwil-admin-validators"
title: "kwil-admin validators"
description: "The `validators` command provides functions for creating and broadcasting validator-related transactions."
slug: /ref/kwil-admin/validators
---

## kwil-admin validators

The `validators` command provides functions for creating and broadcasting validator-related transactions.

### Synopsis

The `validators` command provides functions for creating and broadcasting validator-related transactions (join/approve/leave), and retrieving information on the current validators and join requests.

### Options

```
      --authrpc-cert string   kwild's TLS certificate
  -h, --help                  help for validators
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
* [kwil-admin validators approve](/docs/ref/kwil-admin/validators/approve)	 - A current validator may approve an active join request for a candidate validator using the `approve` subcommand.
* [kwil-admin validators join](/docs/ref/kwil-admin/validators/join)	 - A node may request to join the validator set by submitting a join request using the `join` command.
* [kwil-admin validators join-status](/docs/ref/kwil-admin/validators/join-status)	 - Query the status of a pending validator join request.
* [kwil-admin validators leave](/docs/ref/kwil-admin/validators/leave)	 - A current validator may leave the validator set using the `leave` command.
* [kwil-admin validators list-join-requests](/docs/ref/kwil-admin/validators/list-join-requests)	 - List all pending join requests.
* [kwil-admin validators list-validators](/docs/ref/kwil-admin/validators/list-validators)	 - List the current validator set of the network.
* [kwil-admin validators remove](/docs/ref/kwil-admin/validators/remove)	 - Command `remove` votes to remove a validator from the validator set.

