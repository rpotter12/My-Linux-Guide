# split
split as the name suggests, is used to split a large file into small parts.

## Syntax
`split [OPTION]... [FILE [PREFIX]]`

## Description
```
       -a, --suffix-length=N
              generate suffixes of length N (default 2)

       --additional-suffix=SUFFIX
              append an additional SUFFIX to file names

       -b, --bytes=SIZE
              put SIZE bytes per output file

       -C, --line-bytes=SIZE
              put at most SIZE bytes of records per output file

       -d     use numeric suffixes starting at 0, not alphabetic

       --numeric-suffixes[=FROM]
              same as -d, but allow setting the start value

       -x     use hex suffixes starting at 0, not alphabetic

       --hex-suffixes[=FROM]
              same as -x, but allow setting the start value

       -e, --elide-empty-files
              do not generate empty output files with '-n'

       --filter=COMMAND
              write to shell COMMAND; file name is $FILE

       -l, --lines=NUMBER
              put NUMBER lines/records per output file

       -n, --number=CHUNKS
              generate CHUNKS output files; see explanation below

       -t, --separator=SEP
              use SEP instead of newline as the record separator; '\0'
              (zero) specifies the NUL character

       -u, --unbuffered
              immediately copy input to output with '-n r/...'

       --verbose
              print a diagnostic just before each output file is opened

       --help display this help and exit

       --version
              output version information and exit
```
