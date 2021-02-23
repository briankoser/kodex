---
layout: article
title: Oracle Parameter Precision
description: Brian discusses the surprising lack of parameter precision in Oracle
published: 2013-08-22
authors:
  - Brian
tags:
  - programming
excerpt: When I first started writing Oracle PL/SQL, I tried to define function and procedure parameters in the same way I defined SQL table columns.
---
When I first started writing Oracle PL/SQL, I tried to define function and procedure parameters in the same way I defined SQL table columns:

```sql
PROCEDURE MyFunction
(
  Param1 NUMBER(2),
  Param2 VARCHAR2(32)
);
```

Of course, you get a compile-time error if you try to specify precision for parameters. Instead you have to do:

```sql
PROCEDURE MyFunction
(
  Param1 NUMBER,
  Param2 VARCHAR2
);
```
Ah, but you can also define parameter types in terms of tables:

```sql
PROCEDURE MyFunction
(
  Param1 myschema.mytable.column1%TYPE,
  Param2 myschema.mytable.column2%TYPE
);
```
And I assumed this enforced the precision of the table’s columns, if it had any.

Never assume.

The parameters will not enforce the precision of the columns they are based on.

Why doesn’t Oracle allow you to specify precision for your parameters? I assume (ha ha) that there’s an actual reason, but I don’t know enough to guess what that reason might be.