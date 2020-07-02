# Network Status(netstat)
netstat shows the network status. This command shows network ports in use and their incoming connections. However, netstat does not come out-of-the-box on Linux. If you need to install it, you can find it in the net-tools package. As a developer who experiments locally or pushes an application to a host, you may receive an error that a port is already allocated or an address is already in use. Using netstat with protocol, process and port options demonstrates that Apache HTTP server already uses port 80 on the below host.

## Syntax
```
       netstat [address_family_options] [--tcp|-t] [--udp|-u] [--udplite|-U]
       [--sctp|-S] [--raw|-w] [--l2cap|-2] [--rfcomm|-f] [--listening|-l]
       [--all|-a] [--numeric|-n] [--numeric-hosts] [--numeric-ports]
       [--numeric-users] [--symbolic|-N] [--extend|-e[--extend|-e]]
       [--timers|-o] [--program|-p] [--verbose|-v] [--continuous|-c]
       [--wide|-W]

       netstat {--route|-r} [address_family_options]
       [--extend|-e[--extend|-e]] [--verbose|-v] [--numeric|-n]
       [--numeric-hosts] [--numeric-ports] [--numeric-users]
       [--continuous|-c]

       netstat {--interfaces|-i} [--all|-a] [--extend|-e[--extend|-e]]
       [--verbose|-v] [--program|-p] [--numeric|-n] [--numeric-hosts]
       [--numeric-ports] [--numeric-users] [--continuous|-c]

       netstat {--groups|-g} [--numeric|-n] [--numeric-hosts]
       [--numeric-ports] [--numeric-users] [--continuous|-c]

       netstat {--masquerade|-M} [--extend|-e] [--numeric|-n]
       [--numeric-hosts] [--numeric-ports] [--numeric-users]
       [--continuous|-c]

       netstat {--statistics|-s} [--tcp|-t] [--udp|-u] [--udplite|-U]
       [--sctp|-S] [--raw|-w]

       netstat {--version|-V}

       netstat {--help|-h}

       address_family_options:

       [-4|--inet] [-6|--inet6]
       [--protocol={inet,inet6,unix,ipx,ax25,netrom,ddp,bluetooth, ... } ]
       [--unix|-x] [--inet|--ip|--tcpip] [--ax25] [--x25] [--rose] [--ash]
       [--bluetooth] [--ipx] [--netrom] [--ddp|--appletalk] [--econet|--ec]
```

## Description
```
   --verbose, -v
       Tell the user what is going on by being verbose. Especially print
       some useful information about unconfigured address families.

   --wide, -W
       Do not truncate IP addresses by using output as wide as needed. This
       is optional for now to not break existing scripts.

   --numeric, -n
       Show numerical addresses instead of trying to determine symbolic
       host, port or user names.

   --numeric-hosts
       shows numerical host addresses but does not affect the resolution of
       port or user names.

   --numeric-ports
       shows numerical port numbers but does not affect the resolution of
       host or user names.

   --numeric-users
       shows numerical user IDs but does not affect the resolution of host
       or port names.

   --protocol=family, -A
       Specifies the address families (perhaps better described as low level
       protocols) for which connections are to be shown.  family is a comma
       (',') separated list of address family keywords like inet, inet6,
       unix, ipx, ax25, netrom, econet, ddp, and bluetooth.  This has the
       same effect as using the --inet|-4, --inet6|-6, --unix|-x, --ipx,
       --ax25, --netrom, --ddp, and --bluetooth options.

       The address family inet (Iv4) includes raw, udp, udplite and tcp
       protocol sockets.

       The address family bluetooth (Iv4) includes l2cap and rfcomm protocol
       sockets.

   -c, --continuous
       This will cause netstat to print the selected information every
       second continuously.

   -e, --extend
       Display additional information.  Use this option twice for maximum
       detail.

   -o, --timers
       Include information related to networking timers.

   -p, --program
       Show the PID and name of the program to which each socket belongs.

   -l, --listening
       Show only listening sockets.  (These are omitted by default.)

   -a, --all
       Show both listening and non-listening sockets.  With the --interfaces
       option, show interfaces that are not up

   -F
       Print routing information from the FIB.  (This is the default.)

   -C
       Print routing information from the route cache.
```
