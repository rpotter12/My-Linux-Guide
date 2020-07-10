# last
last command display a listing of last logged in users.

## Syntax
```
       last   [ -num | -n num | --lines num ]
              [ -f filename | --file filename ]
              [ people ...  ] [ ttys ...  ]
              [ --complain ] [ --no-truncate-ftp-entries ]
              [ -x | --more-records ] [ -a | --all-records ]
              [ --tw-leniency num ] [ --tw-suspicious num ]
              [ -i | --ip-address ] [ --debug ] [ -w | --wide ]
              [ -s | --print-seconds ] [ -y | --print-year ]
              [ -V | --version ] [ -h | --help ]
```

## Description
```
       -n num, --lines num
              Limit the number of lines that last outputs.  This is
              different from u*x last, which lets you specify the number
              right after a dash.
       -f filename, --file filename
              Read from the file filename instead of the system's wtmp file.
       --complain
              When the wtmp file has a problem (a time-warp, missing record,
              or whatever), print out an appropriate error.
       --tw-leniency num
              Set the time warp leniency to num seconds.  Records in wtmp
              files might be slightly out of order (most notably when two
              logins occur within a one-second period - the second one gets
              written first).  By default, this value is set to 60.  If the
              program notices this problem, time is not assigned to users
              unless the --timewarps flag is used.
       --tw-suspicious num
              Set the time warp suspicious value to num seconds.  If two
              records in the wtmp file are farther than this number of
              seconds apart, there is a problem with the wtmp file (or your
              machine hasn't been used in a year).  If the program notices
              this problem, time is not assigned to users unless the
              --timewarps flag is used.
       --no-truncate-ftp-entries
              When printing out the information, don't chop the number part
              off of `ftp'XXXX entries.
       -x, --more-records
              Print out run level changes, shutdowns, and time changes in
              addition to the normal records.
       -a, --all-records
              Print out all records in the wtmp file.
       -i, --ip-address
              Some machines store the IP address of a connection in a utmp
              record.  Enabling this option makes last print the IP address
              instead of the hostname.
       -w, --wide
              By default, last tries to print each entry within in 80
              columns.  Use this option to instruct last to print out the
              fields in the wtmp file with full field widths.
       --debug
              Print verbose internal information.
       -s, --print-seconds
              Print seconds when displaying dates.
       -y, --print-year
              Print year when displaying dates.
       -V, --version
              Print last's version number.
       -h, --help
              Prints the usage string and default locations of system files
              to standard output and exits.
```
