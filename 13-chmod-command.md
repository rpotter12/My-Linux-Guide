# Change mod(chmod)
Use chmod to make a file executable and to change the permissions granted to it in Linux. Imagine you have a python code named numbers.py in your computer. You'll need to run “python numbers.py” every time you need to run it. Instead of that, when you make it executable, you'll just need to run “numbers.py” in the terminal to run the file. To make a file executable, you can use the command “chmod +x numbers.py” in this case. You can use “chmod 755 numbers.py” to give it root permissions or “sudo chmod +x numbers.py” for root executable. Here is some more information about the chmod command.

## Syntax
```
chmod [OPTION]... MODE[,MODE]... FILE...
chmod [OPTION]... OCTAL-MODE FILE...
chmod [OPTION]... --reference=RFILE FILE...
```

## Description
Change the mode of each FILE to MODE.
```
-c, --changes
        like verbose but report only when a change is made
--no-preserve-root
        do not treat '/' specially (the default)
--preserve-root
        fail to operate recursively on '/'
-f, --silent, --quiet
        suppress most error messages
-v, --verbose
        output a diagnostic for every file processed
--reference=RFILE
        use RFILE's mode instead of MODE values
-R, --recursive
        change files and directories recursively
--help
        display this help and exit
--version
        output version information and exit
```
