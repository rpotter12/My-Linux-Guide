# Move(mv)
Use the mv command to move files through the command line. We can also use the mv command to rename a file. For example, if we want to rename the file “text” to “new”, we can use “mv text new”. It takes the two arguments, just like the cp command.

## SYNTAX
    `mv [options]... Source Dest`

    `mv [options]... Source... Directory`


If the last argument names an existing directory, 'mv' moves each other given file into a file with the same name in that directory. Otherwise, if only two files are given, it renames the first as the second. It is an error if the last argument is not a directory and more than two files are given.

## OPTIONS  
```
-b
--backup
     Make a backup of each file that would otherwise be overwritten or
     removed.

-f
--force
     Remove existing destination files and never prompt the user.

-i
--interactive
     Prompt whether to overwrite each existing destination file,
     regardless of its permissions.  If the response does not begin
     with 'y' or 'Y', the file is skipped.

-S SUFFIX
--suffix=SUFFIX
     Append SUFFIX to each backup file made with '-b'.
     The backup suffix is ~, unless set with SIMPLE_BACKUP_SUFFIX.

-u
--update
     Do not move a nondirectory that has an existing destination with
     the same or newer modification time.

-v
--verbose
     Print the name of each file before moving it.

-V METHOD
--version-control=METHOD'
     Change the type of backups made with '-b'. METHOD can be:
     
       t, numbered     make numbered backups
       nil, existing   numbered if numbered backups exist, simple otherwise
       never, simple   always make simple backups

 --help                   display help and exit
 --version                output version information and exit
The key combination Ctrl+w (cut last word followed by Ctrl-y, Ctrl-y (Paste twice) can be useful when writing mv commands, to quickly create two copies of the path, you can then just edit the destination to generate the new name.
```

## Examples

Rename the file apple as orange.doc:
`mv apple orange.doc`

Move orange.doc to the Documents folder:
`mv orange.doc ~/Documents/orange.doc`

Rename a bunch of .txt file extensions to *.htm
`for f in *.txt; do mv ./"$f" "${f%txt}htm"; done`

Rename files that end with 'copy.txt' to just .txt
this demonstrates bash shell parameter expansion `${parameter/pattern/string}`

for f in *copy.html; do mv "$f" "${f/copy.txt/.txt}";done`

'mv' can move only regular files across filesystems.

If a destination file exists but is normally unwritable, standard input is a terminal, and the '-f' or '--force' option is not given, 'mv' prompts the user for whether to replace the file. (You might own the file, or have write permission on its directory.) If the response does not begin with 'y' or 'Y', the file is skipped.
