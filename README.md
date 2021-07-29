# CISC-3140
Design and Implementation of Large-Scale Web Applications

## Week3 Task3.1

  - Run Code:
    - down load inPut file from github [PATH: CISC-3140/Week3/Task3.2/Task3.1/inPut/]
      <pre>
         # Choose where you want to put the file(I want to put it on the Desktop):
	   cd Desktop/
	 # pull into your local
	   git clone https://github.com/LinxinJiang/CISC-3140.git<br>
	   <img width="500" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week3/Task3.2/Task3.1/IMG/gitClone.png"><br>
	  
      </pre>
    - Keep 'makefile' & 'downloadFile.sh' file on desktop<br>  
       - Files path :  [PATH: CISC-3140/Week3/Task3.2/Task3.1/inPut/]<br>
    - cd into where you put the input<br> 
    - enter: make<br>
	<img src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week3/Task3.2/Task3.1/IMG/run.png"><br>

  - Step 0: get the link of databse
    - I used the same file from last week: https://linxinjiang.github.io/CISC-3140/Week2/NewTask2.2/regional-global-daily-latest-4.csv
    - How to get the link? Go to 'Settings' --> GitHub Pages --> Check it out here!<br>
    	<img width="500" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week3/Task3.2/Task3.1/IMG/downLoadFile1.png"><br>
	<img width="500" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week3/Task3.2/Task3.1/IMG/Settings2.png"><br>
	<img width="500" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week3/Task3.2/Task3.1/IMG/GitHub%20Pages3.png"><br>
	<img width="500" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week3/Task3.2/Task3.1/IMG/PageLink4.png"><br>




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
