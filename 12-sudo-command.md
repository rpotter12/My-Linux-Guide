# Superuser-do(sudo)
A widely used command in the Linux command line, sudo stands for "SuperUser Do". So, if you want any command to be done with administrative or root privileges, you can use the sudo command. For example, if you want to edit a file like viz. alsa-base.conf, which needs root permissions, you can use the command – sudo nano alsa-base.conf. You can enter the root command line using the command “sudo bash”, then type in your user password. You can also use the command “su” to do this, but you need to set a root password before that. For that, you can use the command “sudo passwd”(not misspelled, it is passwd). Then type in the new root password.

## Syntax
```
sudo [-D level] -h | -K | -k | -V

sudo -v [-AknS] [-a auth_type] [-D level] [-g group name|#gid] [-p prompt] [-u user name|#uid]

sudo -l[l] [-AknS] [-a auth_type] [-D level] [-g group name|#gid] [-p prompt] [-U user name] [-u user name|#uid] [command]

sudo [-AbEHnPS] [-a auth_type] [-C fd] [-D level] [-c class|-] [-g group name|#gid] [-p prompt] [-r role] [-t type] [-u user name|#uid] [VAR=value] [-i | -s] [command]

sudoedit [-AnS] [-a auth_type] [-C fd] [-c class|-] [-D level] [-g group name|#gid] [-p prompt] [-u user name|#uid] file ...
```

## Description
```
-A
Normally, if sudo requires a password, it will read it from the user's terminal. If the -A (askpass) option is specified, a (possibly graphical) helper program is executed to read the user's password and output the password to the standard output. If the SUDO_ASKPASS environment variable is set, it specifies the path to the helper program. Otherwise, if /etc/sudo.conf contains a line specifying the askpass program, that value will be used. For example:

    # Path to askpass helper program
    Path askpass /usr/X11R6/bin/ssh-askpass
If no askpass program is available, sudo will exit with an error.

-a type
The -a (authentication type) option causes sudo to use the specified authentication type when validating the user, as allowed by /etc/login.conf. The system administrator may specify a list of sudo-specific authentication methods by adding an "auth-sudo" entry in /etc/login.conf. This option is only available on systems that support BSD authentication.

-b
The -b (background) option tells sudo to run the given command in the background. Note that if you use the -b option you cannot use shell job control to manipulate the process. Most interactive commands will fail to work properly in background mode.

-C fd
Normally, sudo will close all open file descriptors other than standard input, standard output and standard error. The -C (close from) option allows the user to specify a starting point above the standard error (file descriptor three). Values less than three are not permitted. The security policy may restrict the user's ability to use the -C option. The sudoers policy only permits use of the -C option when the administrator has enabled the closefrom_override option.

-c class
The -c (class) option causes sudo to run the specified command with resources limited by the specified login class. The class argument can be either a class name as defined in /etc/login.conf, or a single '-' character. Specifying a class of - indicates that the command should be run restricted by the default login capabilities for the user the command is run as. If the class argument specifies an existing user class, the command must be run as root, or the sudo command must be run from a shell that is already root. This option is only available on systems with BSD login classes.

-D level
Enable debugging of sudo plugins and sudo itself. The level may be a value from 1 through 9.

-E
The -E (preserve environment) option indicates to the security policy that the user wishes to preserve their existing environment variables. The security policy may return an error if the -E option is specified and the user does not have permission to preserve the environment.

-e
The -e (edit) option indicates that, instead of running a command, the user wishes to edit one or more files. In lieu of a command, the string "sudoedit" is used when consulting the security policy. If the user is authorized by the policy, the following steps are taken:

Temporary copies are made of the files to be edited with the owner set to the invoking user.

The editor specified by the policy is run to edit the temporary files. The sudoers policy uses the SUDO_EDITOR, VISUAL and EDITOR environment variables (in that order). If none of SUDO_EDITOR, VISUAL or EDITOR are set, the first program listed in the editor sudoers(5) option is used.

If they have been modified, the temporary files are copied back to their original location and the temporary versions are removed.

If the specified file does not exist, it will be created. Note that unlike most commands run by sudo, the editor is run with the invoking user's environment unmodified. If, for some reason, sudo is unable to update a file with its edited version, the user will receive a warning and the edited copy will remain in a temporary file.

-g group
Normally, sudo runs a command with the primary group set to the one specified by the password database for the user the command is being run as (by default, root). The -g (group) option causes sudo to run the command with the primary group set to group instead. To specify a gid instead of a group name, use #gid. When running commands as a gid, many shells require that the '#' be escaped with a backslash ('\'). If no -u option is specified, the command will be run as the invoking user (not root). In either case, the primary group will be set to group.

-H
The -H (HOME) option requests that the security policy set the HOME environment variable to the home directory of the target user (root by default) as specified by the password database. Depending on the policy, this may be the default behavior.

-h
The -h (help) option causes sudo to print a short help message to the standard output and exit.

-i [command]
The -i (simulate initial login) option runs the shell specified by the password database entry of the target user as a login shell. This means that login-specific resource files such as .profile or .login will be read by the shell. If a command is specified, it is passed to the shell for execution via the shell's -c option. If no command is specified, an interactive shell is executed. sudo attempts to change to that user's home directory before running the shell. The security policy shall initialize the environment to a minimal set of variables, similar to what is present when a user logs in. The Command Environment section in the sudoers(5) manual documents how the -i option affects the environment in which a command is run when the sudoers policy is in use.

-K
The -K (sure kill) option is like -k except that it removes the user's cached credentials entirely and may not be used in conjunction with a command or other option. This option does not require a password. Not all security policies support credential caching.

-k [command]
When used alone, the -k (kill) option to sudo invalidates the user's cached credentials. The next time sudo is run a password will be required. This option does not require a password and was added to allow a user to revoke sudo permissions from a .logout file. Not all security policies support credential caching.

When used in conjunction with a command or an option that may require a password, the -k option will cause sudo to ignore the user's cached credentials. As a result, sudo will prompt for a password (if one is required by the security policy) and will not update the user's cached credentials.

-l[l] [command]
If no command is specified, the -l (list) option will list the allowed (and forbidden) commands for the invoking user (or the user specified by the -U option) on the current host. If a command is specified and is permitted by the security policy, the fully-qualified path to the command is displayed along with any command line arguments. If command is specified but not allowed, sudo will exit with a status value of 1. If the -l option is specified with an l argument (i.e. -ll), or if -l is specified multiple times, a longer list format is used.

-n
The -n (non-interactive) option prevents sudo from prompting the user for a password. If a password is required for the command to run, sudo will display an error messages and exit.

-P
The -P (preserve group vector) option causes sudo to preserve the invoking user's group vector unaltered. By default, the sudoers policy will initialize the group vector to the list of groups the target user is in. The real and effective group IDs, however, are still set to match the target user.

-p prompt
The -p (prompt) option allows you to override the default password prompt and use a custom one. The following percent (`%') escapes are supported by the sudoers policy:

%H
expanded to the host name including the domain name (on if the machine's host name is fully qualified or the fqdn option is set in sudoers(5))

%h
expanded to the local host name without the domain name

%p
expanded to the name of the user whose password is being requested (respects the rootpw, targetpw and runaspw flags in sudoers(5))

%U
expanded to the login name of the user the command will be run as (defaults to root unless the -u option is also specified)

%u
expanded to the invoking user's login name

%%
two consecutive % characters are collapsed into a single % character

The prompt specified by the -p option will override the system password prompt on systems that support PAM unless the passprompt_override flag is disabled in sudoers.

-r role
The -r (role) option causes the new (SELinux) security context to have the role specified by role.

-S
The -S (stdin) option causes sudo to read the password from the standard input instead of the terminal device. The password must be followed by a newline character.

-s [command]
The -s (shell) option runs the shell specified by the SHELL environment variable if it is set or the shell as specified in the password database. If a command is specified, it is passed to the shell for execution via the shell's -c option. If no command is specified, an interactive shell is executed.

-t type
The -t (type) option causes the new (SELinux) security context to have the type specified by type. If no type is specified, the default type is derived from the specified role.

-U user
The -U (other user) option is used in conjunction with the -l option to specify the user whose privileges should be listed. The security policy may restrict listing other users' privileges. The sudoers policy only allows root or a user with the ALL privilege on the current host to use this option.

-u user
The -u (user) option causes sudo to run the specified command as a user other than root. To specify a uid instead of a user name, use #uid. When running commands as a uid, many shells require that the '#' be escaped with a backslash ('\'). Security policies may restrict uids to those listed in the password database. The sudoers policy allows uids that are not in the password database as long as the targetpw option is not set. Other security policies may not support this.

-V
The -V (version) option causes sudo to print its version string and the version string of the security policy plugin and any I/O plugins. If the invoking user is already root the -V option will display the arguments passed to configure when sudo was built and plugins may display more verbose information such as default options.

-v
When given the -v (validate) option, sudo will update the user's cached credentials, authenticating the user's password if necessary. For the sudoers plugin, this extends the sudo timeout for another 5 minutes (or whatever the timeout is set to in sudoers) but does not run a command. Not all security policies support cached credentials.

--
The -- option indicates that sudo should stop processing command line arguments.
```
