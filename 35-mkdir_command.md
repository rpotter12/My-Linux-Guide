# Make Directory(mkdir)
mkdir command is used to create single or more directories, if they do not already exist (this can be overridden with the -p option).

## Syntax
`mkdir [OPTION]... DIRECTORY...`

## Description
```
       -m, --mode=MODE
              set file mode (as in chmod), not a=rwx - umask

       -p, --parents
              no error if existing, make parent directories as needed

       -v, --verbose
              print a message for each created directory

       -Z     set SELinux security context of each created directory to the
              default type

       --context[=CTX]
              like -Z, or if CTX is specified then set the SELinux or SMACK
              security context to CTX

       --help display this help and exit

       --version
              output version information and exit
```
