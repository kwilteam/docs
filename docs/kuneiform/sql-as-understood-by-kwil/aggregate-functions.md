---
sidebar_position: 3
sidebar_label: "Aggregate Functions"
id: aggregate-functions
title: Aggregate Functions
description: Supported Aggregate Functions
slug: /aggregate-functions
---

### count(_X_), count(*)
The count(_X_) function returns a count of the number of times that X is not NULL in a group. The count(_*_) function (_w_ith no arguments) returns the total number of rows in the group.

### group\_concat(_X_), group\_concat(_X_,_Y_)
The group_concat(_)_ function returns a string which is the concatenation of all non-NULL values of X. If parameter Y is present then it is used as the separator between instances of X. A comma (_"_,") is used as the separator if Y is omitted. The order of the concatenated elements is arbitrary.

### max(_X_)
The max(_)_ aggregate function returns the maximum value of all values in the group. The maximum value is the value that would be returned last in an ORDER BY on the same column. Aggregate max(_)_ returns NULL if and only if there are no non-NULL values in the group.

### min(_X_)
The min(_)_ aggregate function returns the minimum non-NULL value of all values in the group. The minimum value is the first non-NULL value that would appear in an ORDER BY of the column. Aggregate min(_)_ returns NULL if and only if there are no non-NULL values in the group.
