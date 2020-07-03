# hostname
hostname command is used to print or set system hostname in Linux.

## Syntax
```
       hostname [-v] [-s|--short]

       hostname [-v] [-a|--alias] [-d|--domain] [-f|--fqdn|--long]
       [-i|--ip-address]

       hostname [-v] [-y|--yp|--nis] [-n|--node]

       hostname [-v] [-F filename|--file filename] [newname]

       domainname [-v] [-F filename|--file filename] [newname]

       nodename [-v] [-F filename|--file filename] [newname]

       hostname [-v|--verbose] [-h|--help] [-V|--version]

       dnsdomainname [-v]
       nisdomainname [-v]
       ypdomainname [-v]
```

## Description
```
       -a, --alias
              Display the alias name of the host (if used).

       -d, --domain
              Display the name of the DNS domain (this is the FQDN without
              the segment up to the first dot). This is equivalent to using
              the dnsdomainname command.

       -F, --file filename
              Read the new host name from the specified file. Comments
              (lines starting with a `#') are ignored.

       -f, --fqdn, --long
              Display the FQDN (Fully Qualified Domain Name). A FQDN
              consists of name including the DNS domain.

       -h, --help
              Print a usage message and exit.

       -i, --ip-address
              Display the IP address(es) of the host.

       -n, --node
              Display the DECnet node name. If a parameter is given (or
              --file name ) the root can also set a new node name.

       -s, --short
              Display the short host name. This is the host name cut at the
              first dot.

       -V, --version
              Print version information on standard output and exit
              successfully.

       -v, --verbose
              Be verbose and tell what's going on.

       -y, --yp, --nis
              Display the NIS domain name. If a parameter is given (or
              --file name ) then root can also set a new NIS domain.
```
