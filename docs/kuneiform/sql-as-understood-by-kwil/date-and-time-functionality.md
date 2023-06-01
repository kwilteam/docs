---
sidebar_position: 4
sidebar_label: "Date and Time Functionality"
id: date-and-time-functionality
title: Date and Time Functionality
description: Date and Time Functionality
slug: /date-and-time-functionality
---

## Supported Functions

While Kwil allows for most datetime functionalities, it requires users to specify time, and does not allow for the use of the local machine’s time.  This is due to local machine times not being deterministic.

To enforce this, all datetime functions require at least 1 input (which is the timestamp that should be used).  This is with the exception of `strftime`, which requires two inputs (the first being the format, and the second being the timestamp).

### date(_time-value, modifier, modifier, ..._)

date(...)		strftime('%Y-%m-%d', ...)
The date() function returns the date as text in this format: YYYY-MM-DD

### time(_time-value, modifier, modifier, ..._)

time(...)		strftime('%H:%M:%S', ...)
The time() function returns the time as text in this format: HH:MM:SS

### datetime(_time-value, modifier, modifier, ..._)

datetime(...)		strftime('%Y-%m-%d %H:%M:%S', ...)
The datetime() function returns the date and time as text in this formats: YYYY-MM-DD HH:MM:SS

### unixepoch(_time-value, modifier, modifier, ..._)

unixepoch(...)		strftime('%S', ...) -- (numeric return)
The unixepoch() function returns a unix timestamp - the number of seconds since 1970-01-01 00:00:00 UTC. The unixepoch() function normally returns an integer number of seconds.

### strftime(_format, time-value, modifier, modifier, ..._)

The strftime() routine returns the date formatted according to the format string specified as the first argument. The following is a complete list of valid strftime() substitutions:
```
%d		day of month: 00
%H		hour: 00-24
%j		day of year: 001-366
%m		month: 01-12
%M		minute: 00-59
%S		seconds: 00-59
%w		day of week 0-6 with Sunday==0
%W		week of year: 00-53
%Y		year: 0000-9999
%%		%
```


### Supported Modifiers
```
NNN days
NNN hours
NNN minutes
NNN months
NNN years
start of month
start of year
start of day
weekday N
unixepoch
```

### Supported Time Strings
```
YYYY-MM-DD
YYYY-MM-DD HH:MM
YYYY-MM-DD HH:MM:SS
YYYY-MM-DDTHH:MM
YYYY-MM-DDTHH:MM:SS
HH:MM
HH:MM:SS
```
