Feature: loginnew test 

 Description: Check login with diff data driven techniques
 
 
 Background: 
	Given user navigate to http://www.gcreddy.com/project1/login.php 
 
 # Data driven With using the data tables 
Scenario: Verify that user is able to login to application successfully with diff data driven methods 

	When user enter emailid and password  
	        |Rahul1993@gmail.com|Admin@123|
	And  user clicks on sign in button 
	Then User is on Home Page 
	When User close the browser
	
	
# Data driven With using the Maps 
Scenario: Verify that user is able to login to application successfully with diff data driven methods 

	When user enter emailid1 and password1 
	        |emailid|Password| 
	        |Rahul1993@gmail.com|Admin@123|
	And  user clicks on sign in button 
	Then User is on Home Page 
	When User close the browser
	
