# I/O stats(iostat)
iostat is used to show CPU and input/output statistics for devices and partitions. It produces useful reports for updating system configurations to help balance the input/output load between physical disks.

## Syntax
```
       iostat [ -c ] [ -d ] [ -h ] [ -k | -m ] [ -N ] [ -s ] [ -t ] [ -V ] [
       -x ] [ -y ] [ -z ] [ --dec={ 0 | 1 | 2 } ] [ -j { ID | LABEL | PATH |
       UUID | ... } ] [ -o JSON ] [ [ -H ] -g group_name ] [ --human ] [ -p
       [ device [,...] | ALL ] ] [ device [...] | ALL ] [ interval [ count ]
       ]
```

## Description
```
       -c     Display the CPU utilization report.

       -d     Display the device utilization report.

       --dec={ 0 | 1 | 2 }
              Specify the number of decimal places to use (0 to 2, default
              value is 2).

       -g group_name { device [...] | ALL }
              Display statistics for a group of devices.  The iostat command
              reports statistics for each individual device in the list then
              a line of global statistics for the group displayed as
              group_name and made up of all the devices in the list. The ALL
              keyword means that all the block devices defined by the system
              shall be included in the group.

       -H     This option must be used with option -g and indicates that
              only global statistics for the group are to be displayed, and
              not statistics for individual devices in the group.

       -h     Make the Device Utilization Report easier to read by a human.
              --human is enabled implicitly with this option.

       --human
              Print sizes in human readable format (e.g. 1.0k, 1.2M, etc.)
              The units displayed with this option supersede any other
              default units (e.g.  kilobytes, sectors...) associated with
              the metrics.

       -j { ID | LABEL | PATH | UUID | ... } [ device [...] | ALL ]
              Display persistent device names. Options ID, LABEL, etc.
              specify the type of the persistent name. These options are not
              limited, only prerequisite is that directory with required
              persistent names is present in /dev/disk.  Optionally,
              multiple devices can be specified in the chosen persistent
              name type.  Because persistent device names are usually long,
              option

       -k     Display statistics in kilobytes per second.

       -m     Display statistics in megabytes per second.

       -N     Display the registered device mapper names for any device
              mapper devices.  Useful for viewing LVM2 statistics.

       -o JSON
              Display the statistics in JSON (Javascript Object Notation)
              format.  JSON output field order is undefined, and new fields
              may be added in the future.

       -p [ { device [,...] | ALL } ]
              The -p option displays statistics for block devices and all
              their partitions that are used by the system.  If a device
              name is entered on the command line, then statistics for it
              and all its partitions are displayed. Last, the ALL keyword
              indicates that statistics have to be displayed for all the
              block devices and partitions defined by the system, including
              those that have never been used. If option -j is defined
              before this option, devices entered on the command line can be
              specified with the chosen persistent name type.

       -s     Display a short (narrow) version of the report that should fit
              in 80 characters wide screens.

       -t     Print the time for each report displayed. The timestamp format
              may depend on the value of the S_TIME_FORMAT environment
              variable (see below).

       -V     Print version number then exit.

       -x     Display extended statistics.

       -y     Omit first report with statistics since system boot, if
              displaying multiple records at given interval.

       -z     Tell iostat to omit output for any devices for which there was
              no activity during the sample period.
```
