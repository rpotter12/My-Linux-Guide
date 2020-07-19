# sort
sort command is used to sort lines of text in the specified file(s) or from stdin

## Syntax
```
       sort [OPTION]... [FILE]...
       sort [OPTION]... --files0-from=F
```

## Description
```
       -b, --ignore-leading-blanks
              ignore leading blanks

       -d, --dictionary-order
              consider only blanks and alphanumeric characters

       -f, --ignore-case
              fold lower case to upper case characters

       -g, --general-numeric-sort
              compare according to general numerical value

       -i, --ignore-nonprinting
              consider only printable characters

       -M, --month-sort
              compare (unknown) < 'JAN' < ... < 'DEC'

       -h, --human-numeric-sort
              compare human readable numbers (e.g., 2K 1G)

       -n, --numeric-sort
              compare according to string numerical value

       -R, --random-sort
              shuffle, but group identical keys.  See shuf(1)

       --random-source=FILE
              get random bytes from FILE

       -r, --reverse
              reverse the result of comparisons

       --sort=WORD
              sort according to WORD: general-numeric -g, human-numeric -h,
              month -M, numeric -n, random -R, version -V

       -V, --version-sort
              natural sort of (version) numbers within text

       Other options:

       --batch-size=NMERGE
              merge at most NMERGE inputs at once; for more use temp files

       -c, --check, --check=diagnose-first
              check for sorted input; do not sort

       -C, --check=quiet, --check=silent
              like -c, but do not report first bad line

       --compress-program=PROG
              compress temporaries with PROG; decompress them with PROG -d

       --debug
              annotate the part of the line used to sort, and warn about
              questionable usage to stderr

       --files0-from=F
              read input from the files specified by NUL-terminated names in
              file F; If F is - then read names from standard input

       -k, --key=KEYDEF
              sort via a key; KEYDEF gives location and type

       -m, --merge
              merge already sorted files; do not sort

       -o, --output=FILE
              write result to FILE instead of standard output

       -s, --stable
              stabilize sort by disabling last-resort comparison

       -S, --buffer-size=SIZE
              use SIZE for main memory buffer

       -t, --field-separator=SEP
              use SEP instead of non-blank to blank transition

       -T, --temporary-directory=DIR
              use DIR for temporaries, not $TMPDIR or /tmp; multiple options
              specify multiple directories

       --parallel=N
              change the number of sorts run concurrently to N

       -u, --unique
              with -c, check for strict ordering; without -c, output only
              the first of an equal run

       -z, --zero-terminated
              line delimiter is NUL, not newline

       --help display this help and exit

       --version
              output version information and exit
```
