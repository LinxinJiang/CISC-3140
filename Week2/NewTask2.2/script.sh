# save data to outputfile.txt
awk '{ print $2 }' regional-global-daily-latest-4.csv  > outputfile.txt

#sort the data and print out the data to sortOutput.txt
awk -F "," 'NR>1  {print $2}' /Users/linxinjiang/Desktop/regional-global-daily-latest-4.csv  | sort | uniq > sortOutput.txt
