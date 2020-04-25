# Manual(man)
The man command gives users access to manual pages for command line utilities and tools.

Syntax:
```shell
man <command_name>
```

man - an interface to the on-line reference manuals

man is the system's manual pager. Each page argument given to man is normally the name of a program, utility or function. The manual page associated with each of these arguments is then found and displayed. A section, if provided, will direct man to look only in that section of the manual. The default action is to search in all of the available sections following a pre-defined order ("1 n l 8 3 2 3posix 3pm 3perl 5 4 9 6 7" by default, unless overridden by the SECTION directive in /etc/manpath.config), and to show only the first page found, even if
page exists in several sections.

The table below shows the section numbers of the manual followed by the types of pages they contain.

1 Executable programs or shell commands
2 System calls (functions provided by the kernel)
3 Library calls (functions within program libraries)
4 Special files (usually found in /dev)
5 File formats and conventions eg /etc/passwd
6 Games
7 Miscellaneous (including macro packages and conventions), e.g.
man(7), groff(7)
8 System administration commands (usually only for root)
9 Kernel routines [Non standard]

A manual page consists of several sections.

Conventional section names include NAME, SYNOPSIS, CONFIGURATION, DESCRIPTION, OPTIONS, EXIT STATUS, RETURN VALUE, ERRORS, ENVIRONMENT, FILES, VERSIONS, CONFORMING TO, NOTES, BUGS, EXAMPLE, AUTHORS, and SEE ALSO.

```shell
General options
       -C file, --config-file=file
              Use this user configuration file rather than the default of
              ~/.manpath.

       -d, --debug
              Print debugging information.

       -D, --default
              This option is normally issued as the very first option and
              resets man's behaviour to its default.  Its use is to reset
              those options that may have been set in $MANOPT.  Any options
              that follow -D will have their usual effect.

       --warnings[=warnings]
              Enable warnings from groff.  This may be used to perform
              sanity checks on the source text of manual pages.  warnings is
              a comma-separated list of warning names; if it is not
              supplied, the default is "mac".  See the “Warnings” node in
              info groff for a list of available warning names.

   Main modes of operation
       -f, --whatis
              Equivalent to whatis.  Display a short description from the
              manual page, if available.  See whatis(1) for details.

       -k, --apropos
              Equivalent to apropos.  Search the short manual page
              descriptions for keywords and display any matches.  See
              apropos(1) for details.

       -K, --global-apropos
              Search for text in all manual pages.  This is a brute-force
              search, and is likely to take some time; if you can, you
              should specify a section to reduce the number of pages that
              need to be searched.  Search terms may be simple strings (the
              default), or regular expressions if the --regex option is
              used.

              Note that this searches the sources of the manual pages, not
              the rendered text, and so may include false positives due to
              things like comments in source files.  Searching the rendered
              text would be much slower.

       -l, --local-file
              Activate "local" mode.  Format and display local manual files
              instead of searching through the system's manual collection.
              Each manual page argument will be interpreted as an nroff
              source file in the correct format.  No cat file is produced.
              If '-' is listed as one of the arguments, input will be taken
              from stdin.  When this option is not used, and man fails to
              find the page required, before displaying the error message,
              it attempts to act as if this option was supplied, using the
              name as a filename and looking for an exact match.

       -w, --where, --path, --location
              Don't actually display the manual page, but do print the
              location of the source nroff file that would be formatted.  If
              the -a option is also used, then print the locations of all
              source files that match the search criteria.

       -W, --where-cat, --location-cat
              Don't actually display the manual page, but do print the
              location of the preformatted cat file that would be displayed.
              If the -a option is also used, then print the locations of all
              preformatted cat files that match the search criteria.

              If -w and -W are both used, then print both source file and
              cat file separated by a space.  If all of -w, -W, and -a are
              used, then do this for each possible match.

       -c, --catman
              This option is not for general use and should only be used by
              the catman program.

       -R encoding, --recode=encoding
              Instead of formatting the manual page in the usual way, output
              its source converted to the specified encoding.  If you
              already know the encoding of the source file, you can also use
              manconv(1) directly.  However, this option allows you to
              convert several manual pages to a single encoding without
              having to explicitly state the encoding of each, provided that
              they were already installed in a structure similar to a manual
              page hierarchy.

              Consider using @TRANS_MAN_RECODE@(1) instead for converting
              multiple manual pages, since it has an interface designed for
              bulk conversion and so can be much faster.

   Finding manual pages
       -L locale, --locale=locale
              man will normally determine your current locale by a call to
              the C function setlocale(3) which interrogates various
              environment variables, possibly including $LC_MESSAGES and
              $LANG.  To temporarily override the determined value, use this
              option to supply a locale string directly to man.  Note that
              it will not take effect until the search for pages actually
              begins.  Output such as the help message will always be
              displayed in the initially determined locale.

       -m system[,...], --systems=system[,...]
              If this system has access to other operating system's manual
              pages, they can be accessed using this option.  To search for
              a manual page from NewOS's manual page collection, use the
              option -m NewOS.

              The system specified can be a combination of comma delimited
              operating system names.  To include a search of the native
              operating system's manual pages, include the system name man
              in the argument string.  This option will override the $SYSTEM
              environment variable.

       -M path, --manpath=path
              Specify an alternate manpath to use.  By default, man uses
              manpath derived code to determine the path to search.  This
              option overrides the $MANPATH environment variable and causes
              option -m to be ignored.

              A path specified as a manpath must be the root of a manual
              page hierarchy structured into sections as described in the
              man-db manual (under "The manual page system").  To view
              manual pages outside such hierarchies, see the -l option.

       -S list, -s list, --sections=list
              The given list is a colon- or comma-separated list of
              sections, used to determine which manual sections to search
              and in what order.  This option overrides the $MANSECT
              environment variable.  (The -s spelling is for compatibility
              with System V.)

       -e sub-extension, --extension=sub-extension
              Some systems incorporate large packages of manual pages, such
              as those that accompany the Tcl package, into the main manual
              page hierarchy.  To get around the problem of having two
              manual pages with the same name such as exit(3), the Tcl pages
              were usually all assigned to section l.  As this is
              unfortunate, it is now possible to put the pages in the
              correct section, and to assign a specific "extension" to them,
              in this case, exit(3tcl).  Under normal operation, man will
              display exit(3) in preference to exit(3tcl).  To negotiate
              this situation and to avoid having to know which section the
              page you require resides in, it is now possible to give man a
              sub-extension string indicating which package the page must
              belong to.  Using the above example, supplying the option
              -e tcl to man will restrict the search to pages having an
              extension of *tcl.

       -i, --ignore-case
              Ignore case when searching for manual pages.  This is the
              default.

       -I, --match-case
              Search for manual pages case-sensitively.

       --regex
              Show all pages with any part of either their names or their
              descriptions matching each page argument as a regular
              expression, as with apropos(1).  Since there is usually no
              reasonable way to pick a "best" page when searching for a
              regular expression, this option implies -a.

       --wildcard
              Show all pages with any part of either their names or their
              descriptions matching each page argument using shell-style
              wildcards, as with apropos(1) --wildcard.  The page argument
              must match the entire name or description, or match on word
              boundaries in the description.  Since there is usually no
              reasonable way to pick a "best" page when searching for a
              wildcard, this option implies -a.

       --names-only
              If the --regex or --wildcard option is used, match only page
              names, not page descriptions, as with whatis(1).  Otherwise,
              no effect.

       -a, --all
              By default, man will exit after displaying the most suitable
              manual page it finds.  Using this option forces man to display
              all the manual pages with names that match the search
              criteria.

       -u, --update
              This option causes man to update its database caches of
              installed manual pages.  This is only needed in rare
              situations, and it is normally better to run mandb(8) instead.

       --no-subpages
              By default, man will try to interpret pairs of manual page
              names given on the command line as equivalent to a single
              manual page name containing a hyphen or an underscore.  This
              supports the common pattern of programs that implement a
              number of subcommands, allowing them to provide manual pages
              for each that can be accessed using similar syntax as would be
              used to invoke the subcommands themselves.  For example:

                $ man -aw git diff
                /usr/share/man/man1/git-diff.1.gz

              To disable this behaviour, use the --no-subpages option.

                $ man -aw --no-subpages git diff
                /usr/share/man/man1/git.1.gz
                /usr/share/man/man3/Git.3pm.gz
                /usr/share/man/man1/diff.1.gz

   Controlling formatted output
       -P pager, --pager=pager
              Specify which output pager to use.  By default, man uses less,
              falling back to cat if less is not found or is not executable.
              This option overrides the $MANPAGER environment variable,
              which in turn overrides the $PAGER environment variable.  It
              is not used in conjunction with -f or -k.

              The value may be a simple command name or a command with
              arguments, and may use shell quoting (backslashes, single
              quotes, or double quotes).  It may not use pipes to connect
              multiple commands; if you need that, use a wrapper script,
              which may take the file to display either as an argument or on
              standard input.

       -r prompt, --prompt=prompt
              If a recent version of less is used as the pager, man will
              attempt to set its prompt and some sensible options.  The
              default prompt looks like

               Manual page name(sec) line x

              where name denotes the manual page name, sec denotes the
              section it was found under and x the current line number.
              This is achieved by using the $LESS environment variable.

              Supplying -r with a string will override this default.  The
              string may contain the text $MAN_PN which will be expanded to
              the name of the current manual page and its section name
              surrounded by "(" and ")".  The string used to produce the
              default could be expressed as

              \ Manual\ page\ \$MAN_PN\ ?ltline\ %lt?L/%L.:
              byte\ %bB?s/%s..?\ (END):?pB\ %pB\\%..
              (press h for help or q to quit)

              It is broken into three lines here for the sake of readability
              only.  For its meaning see the less(1) manual page.  The
              prompt string is first evaluated by the shell.  All double
              quotes, back-quotes and backslashes in the prompt must be
              escaped by a preceding backslash.  The prompt string may end
              in an escaped $ which may be followed by further options for
              less.  By default man sets the -ix8 options.

              The $MANLESS environment variable described below may be used
              to set a default prompt string if none is supplied on the
              command line.

       -7, --ascii
              When viewing a pure ascii(7) manual page on a 7 bit terminal
              or terminal emulator, some characters may not display
              correctly when using the latin1(7) device description with GNU
              nroff.  This option allows pure ascii manual pages to be
              displayed in ascii with the latin1 device.  It will not
              translate any latin1 text.  The following table shows the
              translations performed: some parts of it may only be displayed
              properly when using GNU nroff's latin1(7) device.

              Description      Octal   latin1   ascii
              ────────────────────────────────────────
              continuation      255      ‐        -
              hyphen
              bullet (middle    267      ·        o
              dot)
              acute accent      264      ´        '
              multiplication    327      ×        x
              sign

              If  the latin1 column displays correctly, your terminal may be
              set up for latin1 characters and this option is not necessary.
              If the latin1 and ascii columns are identical, you are reading
              this page using this option or man did not  format  this  page
              using  the latin1 device description.  If the latin1 column is
              missing or corrupt, you may need to  view  manual  pages  with
              this option.

              This  option  is  ignored when using options -t, -H, -T, or -Z
              and may be useless for nroff other than GNU's.

       -E encoding, --encoding=encoding
              Generate output  for  a  character  encoding  other  than  the
              default.  For backward compatibility, encoding may be an nroff
              device such as ascii, latin1,  or  utf8  as  well  as  a  true
              character encoding such as UTF-8.

       --no-hyphenation, --nh
              Normally,  nroff  will  automatically  hyphenate  text at line
              breaks even in words that do not contain  hyphens,  if  it  is
              necessary  to  do  so  to  lay  out  words  on  a line without
              excessive   spacing.    This   option    disables    automatic
              hyphenation,  so words will only be hyphenated if they already
              contain hyphens.

              If you are writing a manual page and simply  want  to  prevent
              nroff  from  hyphenating  a word at an inappropriate point, do
              not use this  option,  but  consult  the  nroff  documentation
              instead;  for  instance,  you  can  put  "\%" inside a word to
              indicate that it may be hyphenated at that point, or put  "\%"
              at the start of a word to prevent it from being hyphenated.

       --no-justification, --nj
              Normally,  nroff  will  automatically  justify  text  to  both
              margins.  This option  disables  full  justification,  leaving
              justified  only  to the left margin, sometimes called "ragged-
              right" text.

              If you are writing a manual page and simply  want  to  prevent
              nroff  from  justifying  certain  paragraphs,  do not use this
              option, but  consult  the  nroff  documentation  instead;  for
              instance,  you  can  use  the  ".na",  ".nf", ".fi", and ".ad"
              requests to temporarily disable adjusting and filling.

       -p string, --preprocessor=string
              Specify the sequence of preprocessors to run before  nroff  or
              troff/groff.   Not  all  installations will have a full set of
              preprocessors.  Some of the preprocessors and the letters used
              to  designate  them  are: eqn (e), grap (g), pic (p), tbl (t),
              vgrind (v), refer (r).  This option overrides the  $MANROFFSEQ
              environment variable.  zsoelim is always run as the very first
              preprocessor.

       -t, --troff
              Use  @troff_as_troff_input@  to  format  the  manual  page  to
              stdout.   This  option is not required in conjunction with -H,
              -T, or -Z.

       -T[device], --troff-device[=device]
              This option is used to  change  groff  (or  possibly  troff's)
              output to be suitable for a device other than the default.  It
              implies -t.  Examples (provided with Groff-1.17) include  dvi,
              latin1, ps, utf8, X75 and X100.

       -H[browser], --html[=browser]
              This  option will cause groff to produce HTML output, and will
              display that output in a web browser.  The choice  of  browser
              is  determined  by  the  optional  browser  argument if one is
              provided, by  the  $BROWSER  environment  variable,  or  by  a
              compile-time  default  if  that is unset (usually lynx).  This
              option implies -t, and will only work with GNU troff.

       -X[dpi], --gxditview[=dpi]
              This option displays the output of groff in a graphical window
              using  the  gxditview program.  The dpi (dots per inch) may be
              75, 75-12, 100, or 100-12, defaulting to 75; the -12  variants
              use  a  12-point  base  font.  This option implies -T with the
              X75, X75-12, X100, or X100-12 device respectively.

       -Z, --ditroff
              groff will  run  troff  and  then  use  an  appropriate  post-
              processor  to  produce  output suitable for the chosen device.
              If @troff_as_troff_input@ is groff, this option is  passed  to
              groff  and  will  suppress  the  use  of a post-processor.  It
              implies -t.

   Getting help
       -?, --help
              Print a help message and exit.

       --usage
              Print a short usage message and exit.

       -V, --version
              Display version information.
```
