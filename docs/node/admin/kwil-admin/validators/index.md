---
sidebar_position: 0
sidebar_label: "validators"
id: "kwil-admin-validators"
title: "kwil-admin validators"
description: "The `validators` command provides functions for creating and broadcasting validator-related transactions."
---

The `validators` command provides functions for creating and broadcasting validator-related transactions (join/approve/leave), and retrieving information on the current validators and join requests.

### Options

```
  -h, --help               help for validators
  -s, --rpcserver string   admin RPC server address (default: 127.0.0.1:50151) (default "127.0.0.1:50151")
```

### Options inherited from parent commands

```
      --output text   the format for command output - either text or `json` (default "text")
```

### Subqueries

* [kwil-admin validators approve](./kwil-admin-validators-approve) - A current validator may approve an active join request for a candidate validator using the `approve` subcommand.
* [kwil-admin validators join](./kwil-admin-validators-join) - A node may request to join the validator set by submitting a join request using the `join` command.
* [kwil-admin validators join-status](./kwil-admin-validators-join-status) - Query the status of a pending validator join request.
* [kwil-admin validators leave](./kwil-admin-validators-leave) - A current validator may leave the validator set using the `leave` command.
* [kwil-admin validators list](./kwil-admin-validators-list) - List the current validator set of the network.
* [kwil-admin validators remove](./kwil-admin-validators-remove) - Command `remove` votes to remove a validator from the validator set.
