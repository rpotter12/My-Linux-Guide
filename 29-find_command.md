# find
find command lets you search for files in a directory as well as its sub-directories. It searches for files by attributes such as permissions, users, groups, file type, date, size and other possible criteria.

## Syntax
`find [-H] [-L] [-P] [-D debugopts] [-Olevel] [starting-point...] [expression]`

## Description
```
       -P     Never follow symbolic links.  This is the default behaviour.
              When find examines or prints information about files, and the
              file is a symbolic link, the information used shall be taken
              from the properties of the symbolic link itself.

       -L     Follow symbolic links.  When find examines or prints
              information about files, the information used shall be taken
              from the properties of the file to which the link points, not
              from the link itself (unless it is a broken symbolic link or
              find is unable to examine the file to which the link points).
              Use of this option implies -noleaf.  If you later use the -P
              option, -noleaf will still be in effect.  If -L is in effect
              and find discovers a symbolic link to a subdirectory during
              its search, the subdirectory pointed to by the symbolic link
              will be searched.

              When the -L option is in effect, the -type predicate will
              always match against the type of the file that a symbolic link
              points to rather than the link itself (unless the symbolic
              link is broken).  Actions that can cause symbolic links to
              become broken while find is executing (for example -delete)
              can give rise to confusing behaviour.  Using -L causes the
              -lname and -ilname predicates always to return false.

       -H     Do not follow symbolic links, except while processing the
              command line arguments.  When find examines or prints
              information about files, the information used shall be taken
              from the properties of the symbolic link itself.  The only
              exception to this behaviour is when a file specified on the
              command line is a symbolic link, and the link can be resolved.
              For that situation, the information used is taken from
              whatever the link points to (that is, the link is followed).
              The information about the link itself is used as a fallback if
              the file pointed to by the symbolic link cannot be examined.
              If -H is in effect and one of the paths specified on the
              command line is a symbolic link to a directory, the contents
              of that directory will be examined (though of course -maxdepth
              0 would prevent this).
```
