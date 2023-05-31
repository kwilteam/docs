---
sidebar_position: 4
sidebar_label: "Funding"
id: cli-funding
title: Funding
description: Learn how to use the Kwil CLI to approve and deposit funds, get your balance, and other account metadata
slug: /cli/funding
---

## The "fund" Subcommand

The fund subcommand is used to manage payment functionality for Kwil.  The command supports the following functionalities:

* Get-Account: Reading account data, such as funds spent vs unspent, and account nonces.
* Approve: Approving tokens to be deposited to smart contracts.
* Deposit: Depositing tokens to smart contracts.
* Balances: Reading token balances and allowances.

## Get-Account

The `get-account` subcommand is used to retrieve your active account state from the Kwil network.  This command will return an addresses unspent balance, spent balance, and current account nonce.

By default, `get-account` retrieves information for your configured wallet.  You can optionally pass the `--address` (or `-a`) flag to get the information for any address on the network.

`kwil-cli fund get-account --address=0x37Fc1953e4A26007E6Df52f06B5897a998F51f5D`

## Balances

The `balances` subcommand is used to retrieve your token balance and approved amounts.  While the get-account command retrieves your addresses active state from the Kwil network, the balances command retrieves your addresses's information from the chain on which your funds were deposited from.

Similar to the `get-account` command, the balances command has an options `--address` flag to specify addresses other than the one you have configured.

```
kwil-cli fund balances --address=0x37Fc1953e4A26007E6Df52f06B5897a998F51f5D
```

## Approve

The `approve` subcommand is used to approve tokens to be spent by the deposit smart contract.  For example, if you deposit funds from Ethereum, then this command is used to call the ERC-20 approve method.  It automatically selects the token and deposit contract used by the Kwil network you are using.

The `approve` command takes one argument, which is the amount of tokens you want to approve.

``` 
kwil-cli fund approve 100
```

## Deposit

The `deposit` subcommand is used to deposit funds into a deposit smart contract.  The CLI automatically detects the proper token and deposit contract address to use for the Kwil network you are using.

The `deposit` command takes one argument, which is the amount of tokens to deposit.

```
kwil-cli fund deposit 100
```