---
sidebar_position: 2
sidebar_label: "Scalar Functions"
id: scalar-functions
title: Scalar Functions
description: Scalar Functions
slug: /scalar-functions
---

### abs(_X_)

The abs(X) function returns the absolute value of the numeric argument X. Abs(X) returns NULL if X is NULL. Abs(X) returns 0.0 if X is a string or blob that cannot be converted to a numeric value. If X is the integer -9223372036854775808 then abs(X) throws an integer overflow error since there is no equivalent positive 64-bit two complement value.

### address(_X_)

The address(X) function returns the wallet address of a [`@caller`](../dml.md/#using-contextual-variables-in-actions) blob. It will preserve the address format (e.g. EVM, NEAR, etc.) of the originating caller's native chain.  It will return the address as type text.

### coalesce(_X,Y,..._)

The coalesce(X,Y...) function returns a copy of its first non-NULL argument, or NULL if all arguments are NULL. Coalesce() must have at least 2 arguments.

### error(_X_)

The error function raises an exception, and causes the SQL statement to fail. It takes a string _X_ that will be returned to the user in the query result when triggered.

### format(_FORMAT,..._)

This works like the printf() function from the standard C library. The first argument is a format string that specifies how to construct the output string using values taken from subsequent arguments. If the FORMAT argument is missing or NULL then the result is NULL. The %n format is silently ignored and does not consume an argument. The %p format is an alias for %X. The %z format is interchangeable with %s. If there are too few arguments in the argument list, missing arguments are assumed to have a NULL value, which is translated into 0 or 0.0 for numeric formats or an empty string for %s.

### glob(_X,Y_)

The glob(X,Y) function is equivalent to the expression "Y GLOB X". Note that the X and Y arguments are reversed in the glob() function relative to the infix GLOB operator. Y is the string and X is the pattern. So, for example, the following expressions are equivalent:

    name GLOB '*helium*'
	glob('*helium*',name) 

### hex(_X_)

The hex(X) function interprets its argument as a BLOB and returns a string which is the upper-case hexadecimal rendering of the content of that blob.
If the argument X in "hex(X)" is an integer or floating point number, then "interprets its argument as a BLOB" means that the binary number is first converted into a UTF8 text representation, then that text is interpreted as a BLOB. Hence, "hex(12345678)" renders as "3132333435363738" not the binary representation of the integer value "0000000000BC614E".

### ifnull(_X,Y_)

The ifnull(X,Y) function returns a copy of its first non-NULL argument, or NULL if both arguments are NULL. Ifnull() must have exactly 2 arguments. The ifnull() function is equivalent to coalesce() with two arguments.

### iif(_X,Y,Z_)

The iif(X,Y,Z) function returns the value Y if X is true, and Z otherwise. The iif(X,Y,Z) function is logically equivalent to and generates the same bytecode as the CASE expression "CASE WHEN X THEN Y ELSE Z END".

### instr(_X,Y_)

The instr(X,Y) function finds the first occurrence of string Y within string X and returns the number of prior characters plus 1, or 0 if Y is nowhere found within X. Or, if X and Y are both BLOBs, then instr(X,Y) returns one more than the number bytes prior to the first occurrence of Y, or 0 if Y does not occur anywhere within X. If both arguments X and Y to instr(X,Y) are non-NULL and are not BLOBs then both are interpreted as strings. If either X or Y are NULL in instr(X,Y) then the result is NULL.


### length(_X_)

For a string value X, the length(X) function returns the number of characters (not bytes) in X prior to the first NUL character. Since SQLite strings do not normally contain NUL characters, the length(X) function will usually return the total number of characters in the string X. For a blob value X, length(X) returns the number of bytes in the blob. If X is NULL then length(X) is NULL. If X is numeric then length(X) returns the length of a string representation of X.

Note that for strings, the length(X) function returns the character length of the string, not the byte length. The character length is the number of characters in the string. The character length is always different from the byte length for UTF-16 strings, and can be different from the byte length for UTF-8 strings if the string contains multi-byte characters.
For BLOB values, length(X) always returns the byte-length of the BLOB.

For string values, length(X) must read the entire string into memory in order to compute the character length. But for BLOB values, that is not necessary as SQLite knows how many bytes are in the BLOB. Hence, for multi-megabyte values, the length(X) function is usually much faster for BLOBs than for strings, since it does not need to load the value into memory.

### like(_X,Y_), like(_X,Y,Z_)

The like(X,Y,Z) function is used to implement the "Y LIKE X [ESCAPE Z]" expression. If the optional ESCAPE clause is present, then the like() function is invoked with three arguments. Otherwise, it is invoked with two arguments only. Note that the X and Y parameters are reversed in the like() function relative to the infix LIKE operator. X is the pattern and Y is the string to match against that pattern. Hence, the following expressions are equivalent:

	name LIKE '%neon%'
    like('%neon%',name)

### lower(_X_)

The lower(X) function returns a copy of string X with all ASCII characters converted to lower case. The default built-in lower() function works for ASCII characters only. To do case conversions on non-ASCII characters, load the ICU extension.

### ltrim(_X_), ltrim(_X,Y_)

The ltrim(X,Y) function returns a string formed by removing any and all characters that appear in Y from the left side of X. If the Y argument is omitted, ltrim(X) removes spaces from the left side of X.

### max(_X,Y,..._)

The multi-argument max() function returns the argument with the maximum value, or return NULL if any argument is NULL. The multi-argument max() function searches its arguments from left to right for an argument that defines a collating function and uses that collating function for all string comparisons. If none of the arguments to max() define a collating function, then the BINARY collating function is used. Note that max() is a simple function when it has 2 or more arguments but operates as an aggregate function if given only a single argument.

### min(_X,Y,..._)

The multi-argument min() function returns the argument with the minimum value. The multi-argument min() function searches its arguments from left to right for an argument that defines a collating function and uses that collating function for all string comparisons. If none of the arguments to min() define a collating function, then the BINARY collating function is used. Note that min() is a simple function when it has 2 or more arguments but operates as an aggregate function if given only a single argument.

### nullif(_X,Y_)

The nullif(X,Y) function returns its first argument if the arguments are different and NULL if the arguments are the same. The nullif(X,Y) function searches its arguments from left to right for an argument that defines a collating function and uses that collating function for all string comparisons. If neither argument to nullif() defines a collating function then the BINARY collating function is used.

### public_key(_X_), public_key(_X,Y_)

The public_key(X,Y) function returns the public key of a [`@caller`](../dml.md/#using-contextual-variables-in-actions) blob. The caller blob should be passed in as the first argument. It optionally takes a second argument to specify the desired output encoding type. This can be `'blob'`, `'hex'`, `'base64'`, or `'base64url'`.  If not specified, it will be returned as `'blob'`.

### quote(_X_)

The quote(X) function returns the text of an SQL literal which is the value of its argument suitable for inclusion into an SQL statement. Strings are surrounded by single-quotes with escapes on interior quotes as needed. BLOBs are encoded as hexadecimal literals. Strings with embedded NUL characters cannot be represented as string literals in SQL and hence the returned string literal is truncated prior to the first NUL.

### replace(_X,Y,Z_)

The replace(X,Y,Z) function returns a string formed by substituting string Z for every occurrence of string Y in string X. The BINARY collating sequence is used for comparisons. If Y is an empty string then return X unchanged. If Z is not initially a string, it is cast to a UTF-8 string prior to processing.

### rtrim(_X_), rtrim(_X,Y_)

The rtrim(X,Y) function returns a string formed by removing any and all characters that appear in Y from the right side of X. If the Y argument is omitted, rtrim(X) removes spaces from the right side of X.

### sign(_X_)

The sign(X) function returns -1, 0, or +1 if the argument X is a numeric value that is negative, zero, or positive, respectively. If the argument to sign(X) is NULL or is a string or blob that cannot be losslessly converted into a number, then sign(X) returns NULL.

### substr(_X,Y,Z_), substr(_X,Y_)

The substr(X,Y,Z) function returns a substring of input string X that begins with the Y-th character and which is Z characters long. If Z is omitted then substr(X,Y) returns all characters through the end of the string X beginning with the Y-th. The left-most character of X is number 1. If Y is negative then the first character of the substring is found by counting from the right rather than the left. If Z is negative then the abs(Z) characters preceding the Y-th character are returned. If X is a string then characters indices refer to actual UTF-8 characters. If X is a BLOB then the indices refer to bytes.

### trim(_X_), trim(_X,Y_)

The trim(X,Y) function returns a string formed by removing any and all characters that appear in Y from both ends of X. If the Y argument is omitted, trim(X) removes spaces from both ends of X.

### typeof(_X_)

The typeof(X) function returns a string that indicates the datatype of the expression X: "null", "integer", "real", "text", or "blob".

### unhex(_X_), unhex(_X,Y_)

The unhex(X,Y) function returns a BLOB value which is the decoding of the hexadecimal string X. If X contains any characters that are not hexadecimal digits and which are not in Y, then unhex(X,Y) returns NULL. If Y is omitted, it is understood to be an empty string and hence X must be a pure hexadecimal string. All hexadecimal digits in X must occur in pairs, with both digits of each pair beginning immediately adjacent to one another, or else unhex(X,Y) returns NULL. If either parameter X or Y is NULL, then unhex(X,Y) returns NULL. The X input may contain an arbitrary mix of upper and lower case hexadecimal digits. Hexadecimal digits in Y have no affect on the translation of X. Only characters in Y that are not hexadecimal digits are ignored in X.

### unicode(_X_)
The unicode(X) function returns the numeric unicode code point corresponding to the first character of the string X. If the argument to unicode(X) is not a string then the result is undefined.

### upper(_X_)

The upper(X) function returns a copy of input string X in which all lower-case ASCII characters are converted to their upper-case equivalent.
