# Process Status(ps)
ps shows process status. Use this command to determine a running application or confirm an expected process. For example, if you want to check for a running Tomcat web server, you use ps with its options to obtain the process ID of Tomcat.

## Syntax
ps [options]

## Description
```
ps  gives a snapshot of the current processes. If you want a repetitive
       update of this status, use top. This man page documents the /proc-based
       version of ps, or tries to.

COMMAND-LINE OPTIONS
       This version of ps accepts several kinds of options.
	      Unix98 options may be grouped and must be preceeded by a dash.
	      BSD options may be grouped and must not be used with a dash.
	      GNU long options are preceeded by two dashes.
       Options of different types may be freely mixed.

       Set  the	 I_WANT_A_BROKEN_PS  environment  variable to force BSD syntax
       even when options are preceeded by a dash. The PS_PERSONALITY  environ-
       ment  variable  (described  below) provides more detailed control of ps
       behavior.

  SIMPLE PROCESS SELECTION
       Switch	    Description
       ()									   ()

       -A	    select all processes
       -N	    negate selection
       -a	    select all with a tty except session leaders
       -d	    select all, but omit session leaders
       -e	    select all processes
       T	    select all processes on this terminal
       a	    select all processes on a terminal,	 includ-
		    ing those of other users
       g	    really all, even group leaders (does nothing
		    w/o SunOS settings)
       r	    restrict output to running processes
       x	    select processes without controlling ttys
       --deselect   negate selection

  PROCESS SELECTION BY LIST
       Switch	 Description
       ()									   ()

       -C	 select by command name
       -G	 select by RGID (supports names)
       -U	 select by RUID (supports names)
       -g	 select by session leader OR by group name
       -p	 select by PID
       -s	 select processes belonging to the sessions given

       -t	 select by tty
       -u	 select by effective user ID (supports names)
       U	 select processes for specified users
       p	 select by process ID
       t	 select by tty
       --Group	 select by real group name or ID
       --User	 select by real user name or ID
       --group	 select by effective group name or ID
       --pid	 select by process ID
       --sid	 select by session ID
       --tty	 select by terminal
       --user	 select by effective user name or ID
       -123	 implied --sid
       123	 implied --pid

  OUTPUT FORMAT CONTROL
       Switch	  Description
       ()									   ()

       -O	  is preloaded "-o"
       -c	  different scheduler info for -l option
       -f	  does full listing
       -j	  jobs format
       -l	  long format
       -o	  user-defined format
       -y	  do not show flags; show rss in place of addr
       O	  is preloaded "o" (overloaded)
       X	  old Linux i386 register format
       j	  job control format
       l	  display long format
       o	  specify user-defined format
       s	  display signal format
       u	  display user-oriented format
       v	  display virtual memory format
       --format	  user-defined format

  OUTPUT MODIFIERS
       Switch	      Description
       ()									   ()

       -H	      show process hierarchy (forest)
       -m	      show all threads
       -n	      set namelist file
       -w	      wide output
       C	      use raw CPU time for %CPU instead of decaying average
       N	      specify namelist file
       O	      sorting order (overloaded)
       S	      include some dead child process data (as a  sum  with
		      the parent)
       c	      true command name
       e	      show environment after the command
       f	      ASCII-art process hierarchy (forest)
       h	      do not print header lines (repeat header lines in BSD
		      personality)
       m	      all threads
       n	      numeric output for WCHAN and USER
       w	      wide output
       --cols	      set screen width
       --columns      set screen width

       --cumulative   include some dead child process data (as a  sum  with
		      the parent)
       --forest	      ASCII art process tree
       --html	      HTML escaped output
       --headers      repeat header lines
       --no-headers   print no header line at all
       --lines	      set screen height
       --nul	      unjustified output with NULs
       --null	      unjustified output with NULs
       --rows	      set screen height
       --sort	      specify sorting order
       --width	      set screen width
       --zero	      unjustified output with NULs
```
