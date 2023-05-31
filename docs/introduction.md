---
sidebar_position: 1
sidebar_label: "Introduction"
id: introduction
title: Welcome to Kwil!
description: Introduction to Kwil
slug: /introduction
---

## The permissionless database for Web3-enabled applications

Kwil is the first permissionless database that enables structured data storage across a decentralized network. Kwil extends the functionality of traditional relational databases by providing a layer on-top of existing engines that enforce rules necessary for building secure, permissionless data stores.

Have a question? Join our [Discord!](https://discord.com/invite/HzRPZ59Kay)

### Why Kwil?

Kwil combines the structure, utility, and consistency of a traditional OLTP database with the guarantees of decentralized networks.  Broadly speaking, users can think of Kwil as Postgres with the following additional features:

* Distributed, fault-tolerant data replication.
* Access-control configuration appropriate for permissionless applications.
* Pricing based on individual query computational complexity (instead of instance based).

#### Data Replication

Kwil network data is replicated across a sufficient number of nodes to guarantee that at any point in time, there is an accurate and available copy of a database's active state.  Not only does this ensure uptime and resilience, but it also enables users of applications built on top of Kwil to relax their trust assumptions for an application, in favor of the trust guarantees provided by a distributed ledger.

#### Access Control

The Kwil network offers a unique method of writer access-control for applications. While it is common for user authentication to be part of the application layer in the centralized stack, Kwil provides a suite of tools to enable developers to bake access-control directly into their application's data. By making access configurable at the protocol level, Kwil solves for many of the security and privacy concerns plaguing typical distributed storage networks.

> One of our team's main areas of focus is currently in access-control rules. If you have feedback / requirements that are not yet met, please let us know!

#### Query Pricing

The Kwil network implements a fair pricing system that enables users to only pay for what they use. Drawing from the pricing model of technologies like the EVM, Kwil has built a deterministic pricing model based on the relative computational complexity of queries. This ensures that all network participants play on fair ground, and are not able to overwhelm, DDOS, or otherwise restrict the networt.

### Problem: Advanced Data Storage Limit Permissionless Data Structures

Currently, in Web3, permissionless data structures are limited in terms of the complexity of data that can be stored. Solutions like Ethereum and Solana allow for basic [key-value](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) storage. Solutions like Arweave and Filecoin enable [unstructured data](https://en.wikipedia.org/wiki/Unstructured_data) or file system storage. However, for any structured data storage (e.g., [relational](https://en.wikipedia.org/wiki/Relational_database), [graph](https://en.wikipedia.org/wiki/Graph_database)), there is no scalable, cost-efficient decentralized database. Developers are forced to rely on centralized solutions, ultimately limiting the degree to which their applications can become decentralized and permissionless.

### Solution: Kwil - The Permissionless & Decentralized Database

Kwil is the first permissionless database that enables application developers to store and manage structured data across a decentralized network. Kwil currently supports SQL databases and plans to support additional structured data stores in future releases. Kwil distributes existing database engines across a series of nodes to ensure that data remains consistent, composable, and permissionless. With Kwil, developers can build with fully decentralized and permissionless data, enabling the next generation of Web3-enabled applications.