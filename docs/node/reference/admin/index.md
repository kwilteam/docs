---
sidebar_position: 99
sidebar_label: "admin"
id: "kwild-admin"
title: "kwild admin"
description: "Administrative commands using the secure admin RPC service"
slug: /ref/kwild/admin
---

## kwild admin

Administrative commands using the secure admin RPC service

### Synopsis

The `admin` command is used to get information about a running Kwil node using the administration RPC service.

### Options

```
      --authrpc-cert string   kwild's TLS server certificate, required for HTTPS server
  -h, --help                  help for admin
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
* [kwild admin dump-config](/docs/ref/kwild/admin/dump-config)	 - Get and display the current config from the node.
* [kwild admin gen-auth-key](/docs/ref/kwild/admin/gen-auth-key)	 - Generate a new key pair for use with an authenticated admin RPC service.
* [kwild admin peers](/docs/ref/kwild/admin/peers)	 - Print a list of the node's peers, with their public information.
* [kwild admin status](/docs/ref/kwild/admin/status)	 - Print the node's status information.
* [kwild admin version](/docs/ref/kwild/admin/version)	 - Print the node's version.

