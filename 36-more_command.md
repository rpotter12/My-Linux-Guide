# more
more command enables you to view through relatively lengthy text files one screenful at a time.

## Syntax
`more [options] file...`

## Description
```
       -d, --silent
              Prompt with "[Press space to continue, 'q' to quit.]", and
              display "[Press 'h' for instructions.]" instead of ringing the
              bell when an illegal key is pressed.

       -l, --logical
              Do not pause after any line containing a ^L (form feed).

       -f, --no-pause
              Count logical lines, rather than screen lines (i.e., long
              lines are not folded).

       -p, --print-over
              Do not scroll.  Instead, clear the whole screen and then
              display the text.  Notice that this option is switched on
              automatically if the executable is named page.

       -c, --clean-print
              Do not scroll.  Instead, paint each screen from the top,
              clearing the remainder of each line as it is displayed.

       -s, --squeeze
              Squeeze multiple blank lines into one.

       -u, --plain
              Suppress underlining.  This option is silently ignored as
              backwards compatibility.

       -n, --lines number
              Specify the number of lines per screenful.  The number
              argument is a positive decimal integer.  The --lines option
              shall override any values obtained from any other source, such
              as number of lines reported by terminal.

       -number
              A numeric option means the same as --lines option argument.

       +number
              Start displaying each file at line number.

       +/string
              The string to be searched in each file before starting to
              display it.

       --help Display help text and exit.

       -V, --version
              Display version information and exit.
```
