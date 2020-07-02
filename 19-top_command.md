# top
top displays and updates sorted process information. Use this tool to determine which processes are running and how much memory and CPU they consume. A common case occurs when you run an application and it dies a minute later.

## Syntax
top -hv|-bcEeHiOSs1 -d secs -n max -u|U user -p pids -o field -w [cols]

## Description
```
The command-line syntax for top consists of:

         -hv|-bcEeHiOSs1 -d secs -n max -u|U user -p pids -o field -w [cols]

       The typically mandatory switch (`-') and even whitespace are
       completely optional.

       -h | -v  :Help/Version
            Show library version and the usage prompt, then quit.

       -b  :Batch-mode operation
            Starts top in Batch mode, which could be useful for sending
            output from top to other programs or to a file.  In this mode,
            top will not accept input and runs until the iterations limit
            you've set with the `-n' command-line option or until killed.

       -c  :Command-line/Program-name toggle
            Starts top with the last remembered `c' state reversed.  Thus,
            if top was displaying command lines, now that field will show
            program names, and vice versa.  See the `c' interactive command
            for additional information.

       -d  :Delay-time interval as:  -d ss.t (secs.tenths)
            Specifies the delay between screen updates, and overrides the
            corresponding value in one's personal configuration file or the
            startup default.  Later this can be changed with the `d' or `s'
            interactive commands.

            Fractional seconds are honored, but a negative number is not
            allowed.  In all cases, however, such changes are prohibited if
            top is running in Secure mode, except for root (unless the `s'
            command-line option was used).  For additional information on
            Secure mode see topic 6d. SYSTEM Restrictions File.

       -e  :Enforce-Task-Memory-Scaling as:  -e  k | m | g | t | p
            Instructs top to force task area memory to be scaled as:
               k - kibibytes
               m - mebibytes
               g - gibibytes
               t - tebibytes
               p - pebibytes

            Later this can be changed with the `e' command toggle.

       -E  :Enforce-Summary-Memory-Scaling as:  -E  k | m | g | t | p | e
            Instructs top to force summary area memory to be scaled as:
               k - kibibytes
               m - mebibytes
               g - gibibytes
               t - tebibytes
               p - pebibytes
               e - exbibytes

            Later this can be changed with the `E' command toggle.

       -H  :Threads-mode operation
            Instructs top to display individual threads.  Without this
            command-line option a summation of all threads in each process
            is shown.  Later this can be changed with the `H' interactive
            command.

       -i  :Idle-process toggle
            Starts top with the last remembered `i' state reversed.  When
            this toggle is Off, tasks that have not used any CPU since the
            last update will not be displayed.  For additional information
            regarding this toggle see topic 4c. TASK AREA Commands, SIZE.

       -n  :Number-of-iterations limit as:  -n number
            Specifies the maximum number of iterations, or frames, top
            should produce before ending.

       -o  :Override-sort-field as:  -o fieldname
            Specifies the name of the field on which tasks will be sorted,
            independent of what is reflected in the configuration file.  You
            can prepend a `+' or `-' to the field name to also override the
            sort direction.  A leading `+' will force sorting high to low,
            whereas a `-' will ensure a low to high ordering.

            This option exists primarily to support automated/scripted batch
            mode operation.

       -O  :Output-field-names
            This option acts as a form of help for the above -o option.  It
            will cause top to print each of the available field names on a
            separate line, then quit.  Such names are subject to NLS
            (National Language Support) translation.

       -p  :Monitor-PIDs mode as:  -pN1 -pN2 ...  or  -pN1,N2,N3 ...
            Monitor only processes with specified process IDs.  This option
            can be given up to 20 times, or you can provide a comma
            delimited list with up to 20 pids.  Co-mingling both approaches
            is permitted.

            A pid value of zero will be treated as the process id of the top
            program itself once it is running.

            This is a command-line option only and should you wish to return
            to normal operation, it is not necessary to quit and restart top
             --  just issue any of these interactive commands: `=', `u' or
            `U'.

            The `p', `u' and `U' command-line options are mutually
            exclusive.

       -s  :Secure-mode operation
            Starts top with secure mode forced, even for root.  This mode is
            far better controlled through a system configuration file (see
            topic 6. FILES).

       -S  :Cumulative-time toggle
            Starts top with the last remembered `S' state reversed.  When
            Cumulative time mode is On, each process is listed with the cpu
            time that it and its dead children have used.  See the `S'
            interactive command for additional information regarding this
            mode.

       -u | -U  :User-filter-mode as:  -u | -U number or name
            Display only processes with a user id or user name matching that
            given.  The `-u' option matches on  effective user whereas the
            `-U' option matches on any user (real, effective, saved, or
            filesystem).

            Prepending an exclamation point (`!') to the user id or name
            instructs top to display only processes with users not matching
            the one provided.

            The `p', `u' and `U' command-line options are mutually
            exclusive.

       -w  :Output-width-override as:  -w [ number ]
            In Batch mode, when used without an argument top will format
            output using the COLUMNS= and LINES= environment variables, if
            set.  Otherwise, width will be fixed at the maximum 512 columns.
            With an argument, output width can be decreased or increased (up
            to 512) but the number of rows is considered unlimited.

            In normal display mode, when used without an argument top will
            attempt to format output using the COLUMNS= and LINES=
            environment variables, if set.  With an argument, output width
            can only be decreased, not increased.  Whether using environment
            variables or an argument with -w, when not in Batch mode actual
            terminal dimensions can never be exceeded.

            Note: Without the use of this command-line option, output width
            is always based on the terminal at which top was invoked whether
            or not in Batch mode.

       -1  :Single/Separate-Cpu-States toggle
            Starts top with the last remembered Cpu States portion of the
            summary area reversed.  Either all cpu information will be
            displayed in a single line or each cpu will be displayed
            separately, depending on the state of the NUMA Node command
            toggle ('2').

            See the `1' and '2' interactive commands for additional
            information.
```
