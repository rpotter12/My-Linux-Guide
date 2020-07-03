# gzip
Gzip helps to compress a file, replaces it with one having a `.gz` extension.

## Syntax
```
       gzip [ -acdfhlLnNrtvV19 ] [-S suffix] [ name ...  ]
       gunzip [ -acfhlLnNrtvV ] [-S suffix] [ name ...  ]
       zcat [ -fhLV ] [ name ...  ]
```

## Description
```
       -a --ascii
              Ascii text mode: convert end-of-lines using  local  conventions.
              This  option  is  supported  only  on some non-Unix systems. For
              MSDOS, CR LF is converted to LF when compressing, and LF is con‐
              verted to CR LF when decompressing.

       -c --stdout --to-stdout
              Write  output on standard output; keep original files unchanged.
              If there are several input  files,  the  output  consists  of  a
              sequence  of  independently compressed members. To obtain better
              compression, concatenate  all  input  files  before  compressing
              them.

       -d --decompress --uncompress
              Decompress.

       -f --force
              Force compression or decompression even if the file has multiple
              links or the corresponding file already exists, or if  the  com‐
              pressed data is read from or written to a terminal. If the input
              data is not in a format recognized by gzip, and  if  the  option
              --stdout  is  also  given, copy the input data without change to
              the standard output: let zcat behave  as  cat.   If  -f  is  not
              given,  and  when not running in the background, gzip prompts to
              verify whether an existing file should be overwritten.

       -h --help
              Display a help screen and quit.

       -l --list
              For each compressed file, list the following fields:

                  compressed size: size of the compressed file
                  uncompressed size: size of the uncompressed file
                  ratio: compression ratio (0.0% if unknown)
                  uncompressed_name: name of the uncompressed file

              The uncompressed size is given as -1 for files not in gzip  for‐
              mat,  such  as compressed .Z files. To get the uncompressed size
              for such a file, you can use:

                  zcat file.Z | wc -c

              In combination with the --verbose option, the  following  fields
              are also displayed:

                  method: compression method
                  crc: the 32-bit CRC of the uncompressed data
                  date & time: time stamp for the uncompressed file

              The  compression  methods  currently supported are deflate, com‐
              press, lzh (SCO compress -H) and pack.   The  crc  is  given  as
              ffffffff for a file not in gzip format.

              With  --name,  the  uncompressed name,  date and time  are those
              stored within the compress file if present.

              With --verbose, the size totals and compression  ratio  for  all
              files  is  also  displayed,  unless some sizes are unknown. With
              --quiet, the title and totals lines are not displayed.

       -L --license
              Display the gzip license and quit.

       -n --no-name
              When compressing, do not save the original file  name  and  time
              stamp by default. (The original name is always saved if the name
              had to be truncated.) When decompressing,  do  not  restore  the
              original  file name if present (remove only the gzip suffix from
              the compressed file name) and do not restore the  original  time
              stamp if present (copy it from the compressed file). This option
              is the default when decompressing.

       -N --name
              When compressing, always save the original file  name  and  time
              stamp;  this  is  the  default.  When decompressing, restore the
              original file name and time stamp if  present.  This  option  is
              useful on systems which have a limit on file name length or when
              the time stamp has been lost after a file transfer.

       -q --quiet
              Suppress all warnings.

       -r --recursive
              Travel the directory structure recursively. If any of  the  file
              names  specified  on the command line are directories, gzip will
              descend into the directory and compress all the files  it  finds
              there (or decompress them in the case of gunzip ).

       --rsyncable
              While  compressing, synchronize the output occasionally based on
              the input.  This increases size by  less  than  1  percent  most
              cases,  but  means that the rsync(1) program can much more effi‐
              ciently synchronize files compressed  with  this  flag.   gunzip
              cannot  tell  the  difference  between a compressed file created
              with this option, and one created without it.

       -S .suf --suffix .suf
              Use suffix .suf instead of .gz. Any suffix  can  be  given,  but
              suffixes other than .z and .gz should be avoided to avoid confu‐
              sion when files are transferred to other systems.  A null suffix
              forces  gunzip  to  try decompression on all given files regard‐
              less of suffix, as in:

                  gunzip -S "" *       (*.* for MSDOS)

              Previous versions of gzip used the .z suffix. This  was  changed
              to avoid a conflict with pack(1).

       -t --test
              Test. Check the compressed file integrity.

       -v --verbose
              Verbose. Display the name and percentage reduction for each file
              compressed or decompressed.

       -V --version
              Version. Display the version number and compilation options then
              quit.

       -# --fast --best
              Regulate  the  speed of compression using the specified digit #,
              where -1 or --fast  indicates  the  fastest  compression  method
              (less  compression)  and -9 or --best indicates the slowest com‐
              pression method (best  compression).   The  default  compression
              level is -6 (that is, biased towards high compression at expense
              of speed).
```
