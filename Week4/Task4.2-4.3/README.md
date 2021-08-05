# Task4.2
1.Use a Json server
	- https://github.com/typicode/json-server
	
2.Download node.js
	
3.Install json server<br>
  Create a folder call: jason-server<br>
  Open terminal -> change to git bash
  <pre> 
  - npm init 
  - npm install -g json-server
  </pre>
  
  <img width="800" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.2-4.3/img/WebPage6.png">
  <pre> - npm install --save jason-server</pre>
  Change package.json file, line 7: 
  <pre>"json:server": "json-server --watch db.json"</pre>
  Creare a data file: db.json
  <img width="800" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.2-4.3/img/WebPage7.png">
  Run server
  <pre>npm run json:server</pre>
   <img width="800" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.2-4.3/img/WebPage8.png">
  Go to localhost:3000
  <pre>https://localhost:3000</pre>
  <img width="500" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.2-4.3/img/WebPage9.png">
  Select animal base on the name:
  <pre>http://localhost:3000/animals?Name=Layla</pre>
  animals is the root,
  add ? to set filter
  It means search in the animals, where name is Layla.
  <img width="300" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.2-4.3/img/WebPage10.png">


  
# Task4.3

  ### Web Link: https://linxinjiang.github.io/CISC-3140/Week4/Task4.2-4.3/Explore.html

  #### Tool: HTML, CSS, JavaScript，Google map API
  #### - How to use webpage
  <img width="800" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.2-4.3/img/WebPage1.png">
  <img width="800" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.2-4.3/img/WebPage2.png">
  <img width="800" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.2-4.3/img/WebPage3.png">
  <img width="800" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.2-4.3/img/WebPage4.png">
  
  ### My DataBase:
   I am not sure how to connect API with my code after all the research. Therefore, I used an array to store all my data. 
   Once the user enter a name/ char, the system will show what we have in our database.
   <img width="800" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.2-4.3/img/WebPage5.png">

  ### API
   I implemented the google map.
<div class="joinUs-map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.31559471803!2d-74.26055209683486!3d40.697147757359204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1619323776827!5m2!1sen!2sus" 
				width="700px" height="autos" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
			</div>
      
      
  


