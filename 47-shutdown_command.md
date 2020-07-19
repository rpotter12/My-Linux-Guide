# shutdown
shutdown command schedules a time for the system to be powered down. It may be used to halt, power-off or reboot the machine

## Syntax
`shutdown [OPTIONS...] [TIME] [WALL...]`

## Description
```
       --help
           Print a short help text and exit.

       -H, --halt
           Halt the machine.

       -P, --poweroff
           Power-off the machine (the default).

       -r, --reboot
           Reboot the machine.

       -h
           Equivalent to --poweroff, unless --halt is specified.

       -k
           Do not halt, power-off, reboot, just write wall message.

       --no-wall
           Do not send wall message before halt, power-off, reboot.

       -c
           Cancel a pending shutdown. This may be used to cancel the effect
           of an invocation of shutdown with a time argument that is not
           "+0" or "now".
```
