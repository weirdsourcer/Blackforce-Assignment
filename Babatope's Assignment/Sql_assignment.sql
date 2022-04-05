/*The total number of Users (i.e. count of all users) in the system.*/
Select count(*) as "Total_No_of_User" from User;

/*The total number of Users (i.e. count of all users) in the system.*/
Select count(*) as "Total_No_of_Account_User" from User
Where Department = "Accounting";

/*The total number of Users that have not activated their account*/
Select count(*) as "Total_No_not_Activated" from User
Where Status != "Activated";

/*The total number of Users that have not activated their account*/
Select count(*) as "Age_bracket" from User
Where Age > 18 and Age < 26;

/*All Users that registered for an account last week Thursday*/
Select * from User
Where created_dt = 06-01-2020;

/*All Users that registered for an account between last week Saturday and this week Monday.*/
Select * from User
Where created_dt between 01-01-2020 and 07-01-2020;

/*Query to Activate all pending Users in the system.*/
Update User
set Status = "Activated"
Where created_dt between 01-01-2020 and 07-01-2020;

/*Query to Update the User whose name is Tim to Timothy.*/
Update User
Set Name = "Tim"
Where Name = "Timothy";

/*Total Number of Users in each Department.*/
Select Department, Count(*) as "User Count" from User
group by Department;
