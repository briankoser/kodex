---
layout: article
title: Oracle Parameter Precision
description: Brian discusses the surprising lack of parameter precision in Oracle
published: 2013-08-22
authors:
  - Brian
tags:
  - programming

# can we generate?
date_id: 1
excerpt: When I first started writing Oracle PL/SQL, I tried to define function and procedure parameters in the same way I defined SQL table columns.
url: article/2013/08/22/1/oracle-parameter-precision
---
When I first started writing Oracle PL/SQL, I tried to define function and procedure parameters in the same way I defined SQL table columns:

<script src="https://gist.github.com/8260111.js?file=PLSQLDeclaration1.sql"> </script>

Of course, you get a compile-time error if you try to specify precision for parameters. Instead you have to do:

<script src="https://gist.github.com/8260111.js?file=PLSQLDeclaration2.sql"> </script>    

Ah, but you can also define parameter types in terms of tables:

<script src="https://gist.github.com/8260111.js?file=PLSQLDeclaration3.sql"> </script>

And I assumed this enforced the precision of the table’s columns, if it had any.

Never assume.

The parameters will not enforce the precision of the columns they are based on.

Why doesn’t Oracle allow you to specify precision for your parameters? I assume (ha ha) that there’s an actual reason, but I don’t know enough to guess what that reason might be.