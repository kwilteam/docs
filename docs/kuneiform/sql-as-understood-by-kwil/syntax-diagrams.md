---
sidebar_position: 1
sidebar_label: "Syntax Diagrams"
id: syntax-diagrams
title: Syntax Diagrams
description: Syntax Diagrams
slug: /syntax-diagrams
---

import SqlStmt from '../sql-as-understood-by-kwil/svg/sql-stmt.svg';
import ColumnNameList from '../sql-as-understood-by-kwil/svg/column-name-list.svg';
import CommonTableExpression from '../sql-as-understood-by-kwil/svg/common-table-expression.svg';
import CompoundOperator from '../sql-as-understood-by-kwil/svg/compound-operator.svg';
import DeleteStmt from '../sql-as-understood-by-kwil/svg/delete-stmt.svg';
import Expr from '../sql-as-understood-by-kwil/svg/expr.svg';
import FilterClause from '../sql-as-understood-by-kwil/svg/filter-clause.svg';
import IndexedColumn from '../sql-as-understood-by-kwil/svg/indexed-column.svg';
import InsertStmt from '../sql-as-understood-by-kwil/svg/insert-stmt.svg';
import JoinClause from '../sql-as-understood-by-kwil/svg/join-clause.svg';
import JoinConstraint from '../sql-as-understood-by-kwil/svg/join-constraint.svg';
import JoinOperator from '../sql-as-understood-by-kwil/svg/join-operator.svg';
import LiteralValue from '../sql-as-understood-by-kwil/svg/literal-value.svg';
import QualifiedTableName from '../sql-as-understood-by-kwil/svg/qualified-table-name.svg';
import ResultColumn from '../sql-as-understood-by-kwil/svg/result-column.svg';
import ReturningClause from '../sql-as-understood-by-kwil/svg/returning-clause.svg';
import SelectStmt from '../sql-as-understood-by-kwil/svg/select-stmt.svg';
import TableOrSubquery from '../sql-as-understood-by-kwil/svg/table-or-subquery.svg';
import UpdateStmt from '../sql-as-understood-by-kwil/svg/update-stmt.svg';
import UpsertClause from '../sql-as-understood-by-kwil/svg/upsert-clause.svg';

## sql-stmt

<SqlStmt />;

References: [delete-stmt](#delete-stmt) [insert-stmt](#insert-stmt) [select-stmt](#select-stmt) [update-stmt](#update-stmt)

### column-name-list

<ColumnNameList />

Used By: [update-stmt](#update-stmt) [upsert-clause](#upsert-clause)

### common-table-expression

<CommonTableExpression />

Used By: [delete-stmt](#delete-stmt) [insert-stmt](#insert-stmt) [select-stmt](#select-stmt) [update-stmt](#update-stmt)

References: [select-stmt](#select-stmt)

### compound-operator

<CompoundOperator />

Used By: [select-stmt](#select-stmt)

### delete-stmt

<DeleteStmt />

Used By: [sql-stmt](#sql-stmt)

Referances: [common-table-expression](#common-table-expression) [expr](#expr) [qualified-table-name](#qualified-table-name) [returning-clause](#returning-clause)

### expr

<Expr />

Used By: [delete-stmt](#delete-stmt) [indexed-column](#indexed-column) [insert-stmt](#insert-stmt) [join-constraint](#join-constraint) [ordering-term](#ordering-term) [result-column](#result-column) [returning-clause](#returning-clause) [select-stmt](#select-stmt) [table-or-subquery](#table-or-subquery) [update-stmt](#update-stmt) [upsert-clause](#upsert-clause)

References: [filter-clause](#filter-clause) [literal-value](#literal-value) [select-stmt](#select-stmt)

### filter-clause

<FilterClause />

Used By: [expr](#expr)

References: [expr](#expr)

### indexed-column

<IndexedColumn />

Used By: [upsert-clause](#upsert-clause)

References: [expr](#expr)

### insert-stmt

<InsertStmt />

Used By: [sql-stmt](#sql-stmt)

References: [common-table-expression](#common-table-expression) [expr](#expr) [returning-clause](#returning-clause) [select-stmt](#select-stmt) [upsert-clause](#upsert-clause)

### join-clause

<JoinClause />

Used By: [select-stmt](#select-stmt) [table-or-subquery](#table-or-subquery) [update-stmt](#update-stmt)

References: [join-constraint](#join-constraint) [join-operator](#join-operator) [table-or-subquery](#table-or-subquery)

### join-constraint

<JoinConstraint />

Used By: [join-clause](#join-clause)

References: [expr](#expr)

### join-operator

<JoinOperator />

Used By: [join-clause](#join-clause)

### literal-value

![expr](../sql-as-understood-by-kwil/svg/literal-value.svg)

Used By: [expr](#expr)

### ordering-term

<LiteralValue />

Used By: [select-stmt](#delete-stmt) 

References: [expr](#expr)

### qualified-table-name

<QualifiedTableName />

Used By: [delete-stmt](#delete-stmt) [update-stmt](#update-stmt)

### result-column

<ResultColumn />

Used By: [select-stmt](#delete-stmt) 

References: [expr](#expr)

### returning-clause

<ReturningClause />

Used By: [delete-stmt](#delete-stmt) [insert-stmt](#insert-stmt) [update-stmt](#update-stmt) 

References: [expr](#expr)

### select-stmt

<SelectStmt />

Used By: [common-table-expression](#common-table-expression) [expr](#expr) [insert-stmt](#insert-stmt) [sql-stmt](#sql-stmt) [table-or-subquery](#table-or-subquery)

References: [common-table-expression](#common-table-expression) [compound-operator](#compound-operator) [expr](#expr) [join-clause](#join-clause) [ordering-term](#ordering-term) [result-column](#result-column) [table-or-subquery](#table-or-subquery)

### table-or-subquery

<TableOrSubquery />

Used By: [join-clause](#join-clause) [select-stmt](#select-stmt) [update-stmt](#update-stmt)

References: [expr](#expr) [join-clause](#join-clause) [select-stmt](#select-stmt)

### update-stmt

<UpdateStmt />

Used By: [sql-stmt](#sql-stmt)

References: [column-name-list](#column-name-list) [common-table-expression](#common-table-expression) [expr](#expr) [join-clause](#join-clause) [qualified-table-name](#qualified-table-name) [returning-clause](#returning-clause) [table-or-subquery](#table-or-subquery)

### upsert-clause

<UpsertClause />

Used By: [insert-stmt](#insert-stmt)

References: [column-name-list](#column-name-list) [expr](#expr) [indexed-column](#indexed-column) 