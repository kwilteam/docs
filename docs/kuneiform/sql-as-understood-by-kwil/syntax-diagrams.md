---
sidebar_position: 1
sidebar_label: "Syntax Diagrams"
id: syntax-diagrams
title: Syntax Diagrams
description: Syntax Diagrams
slug: /syntax-diagrams
---
<a name="sql-stmt" ></a>

## sql-stmt
![column-name-list](../sql-as-understood-by-kwil/svg/sql-stmt.svg)

References: [delete-stmt](#delete-stmt) [insert-stmt](#insert-stmt) [select-stmt](#select-stmt) [update-stmt](#update-stmt)

<a name="column-name-list" ></a>

### column-name-list
![column-name-list](../sql-as-understood-by-kwil/svg/column-name-list.svg)

Used By: [update-stmt](#update-stmt) [upsert-clause](#upsert-clause)

<a name="common-table-expression" ></a>

### common-table-expression
![common-table-expression](../sql-as-understood-by-kwil/svg/common-table-expression.svg)

Used By: [delete-stmt](#delete-stmt) [insert-stmt](#insert-stmt) [select-stmt](#select-stmt) [update-stmt](#update-stmt)

References: [select-stmt](#select-stmt)

<a name="compound-operator" ></a>

### compound-operator
![compound-operator](../sql-as-understood-by-kwil/svg/compound-operator.svg)

Used By: [select-stmt](#select-stmt)

<a name="delete-stmt" ></a>

### delete-stmt
![delete-stmt](../sql-as-understood-by-kwil/svg/delete-stmt.svg)

Used By: [sql-stmt](#sql-stmt)

Referances: [common-table-expression](#common-table-expression) [expr](#expr) [qualified-table-name](#qualified-table-name) [returning-clause](#returning-clause)

<a name="expr" ></a>

### expr
![expr](../sql-as-understood-by-kwil/svg/expr.svg)

Used By: [delete-stmt](#delete-stmt) [indexed-column](#indexed-column) [insert-stmt](#insert-stmt) [join-constraint](#join-constraint) [ordering-term](#ordering-term) [result-column](#result-column) [returning-clause](#returning-clause) [select-stmt](#select-stmt) [table-or-subquery](#table-or-subquery) [update-stmt](#update-stmt) [upsert-clause](#upsert-clause)

References: [filter-clause](#filter-clause) [literal-value](#literal-value) [select-stmt](#select-stmt)

<a name="filter-clause" ></a>

### filter-clause
![expr](../sql-as-understood-by-kwil/svg/filter-clause.svg)

Used By: [expr](#expr)

References: [expr](#expr)

<a name="indexed-column" ></a>

### indexed-column
![expr](../sql-as-understood-by-kwil/svg/indexed-column.svg)

Used By: [upsert-clause](#upsert-clause)

References: [expr](#expr)

<a name="insert-stmt" ></a>

### insert-stmt
![expr](../sql-as-understood-by-kwil/svg/insert-stmt.svg)

Used By: [sql-stmt](#sql-stmt)

References: [common-table-expression](#common-table-expression) [expr](#expr) [returning-clause](#returning-clause) [select-stmt](#select-stmt) [upsert-clause](#upsert-clause)

<a name="join-clause" ></a>

### join-clause
![expr](../sql-as-understood-by-kwil/svg/join-clause.svg)

Used By: [select-stmt](#select-stmt) [table-or-subquery](#table-or-subquery) [update-stmt](#update-stmt)

References: [join-constraint](#join-constraint) [join-operator](#join-operator) [table-or-subquery](#table-or-subquery)

<a name="join-constraint" ></a>

### join-constraint
![expr](../sql-as-understood-by-kwil/svg/join-constraint.svg)

Used By: [join-clause](#join-clause)

References: [expr](#expr)

<a name="join-operator" ></a>

### join-operator
![expr](../sql-as-understood-by-kwil/svg/join-operator.svg)

Used By: [join-clause](#join-clause)

<a name="literal-value" ></a>

### literal-value
![expr](../sql-as-understood-by-kwil/svg/literal-value.svg)

Used By: [expr](#expr)

<a name="ordering-term" ></a>

### ordering-term
![expr](../sql-as-understood-by-kwil/svg/ordering-term.svg)

Used By: [select-stmt](#delete-stmt) 

References: [expr](#expr)

<a name="qualified-table-name" ></a>

### qualified-table-name
![expr](../sql-as-understood-by-kwil/svg/qualified-table-name.svg)

Used By: [delete-stmt](#delete-stmt) [update-stmt](#update-stmt)

<a name="result-column" ></a>

### result-column
![expr](../sql-as-understood-by-kwil/svg/result-column.svg)

Used By: [select-stmt](#delete-stmt) 

References: [expr](#expr)

<a name="returning-clause" ></a>

### returning-clause
![expr](../sql-as-understood-by-kwil/svg/returning-clause.svg)

Used By: [delete-stmt](#delete-stmt) [insert-stmt](#insert-stmt) [update-stmt](#update-stmt) 

References: [expr](#expr)

<a name="select-stmt" ></a>

### select-stmt
![expr](../sql-as-understood-by-kwil/svg/select-stmt.svg)

Used By: [common-table-expression](#common-table-expression) [expr](#expr) [insert-stmt](#insert-stmt) [sql-stmt](#sql-stmt) [table-or-subquery](#table-or-subquery)

References: [common-table-expression](#common-table-expression) [compound-operator](#compound-operator) [expr](#expr) [join-clause](#join-clause) [ordering-term](#ordering-term) [result-column](#result-column) [table-or-subquery](#table-or-subquery)

<a name="table-or-subquery" ></a>

### table-or-subquery
![expr](../sql-as-understood-by-kwil/svg/table-or-subquery.svg)

Used By: [join-clause](#join-clause) [select-stmt](#select-stmt) [update-stmt](#update-stmt)

References: [expr](#expr) [join-clause](#join-clause) [select-stmt](#select-stmt)

<a name="update-stmt" ></a>

### update-stmt
![expr](../sql-as-understood-by-kwil/svg/update-stmt.svg)

Used By: [sql-stmt](#sql-stmt)

References: [column-name-list](#column-name-list) [common-table-expression](#common-table-expression) [expr](#expr) [join-clause](#join-clause) [qualified-table-name](#qualified-table-name) [returning-clause](#returning-clause) [table-or-subquery](#table-or-subquery)

<a name="upsert-clause" ></a>

### upsert-clause
![expr](../sql-as-understood-by-kwil/svg/upsert-clause.svg)

Used By: [insert-stmt](#insert-stmt)

References: [column-name-list](#column-name-list) [expr](#expr) [indexed-column](#indexed-column) 