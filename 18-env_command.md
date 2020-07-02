# Enivronment Variable(env)
env allows you to set or print the environment variables. During troubleshooting, you may find it useful for checking if the wrong environment variable prevents your application from starting. In the example below, this command is used to check the environment variables set on your application's host.

## Syntax
env [OPTION]... [-] [NAME=VALUE]... [COMMAND [ARG]...]

## Deascription
Set each NAME to VALUE in the environment and run COMMAND.
Mandatory arguments to long options are mandatory for short options
too.

```
       -i, --ignore-environment
              start with an empty environment

       -0, --null
              end each output line with NUL, not newline

       -u, --unset=NAME
              remove variable from the environment

       -C, --chdir=DIR
              change working directory to DIR

       -S, --split-string=S
              process and split S into separate arguments; used to pass
              multiple arguments on shebang lines

       --block-signal[=SIG]
              block delivery of SIG signal(s) to COMMAND

       --default-signal[=SIG]
              reset handling of SIG signal(s) to the default

       --ignore-signal[=SIG]
              set handling of SIG signals(s) to do nothing

       --list-signal-handling
              list non default signal handling to stderr

       -v, --debug
              print verbose information for each processing step

       --help display this help and exit

       --version
              output version information and exit

       A mere - implies -i.  If no COMMAND, print the resulting environment.

       SIG may be a signal name like 'PIPE', or a signal number like '13'.
       Without SIG, all known signals are included.  Multiple signals can be
       comma-separated.
       ```
