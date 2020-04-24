# Change Directory(cd)
The `cd` command, also known as `chdir` (change directory), is a command-line shell command used to change the current working directory in various operating systems. It can be used in shell scripts and batch files. 

When used without any argument, `cd` will take you to your home directory:
```shell
$ cd
```

To change to a directory, you can use its absolute or relative path name:
```shell
$ cd <relativePath_or_nativeName>
```

When used with two dot one after other, `cd` will take you to parent directory or in other words directory immediately above the current one
```shell
$ cd ..
```

To change back to the previous working directory, use the dash (-) character as an argument:
```shell
$ cd -
```

If the directory you want to change to has spaces in its name, you should either surround the path with quotes or use the backslash () character to escape the space:
```shell
$ cd dir\ name
```
