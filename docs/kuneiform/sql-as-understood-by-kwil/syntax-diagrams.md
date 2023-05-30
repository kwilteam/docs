---
sidebar_position: 1
sidebar_label: "Syntax Diagrams"
id: syntax-diagrams
title: Syntax Diagrams
description: Syntax Diagrams
slug: /syntax-diagrams
---

### sql-stmt

![column-name-list](../sql-as-understood-by-kwil/svg/sql-stmt.svg)

References: [delete-stmt](#delete-stmt) [insert-stmt](#insert-stmt) [select-stmt](#select-stmt) [update-stmt](#update-stmt)

### column-name-list

![column-name-list](../sql-as-understood-by-kwil/svg/column-name-list.svg)

Used By: [update-stmt](#update-stmt) [upsert-clause](#upsert-clause)

### common-table-expression

![common-table-expression](../sql-as-understood-by-kwil/svg/common-table-expression.svg)

Used By: [delete-stmt](#delete-stmt) [insert-stmt](#insert-stmt) [select-stmt](#select-stmt) [update-stmt](#update-stmt)

References: [select-stmt](#select-stmt)

### compound-operator

![compound-operator](../sql-as-understood-by-kwil/svg/compound-operator.svg)

Used By: [select-stmt](#select-stmt)

### delete-stmt

![delete-stmt](../sql-as-understood-by-kwil/svg/delete-stmt.svg)

Used By: [sql-stmt](#sql-stmt)

Referances: [common-table-expression](#common-table-expression) [expr](#expr) [qualified-table-name](#qualified-table-name) [returning-clause](#returning-clause)

### expr

![expr](../sql-as-understood-by-kwil/svg/expr.svg)

Used By: [delete-stmt](#delete-stmt) [indexed-column](#indexed-column) [insert-stmt](#insert-stmt) [join-constraint](#join-constraint) [ordering-term](#ordering-term) [result-column](#result-column) [returning-clause](#returning-clause) [select-stmt](#select-stmt) [table-or-subquery](#table-or-subquery) [update-stmt](#update-stmt) [upsert-clause](#upsert-clause)

References: [filter-clause](#filter-clause) [literal-value](#literal-value) [select-stmt](#select-stmt)

### filter-clause

![expr](../sql-as-understood-by-kwil/svg/filter-clause.svg)

Used By: [expr](#expr)

References: [expr](#expr)

### indexed-column

![expr](../sql-as-understood-by-kwil/svg/indexed-column.svg)

Used By: [upsert-clause](#upsert-clause)

References: [expr](#expr)

### insert-stmt

![expr](../sql-as-understood-by-kwil/svg/insert-stmt.svg)

Used By: [sql-stmt](#sql-stmt)

References: [common-table-expression](#common-table-expression) [expr](#expr) [returning-clause](#returning-clause) [select-stmt](#select-stmt) [upsert-clause](#upsert-clause)

### join-clause

![expr](../sql-as-understood-by-kwil/svg/join-clause.svg)

Used By: [select-stmt](#select-stmt) [table-or-subquery](#table-or-subquery) [update-stmt](#update-stmt)

References: [join-constraint](#join-constraint) [join-operator](#join-operator) [table-or-subquery](#table-or-subquery)

### join-constraint

![expr](../sql-as-understood-by-kwil/svg/join-constraint.svg)

Used By: [join-clause](#join-clause)

References: [expr](#expr)

### join-operator

![expr](../sql-as-understood-by-kwil/svg/join-operator.svg)

Used By: [join-clause](#join-clause)

### literal-value

![expr](../sql-as-understood-by-kwil/svg/literal-value.svg)

Used By: [expr](#expr)

### ordering-term

![expr](../sql-as-understood-by-kwil/svg/ordering-term.svg)

Used By: [select-stmt](#delete-stmt) 

References: [expr](#expr)

### qualified-table-name

![expr](../sql-as-understood-by-kwil/svg/qualified-table-name.svg)

Used By: [delete-stmt](#delete-stmt) [update-stmt](#update-stmt)

### result-column

![expr](../sql-as-understood-by-kwil/svg/result-column.svg)

Used By: [select-stmt](#delete-stmt) 

References: [expr](#expr)

### returning-clause

![expr](../sql-as-understood-by-kwil/svg/returning-clause.svg)

Used By: [delete-stmt](#delete-stmt) [insert-stmt](#insert-stmt) [update-stmt](#update-stmt) 

References: [expr](#expr)

### select-stmt

![expr](../sql-as-understood-by-kwil/svg/select-stmt.svg)

Used By: [common-table-expression](#common-table-expression) [expr](#expr) [insert-stmt](#insert-stmt) [sql-stmt](#sql-stmt) [table-or-subquery](#table-or-subquery)

References: [common-table-expression](#common-table-expression) [compound-operator](#compound-operator) [expr](#expr) [join-clause](#join-clause) [ordering-term](#ordering-term) [result-column](#result-column) [table-or-subquery](#table-or-subquery)

### table-or-subquery

![expr](../sql-as-understood-by-kwil/svg/table-or-subquery.svg)

Used By: [join-clause](#join-clause) [select-stmt](#select-stmt) [update-stmt](#update-stmt)

References: [expr](#expr) [join-clause](#join-clause) [select-stmt](#select-stmt)

### update-stmt

![expr](../sql-as-understood-by-kwil/svg/update-stmt.svg)

Used By: [sql-stmt](#sql-stmt)

References: [column-name-list](#column-name-list) [common-table-expression](#common-table-expression) [expr](#expr) [join-clause](#join-clause) [qualified-table-name](#qualified-table-name) [returning-clause](#returning-clause) [table-or-subquery](#table-or-subquery)

### upsert-clause

![expr](../sql-as-understood-by-kwil/svg/upsert-clause.svg)

Used By: [insert-stmt](#insert-stmt)

References: [column-name-list](#column-name-list) [expr](#expr) [indexed-column](#indexed-column) 