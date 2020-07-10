# nano
nano is a popular small, free and friendly text editor for Linux; a clone of Pico, the default editor included in the non-free Pine package.

## Syntax
`nano [OPTION]... [FILE]`

## Description
```
+LINE,COLUMN
Start at line number LINE and column number COLUMN (at least one of which must be specified) instead of the default of line 1, column 1.
-?
Same as -h, --help.
-A, --smarthome
Make the Home key smarter. When Home is pressed anywhere but at the very beginning of non-whitespace characters on a line, the cursor will jump to that beginning (either forwards or backwards). If the cursor is already at that position, it will jump to the true beginning of the line.
-B, --backup
When saving a file, back up the previous version of it to the current filename suffixed with a ~.
-C <dir>, --backupdir=<dir>
Set the directory where nano puts unique backup files if file backups are enabled.
-D, --boldtext
Use bold text instead of reverse video text.
-E, --tabstospaces
Convert typed tabs to spaces.
-F, --multibuffer
Enable multiple file buffers, if available.
-H, --historylog
Log search and replace strings to ~/.nano_history, so they can be retrieved in later sessions, if nanorc support is available.
-I, --ignorercfiles
Don't look at SYSCONFDIR/nanorc or ~/.nanorc, if nanorc support is available.
-K, --rebindkeypad
Interpret the numeric keypad keys so that they all work properly. You should only need to use this option if they don't, as mouse support won't work properly with this option enabled.
-L, --nonewlines
Don't add newlines to the ends of files.
-N, --noconvert
Don't convert files from DOS/Mac format.
-O, --morespace
Use the blank line below the titlebar as extra editing space.
-Q <str>, --quotestr=<str>
Set the quoting string for justifying. The default value is
^([ \t]*[|>:}#])+
if extended regular expression support is available, or "> " otherwise. Note that \t above stands for a literal Tab character.

-R, --restricted
Restricted mode: don't read or write to any file not specified on the command line; read any nanorc files; allow suspending; allow a file to be appended to, prepended to, or saved under a different name if it already has one; or use backup files or spell checking. Also accessible by invoking nano with any name beginning with 'r' (e.g. "rnano").
-S, --smooth
Enable smooth scrolling. Text will scroll line-by-line, instead of the usual chunk-by-chunk behavior.
-T <#cols>, --tabsize=<#cols>
Set the displayed tab length to #cols columns. The value of #cols must be greater than 0. The default value is 8.
-U, --quickblank
Do quick statusbar blanking. Statusbar messages will disappear after 1 keystroke instead of 25. Note that -c overrides this.
-V, --version
Show the current version number and exit.
-W, --wordbounds
Detect word boundaries more accurately by treating punctuation characters as parts of words.
-Y <str>, --syntax=<str>
Specify a specific syntax highlighting from the nanorc to use, if available. See See Nanorc Files, for more info.
-c, --const
Constantly display the cursor position and line number on the statusbar. Note that this overrides -U.
-d, --rebinddelete
Interpret the Delete key differently so that both Backspace and Delete work properly. You should only need to use this option if Backspace acts like Delete on your system.
-h, --help
Show a summary of command line options and exit.
-i, --autoindent
Automatically indent new lines to the same number of spaces and tabs as the previous line.
-k, --cut
Cut from the current cursor position to the end of the current line.
-l, --nofollow
When writing files, if the given file is a symbolic link, it is removed and a new file is created.
-m, --mouse
Enable mouse support, if available for your system. When enabled, mouse clicks can be used to place the cursor, set the mark (with a double click), and execute shortcuts. The mouse will work in the X Window System, and on the console when gpm is running.
-o <dir>, --operatingdir=<dir>
Set operating directory. Makes nano set up something similar to a chroot.
-p, --preserve
Preserve the ^Q (XON) and ^S (XOFF) sequences so data being sent to the editor can be can be stopped and started.
-q, --quiet
Do not report errors in the nanorc file and ask them to be acknowledged by pressing Enter at startup.
-r <#cols>, --fill=<#cols>
Wrap lines at column #cols. If this value is 0 or less, wrapping will occur at the width of the screen less #cols, allowing it to vary along with the width of the screen if the screen is resized. The default value is -8.
-s <prog>, --speller=<prog>
Invoke the given program as the spell checker. By default, nano uses the command specified in the SPELL environment variable, or, if SPELL is not set, its own interactive spell checker that requires the spell program to be installed on your system.
-t, --tempfile
Don't ask whether or not to save the current contents of the file when exiting, assume yes. This is most useful when using nano as the composer of a mailer program.
-u, --undo
Enable experimental generic-purpose undo code. By default, the undo and redo shortcuts are Meta-U and Meta-E, respectively.
-v, --view
Don't allow the contents of the file to be altered. Note that this option should NOT be used in place of correct file permissions to implement a read-only file.
-w, --nowrap
Don't wrap long lines at any length. This option overrides any value for -r.


-x, --nohelp
Expert Mode: don't show the Shortcut Lists at the bottom of the screen. This affects the location of the statusbar as well, as in Expert Mode it is located at the very bottom of the editor.
Note: When accessing the help system, Expert Mode is temporarily disabled to display the help system navigation keys.

-z, --suspend
Enable nano's suspend ability using the system's suspend keystroke (usually ^Z).
-$, --softwrap
Enable 'soft wrapping'. nano will attempt to display the entire contents of a line, even if it is longer than the screen width. Since '$' normally refers to a variable in the Unix shell, you should specify this option last when using other options (e.g. 'nano -wS$') or pass it separately (e.g. 'nano -wS -$').
-a, -b, -e, -f, -g, -j
Ignored, for compatibility with Pico.
```
