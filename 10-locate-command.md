# Locate(locate)
The locate command is used to locate a file in a Linux system, just like the search command in Windows. This command is useful when you don't know where a file is saved or the actual name of the file. Using the -i argument with the command helps to ignore the case (it doesn't matter if it is uppercase or lowercase). So, if you want a file that has the word “hello”, it gives the list of all the files in your Linux system containing the word "hello" when you type in “locate -i hello”. If you remember two words, you can separate them using an asterisk (*). For example, to locate a file containing the words "hello" and "this", you can use the command “locate -i *hello*this”.

## Syntax
```
locate [-d path | --database=path] [-e | -E | --[non-]existing] [-i |
--ignore-case] [-0 | --null] [-c | --count] [-w | --wholename] [-b |
--basename] [-l N | --limit=N] [-S | --statistics] [-r | --regex ]
[--regextype R] [--max-database-age D] [-P | -H | --nofollow] [-L |
--follow] [--version] [-A | --all] [-p | --print] [--help] pattern...
```

## Description
```
       -0, --null
              Use ASCII NUL as a separator, instead of newline.

       -A, --all
              Print only names which match all non-option arguments, not
              those matching one or more non-option arguments.

       -b, --basename
              Results are considered to match if the pattern specified
              matches the final component of the name of a file as listed in
              the database.  This final component is usually referred to as
              the `base name'.

       -c, --count
              Instead of printing the matched filenames, just print the
              total number of matches we found, unless --print (-p) is also
              present.

       -d path, --database=path
              Instead of searching the default file name database, search
              the file name databases in path, which is a colon-separated
              list of database file names.  You can also use the environment
              variable LOCATE_PATH to set the list of database files to
              search.  The option overrides the environment variable if both
              are used.  Empty elements in the path are taken to be synonyms
              for the file name of the default database.  A database can be
              supplied on stdin, using `-' as an element of path. If more
              than one element of path is `-', later instances are ignored
              (and a warning message is printed).

              The file name database format changed starting with GNU find
              and locate version 4.0 to allow machines with different byte
              orderings to share the databases.  This version of locate can
              automatically recognize and read databases produced for older
              versions of GNU locate or Unix versions of locate or find.
              Support for the old locate database format will be
              discontinued in a future release.

       -e, --existing
              Only print out such names that currently exist (instead of
              such names that existed when the database was created).  Note
              that this may slow down the program a lot, if there are many
              matches in the database.  If you are using this option within
              a program, please note that it is possible for the file to be
              deleted after locate has checked that it exists, but before
              you use it.

       -E, --non-existing
              Only print out such names that currently do not exist (instead
              of such names that existed when the database was created).
              Note that this may slow down the program a lot, if there are
              many matches in the database.

       --help Print a summary of the options to locate and exit.

       -i, --ignore-case
              Ignore case distinctions in both the pattern and the file
              names.

       -l N, --limit=N
              Limit the number of matches to N.  If a limit is set via this
              option, the number of results printed for the -c option will
              never be larger than this number.

       -L, --follow
              If testing for the existence of files (with the -e or -E
              options), consider broken symbolic links to be non-existing.
              This is the default.

       --max-database-age D
              Normally, locate will issue a warning message when it searches
              a database which is more than 8 days old.  This option changes
              that value to something other than 8.  The effect of
              specifying a negative value is undefined.

       -m, --mmap
              Accepted but does nothing, for compatibility with BSD locate.

       -P, -H, --nofollow
              If testing for the existence of files (with the -e or -E
              options), treat broken symbolic links as if they were existing
              files.  The -H form of this option is provided purely for
              similarity with find; the use of -P is recommended over -H.

       -p, --print
              Print search results when they normally would not, because of
              the presence of --statistics (-S) or --count (-c).

       -r, --regex
              The pattern specified on the command line is understood to be
              a regular expression, as opposed to a glob pattern.  The
              Regular expressions work in the same was as in emacs except
              for the fact that "." will match a newline.  GNU find uses the
              same regular expressions.  Filenames whose full paths match
              the specified regular expression are printed (or, in the case
              of the -c option, counted).  If you wish to anchor your
              regular expression at the ends of the full path name, then as
              is usual with regular expressions, you should use the
              characters ^ and $ to signify this.

       --regextype R
              Use regular expression dialect R.  Supported dialects include
              `findutils-default', `posix-awk', `posix-basic', `posix-
              egrep', `posix-extended', `posix-minimal-basic', `awk', `ed',
              `egrep', `emacs', `gnu-awk', `grep' and `sed'.  See the
              Texinfo documentation for a detailed explanation of these
              dialects.

       -s, --stdio
              Accepted but does nothing, for compatibility with BSD locate.

       -S, --statistics
              Print various statistics about each locate database and then
              exit without performing a search, unless non-option arguments
              are given.  For compatibility with BSD, -S is accepted as a
              synonym for --statistics.  However, the output of locate -S is
              different for the GNU and BSD implementations of locate.

       --version
              Print the version number of locate and exit.

       -w, --wholename
              Match against the whole name of the file as listed in the
              database.  This is the default.
```
