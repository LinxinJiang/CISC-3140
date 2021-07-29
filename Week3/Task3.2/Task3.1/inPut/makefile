output: downloadFile.sh
	sh downloadFile.sh
	awk '{ print $2 }' regional-global-daily-latest-4.csv  > outputfile.txt
	awk -F "," 'NR>1  {print $2}' /Users/linxinjiang/Desktop/regional-global-daily-latest-4.csv  | sort | uniq > sortOutput.txt


