# ComputerStore_JS
The Komputer Store is developed using "vanilla" Javascript. 

## Description
This is a simple project where you can work to earn money, transfer the amount to the bank and buy yourself a computer.
This page is divided into four sections. 
* **The Bank Area** - able to get a loan, and pay your loan back. 
* **The Work Area** - able to work to earn money and also bank the amount you have earned to the bank
* **The Laptops Area** - here you can browse through the different computer fetched from heroku and also retrieve the unique specs
* **The Larger Laptop Area** - here you are able to the view an image of the computer, with some description and price. 
You are also able to buy this computer, if you have enough money in your bank account.

### The Bank
As mentioned, you are able to get yourself a loan and pay back the loan you have gotten. Here are some other rules:
* You cannot get more than double of your bank balance
* You cannot get more than one loan before repaying the last
* You cannot have two loans at once.

The Pay Loan button shows up after you get a loan, together with the amount left for you loan. 

### The Work
You are able to work to earn money. Each time the "work" button is clicked, 100 kr will be incremented. Finally you can press the "Bank" button to transfer
the salary to your bank. If you have an outstanding loan, 10% of your salary must first be deducted to the outstanding loan. The balance after may be transferred.

### The Laptops Area
Browse through the different computer. This data is fetched via a RESTful API, heroku. The url is: https://noroff-komputer-store-api.herokuapp.com/computers. 
All the computers and theirs specs are fetched from here. You can select one
computer an it's features will show. 

### The Larger Laptop Area
Here will the selected laptop from the previous section show. An image, a small description, and price. A "Buy now" button has also been implemented, to allow one to buy 
a computer. This can only be bought if there is enough money in the bank. 

## Tools
* Visual Studio Code
* Live Server

## Developer
Ammar Ahmed
