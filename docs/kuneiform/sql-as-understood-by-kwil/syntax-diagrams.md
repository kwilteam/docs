---
hide_table_of_contents: true
sidebar_position: 1
sidebar_label: "Syntax Diagrams"
id: syntax-diagrams
title: Syntax Diagrams
description: Syntax Diagrams
slug: /syntax-diagrams
---

### Kuneiform DML

<iframe
  width="100%"
  height="800"
  src="https://kwilteam.github.io/sql-grammar/"
></iframe>

<!-- ### statements

![statements](diagram/statements.svg)

### sql_stmt_list

![sql_stmt_list](diagram/sql_stmt_list.svg)

referenced by: [statements](#statements)

### sql_stmt

![sql_stmt](diagram/sql_stmt.svg)

referenced by: [sql_stmt_list](#sql_stmt_list)

### indexed_column

![indexed_column](diagram/indexed_column.svg)

referenced by: [upsert_clause](#upsert_clause)

### cte_table_name

![cte_table_name](diagram/cte_table_name.svg)

referenced by: [common_table_expression](#common_table_expression)

### common_table_expression

![common_table_expression](diagram/common_table_expression.svg)

referenced by: [common_table_stmt](#common_table_stmt)

### common_table_stmt

![common_table_stmt](diagram/common_table_stmt.svg)

referenced by: [delete_stmt](#delete_stmt), [insert_stmt](#insert_stmt), [select_stmt](#select_stmt), [update_stmt](#update_stmt)

### delete_stmt

![delete_stmt](diagram/delete_stmt.svg)

referenced by: [sql_stmt](#sql_stmt)

### variable

![variable](diagram/variable.svg)

referenced by: [expr](#expr)

### function_call

![function_call](diagram/function_call.svg)

referenced by: [expr](#expr)

### column_ref

![column_ref](diagram/column_ref.svg)

referenced by: [expr](#expr)

### when_clause

![when_clause](diagram/when_clause.svg)

referenced by: [expr](#expr)

### expr

![expr](diagram/expr.svg)

referenced by: [delete_stmt](#delete_stmt), [expr](#expr), [expr_list](#expr_list), [function_call](#function_call), [join_constraint](#join_constraint), [limit_stmt](#limit_stmt), [ordering_term](#ordering_term), [result_column](#result_column), [returning_clause_result_column](#returning_clause_result_column), [select_core](#select_core), [update_set_subclause](#update_set_subclause), [update_stmt](#update_stmt), [upsert_clause](#upsert_clause), [upsert_update](#upsert_update), [value_row](#value_row), [when_clause](#when_clause)

### subquery

![subquery](diagram/subquery.svg)

referenced by: [expr](#expr)

### expr_list

![expr_list](diagram/expr_list.svg)

referenced by: [expr](#expr)


### comparison_operator

![comparison_operator](diagram/comparison_operator.svg)

referenced by: [expr](#expr)

### cast_type

![cast_type](diagram/cast_type.svg)

referenced by: [type_cast](#type_cast)

### type_cast

![type_cast](diagram/type_cast.svg)

referenced by: [expr](#expr)

### boolean_value

![boolean_value](diagram/boolean_value.svg)

referenced by: [expr](#expr), [literal](#literal)

### string_value

![string_value](diagram/string_value.svg)

referenced by: [literal](#literal)

### numeric_value

![numeric_value](diagram/numeric_value.svg)

referenced by: [literal](#literal)

### literal

![literal](diagram/literal.svg)

referenced by: [expr](#expr)

### value_row

![value_row](diagram/value_row.svg)

referenced by: [values_clause](#values_clause)

### values_clause

![values_clause](diagram/values_clause.svg)

referenced by: [insert_stmt](#insert_stmt)

### insert_stmt

![insert_stmt](diagram/insert_stmt.svg)

referenced by: [sql_stmt](#sql_stmt)

### returning_clause

![returning_clause](diagram/returning_clause.svg)

referenced by: [delete_stmt](#delete_stmt), [insert_stmt](#insert_stmt), [update_stmt](#update_stmt)

### upsert_update

![upsert_update](diagram/upsert_update.svg)

referenced by: [upsert_clause](#upsert_clause)

### upsert_clause

![upsert_clause](diagram/upsert_clause.svg)

referenced by: [insert_stmt](#insert_stmt)

### select_stmt_core

![select_stmt_core](diagram/select_stmt_core.svg)

referenced by: [common_table_expression](#common_table_expression), [select_stmt](#select_stmt), [subquery](#subquery), [table_or_subquery](#table_or_subquery)

### select_stmt

![select_stmt](diagram/select_stmt.svg)

referenced by: [sql_stmt](#sql_stmt)

### join_clause

![join_clause](diagram/join_clause.svg)

referenced by: [select_core](#select_core), [update_stmt](#update_stmt)

### select_core

![select_core](diagram/select_core.svg)

referenced by: [select_stmt_core](#select_stmt_core)

### table_or_subquery

![table_or_subquery](diagram/table_or_subquery.svg)

referenced by: [join_clause](#join_clause), [select_core](#select_core), [update_stmt](#update_stmt)

### result_column

![result_column](diagram/result_column.svg)

referenced by: [select_core](#select_core)

### returning_clause_result_column

![returning_clause_result_column](diagram/returning_clause_result_column.svg)

referenced by: [returning_clause](#returning_clause) 

### join_operator

![join_operator](diagram/join_operator.svg)

referenced by: [join_clause](#join_clause)

### join_constraint

![join_constraint](diagram/join_constraint.svg)

referenced by: [join_clause](#join_clause)

### compound_operator

![compound_operator](diagram/compound_operator.svg)

referenced by: [select_stmt_core](#select_stmt_core)

### update_set_subclause

![update_set_subclause](diagram/update_set_subclause.svg)

referenced by: [update_stmt](#update_stmt)

### update_stmt

![update_stmt](diagram/update_stmt.svg)

referenced by: [sql_stmt](#sql_stmt)

### column_name_list

![column_name_list](diagram/column_name_list.svg)

referenced by: [update_set_subclause](#update_set_subclause), [upsert_update](#upsert_update)

### qualified_table_name

![qualified_table_name](diagram/qualified_table_name.svg)

referenced by: [delete_stmt](#delete_stmt), [update_stmt](#update_stmt)

### order_by_stmt

![order_by_stmt](diagram/order_by_stmt.svg)

referenced by: [select_stmt_core](#select_stmt_core)

### limit_stmt

![limit_stmt](diagram/limit_stmt.svg)

referenced by: [select_stmt_core](#select_stmt_core)

### ordering_term

![ordering_term](diagram/ordering_term.svg)

referenced by: [order_by_stmt](#order_by_stmt)

### asc_desc

![asc_desc](diagram/asc_desc.svg)

referenced by: [ordering_term](#ordering_term)

### function_keyword

![function_keyword](diagram/function_keyword.svg)

referenced by: [function_name](#function_name)

### function_name

![function_name](diagram/function_name.svg)

referenced by: [function_call](#function_call)

### table_name

![table_name](diagram/table_name.svg)

referenced by: [column_ref](#column_ref), [cte_table_name](#cte_table_name), [insert_stmt](#insert_stmt), [qualified_table_name](#qualified_table_name), [result_column](#result_column), [table_or_subquery](#table_or_subquery)

### table_alias

![table_alias](diagram/table_alias.svg)

referenced by: [insert_stmt](#insert_stmt), [qualified_table_name](#qualified_table_name), [table_or_subquery](#table_or_subquery)

### column_name

![column_name](diagram/column_name.svg)

referenced by: [column_name_list](#column_name_list), [column_ref](#column_ref), [cte_table_name](#cte_table_name), [indexed_column](#indexed_column), [insert_stmt](#insert_stmt), [update_set_subclause](#update_set_subclause), [upsert_update](#upsert_update)

### column_alias

![column_alias](diagram/column_alias.svg)

referenced by: [result_column](#result_column), [returning_clause_result_column](#returning_clause_result_column)

### collation_name

![collation_name](diagram/collation_name.svg)

referenced by: [expr](#expr)

### index_name

![index_name](diagram/index_name.svg)

### EOF

![EOF](diagram/EOF.svg)

referenced by: [statements](#statements) -->