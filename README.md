# CISC-3140
Design and Implementation of Large-Scale Web Applications

## Week3 Task3.1
  - Step 0: get the link of databse
    - I used the same file from last week: https://linxinjiang.github.io/CISC-3140/Week2/NewTask2.2/regional-global-daily-latest-4.csv
    - How to get the link? Go to 'Settings' --> GitHub Pages --> Check it out here!


  - Step 1: download a database 
    - creat a '.sh' file
      <pre>
        $ vim downloadFile.sh
      </pre>
    
  - Step 2: create a makefile by using syntax
       - <pre>
         targets : prerequisites\
             recipe
             
          $ vim makefile
         </pre>
       
     - My Code:
     
        <pre>
             # targer is output, downloadFile.sh is what I need for next step
             output: downloadFile.sh
                # run the '.sh' file --> download database
	              sh downloadFile.sh
                # save data to outputfile.txt
                awk '{ print $2 }' regional-global-daily-latest-4.csv  > outputfile.txt

                #sort the data and print out the data to sortOutput.txt
                awk -F "," 'NR>1  {print $2}' /Users/linxinjiang/Desktop/regional-global-daily-latest-4.csv  | sort | uniq > sortOutput.txt
       </pre>
       
       
 ## Week2 Task2.2

- Print out the file

  awk '{print}' [file name]

- Only print the part of the file
awk '{print $2}' [file name]

- sort ratings file
awk -F, '{ print $3, $0 }' [file name]  | sort -nk2
