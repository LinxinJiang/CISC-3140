# CISC-3140
Design and Implementation of Large-Scale Web Applications


       
       
 ## Week2 Task2.2

- Print out the file

  awk '{print}' [file name]

- Only print the part of the file
awk '{print $2}' [file name]

- sort ratings file
awk -F, '{ print $3, $0 }' [file name]  | sort -nk2
