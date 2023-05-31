---
sidebar_position: 4
sidebar_label: "Operators"
id: operators
title: Operators
description: SQL Operators
slug: /operators
---

## Supported Arithmetic Operators

<table class="custom-table">

|Operator|Description|
|:------:|:---------:|
| + (Addition) | Adds values on either side of the operator | 
| - (Subtraction) | Subtracts the right hand operand from the left hand operand |
| * (Multiplication) | Multiplies values on either side of the operator | 
| / (Division) | Divides the left hand operand by the right hand operand | 
| % (Modulus) | Divides the left hand operand by the right hand operand and returns the remainder | 

</table>

## Supported Comparison Operator

|Operator|Description|
|:------:|:---------:|
| == | Checks if the values of two operands are equal or not, if yes then the condition becomes true. | 
| = | Checks if the values of two operands are equal or not, if yes then the condition becomes true. | 
| != | Checks if the values of two operands are equal or not, if the values are not equal, then the condition becomes true. | 
| &lt;&gt; |	Checks if the values of two operands are equal or not, if the values are not equal, then the condition becomes true. | 
| > | Checks if the values of the left operand is greater than the value of the right operand, if yes then the condition becomes true. | 
| < | Checks if the values of the left operand is less than the value of the right operand, if yes then the condition becomes true. | 
| >= | Checks if the value of the left operand is greater than or equal to the value of the right operand, if yes then the condition becomes true. | 
| <= | Checks if the value of the left operand is less than or equal to the value of the right operand, if yes then the condition becomes true. | 
| !< | Checks if the value of the left operand is not less than the value of the right operand, if yes then the condition becomes true. | 
| !> | Checks if the value of the left operand is not greater than the value of the right operand, if yes then the condition becomes true. | 
| IS | The IS operator is used in SQL to compare a value against NULL. It is used with the NULL keyword to check if a value is NULL. For example, column_name IS NULL would return true if the value in column_name is NULL. |
| IS NOT | The IS NOT operator is used to check if a value is not NULL. For example, column_name IS NOT NULL would return true if the value in column_name is not NULL. |
| IN | The IN operator is used to check if a value matches any value in a list or a subquery. For example, column_name IN (value1, value2, ...) |
| NOT IN | The NOT IN operator is used to check if a value does not match any value in a list or subquery. For example, column_name NOT IN (value1, value2, ...). |
| BETWEEN | The BETWEEN operator is used to check if a value is within a specified range. For example, column_name BETWEEN value1 AND value2 would return true if the value in column_name is between value1 and value2, inclusive. |
| NOT BETWEEN | The NOT BETWEEN operator used to check if a value is not within a specified range. For example, column_name NOT BETWEEN value1 AND value2 would return true if the value in column_name is not between value1 and value2. |

## Supported Logical Operators

|Operator|Description|
|:------:|:---------:|
| AND | The AND operator allows the existence of multiple conditions in an SQL statement's WHERE clause. |
| OR | The OR operator is used to combine multiple conditions in an SQL statement's WHERE clause. |

## Supported String Operators

|Operator|Description|
|:------:|:---------:|
| LIKE | For pattern matching against a specific column or string. The pattern can include wildcard characters like % (matches any sequence of characters) and _ (matches any single character). |
| NOT LIKE | Select the rows that do not match the specified LIKE pattern. |
| GLOB | Similar to LIKE, but it uses a different wildcard pattern matching syntax. In a GLOB pattern, * matches any sequence of characters, and ? matches any single character. |
| NOT GLOB | Select the rows that do not match the specified GLOB pattern. |
| REGEXP | Regular expressions define a search pattern using special characters and quantifiers to match specific patterns in the data. |
| NOT REGEXP | Select the rows that do not match the specified regular expression pattern. |
| MATCH | Select the rows that match the specified full-text search query. |
| NOT MATCH | Select the rows that do not match the specified full-text search query. |

## Supported Bitwise Operators

|Operator|Description|
|:------:|:---------:|
| & | And |
| \| | OR |
| ^ | Xor |
| ~ | Not |
| << | Left Shift |
| >> | Right Shift |
