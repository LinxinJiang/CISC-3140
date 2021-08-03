# Using SQLite
  - Using MacOS
  - Install Mac Ports Link: https://www.macports.org/install.php
  - Create Database : sqlite3 animal.db
  - Create Table: create table animaldata ( ID integer primary key, Species text, Name text, Age text, Gender text, Weight text, Location
text , IntakeDate text);
  - Insert: 
    - insert into animaldata (ID, Name) values (1, 'Max');
    - insert into animaldata (Name) values ('Layla');
  - View Table: select * from animaldata;
  - Output: .output ./Desktop/aniamSQLite.sql

# Before you start (MySQL Workbench):
  - MySQL Workbench Link: https://www.mysql.com/cn/products/workbench/<br>
    ## Install MySQL Workbench
    - <img width="250" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.1/img/Download1.png">
    - <img width="250" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.1/img/Download2.png">
    - <img width="250" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.1/img/Download3.png">
    - <img width="250" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.1/img/Download4.png">
    ## Make New Connection
    - <img width="300" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.1/img/Connection.png">

# Steps
## Creating database and table(s)

   <pre>
        Databse: 
            CREATE DATABASE [name];
            
        - <img width="300" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.1/img/Step1.png">
            
        Tbale: 
            CREATE TABLE animalTable(
                Id int primary key, 
                Species varchar(10),
                Name varchar(30),
                Age varchar(20),
                Gender varchar(1),
                Weight varchar(10),
                Location varchar(20),
                IntakeDate datetime
            );
        
          - <img width="300" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.1/img/Step2.png">
        View table: 
           SELECT * FROM animalTable;
          - <img width="300" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.1/img/Step3.png">
   </pre>
   
   
## Inserting records : Type data by yourself or parpre a cvs file   
 <pre>
      INSERT INTO aniamTable (ID, Species, Name, Age, Gender, Weight, Location, Intake Date) 
                      VALUES ('1', 'Cat', 'LL', 'F', '8.0 lbs', 'In Foster', 2021-02-17);
  </pre>
  - <img width="300" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.1/img/Step4.png">
  - <img width="300" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.1/img/Step5.png">
  - <img width="300" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.1/img/Step6.png">
  - <img width="300" src="https://github.com/LinxinJiang/CISC-3140/blob/main/Week4/Task4.1/img/Step7.png">
   
## Deleting records:
  <pre>
    DELETE FROM animalTable WHERE ID=29;
  </pre>
  
## Updating records
  <pre>
    UPDATE animalTable SET Name = 'Layla' WHERE ID = 1;
  </pre>
 
## Dropping table(s) and database
  <pre>
    Dropping table: DROP TABLE animalTable;
    Dropping database: DROP DATABASE AnimalDatabase;
  </pre>
 
  
