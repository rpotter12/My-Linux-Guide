# nc/netcat
nc (or netcat) is used for performing any operation relating to TCP, UDP, or UNIX-domain sockets. It can handle both IPv4 and IPv6 for opening TCP connections, sending UDP packets, listening on arbitrary TCP and UDP ports, performing port scanning.

## Syntax
```
nc [-options] hostname port[s] [ports] ...
nc -l -p port [-options] [hostname] [port]
```

## Description
```

-c string
specify shell commands to exec after connect (use with caution). The string is passed to /bin/sh -c for execution. See the -e option if you don't have a working /bin/sh (Note that POSIX-conformant system must have one).
-e filename
specify filename to exec after connect (use with caution). See the -c option for enhanced functionality.
-g gateway
source-routing hop point[s], up to 8
-G num
source-routing pointer: 4, 8, 12, ...
-h
display help
-i secs
delay interval for lines sent, ports scanned
-l
listen mode, for inbound connects
-n
numeric-only IP addresses, no DNS
-o file
hex dump of traffic
-p port
local port number (port numbers can be individual or ranges: lo-hi [inclusive])
-q seconds
after EOF on stdin, wait the specified number of seconds and then quit. If seconds is negative, wait forever.
-b
allow UDP broadcasts
-r
randomize local and remote ports
-s addr
local source address
-t
enable telnet negotiation
-u
UDP mode
-v
verbose [use twice to be more verbose]
-w secs
timeout for connects and final net reads
-C
Send CRLF as line-ending
-z
zero-I/O mode [used for scanning]
-T type
set TOS flag (type may be one of "Minimize-Delay", "Maximize-Throughput", "Maximize-Reliability", or "Minimize-Cost".)
```
