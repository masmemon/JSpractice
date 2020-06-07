// Chapter # 1

//2
// alert("Error! Please enter a valid password");

//3
// alert("Welcome to JS Land...\nHappy Coding!");

//4
// alert("Welcome to JS Land...");
// alert("Happy Coding!");

//5
// console.log("Hello... I can run JS through my web browser's console");


// Chapter # 2

// var username = "Jhone";
// var myName = "Doe";
// var fullName = username+myName;
// alert("Hello World");
// alert(fullName);
// alert("15 years old");
// alert("Certified Mobile Application Development");

// var pizza = " PIZZA\n PIZZ\n PIZ\n PI\n P";
// alert(pizza);


// var email="My email address is ";
// var address="example@example.com";
// alert(email+address);

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);


// document.write("Yah! I can write HTML content through JavaScript");

// var design = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬";
// alert(design);


// Chapter # 3

// var age = 15;
// alert("I am " + age + " years old");

// var visit = 14;
// alert("You have visited " + visit + " times");

// var birthyear;
// birthyear = 1994;
// document.write("My birth year is " + birthyear);


// var name = "John Doe";
// var title = " T-shirt(s)";
// var quantity = 5;
// document.write(name+" Ordered "+ quantity+title+" on XYZ Clothing store");


// Chapter # 4

// var a = "numbers";
// var b = "$"
// var c = "_"

// document.write("Rules for naming JS variables"+"<br> <br>");
// document.write("Variable names can only contain " + a+ ", " + b+ " and "+c +". For example $my_1stVariable"+"<br>");
// document.write("Variables must begin with a letter, " + b+ " or " + c+ ". For example $name, _name or name"+"<br>");
// document.write("Variable names are case sensitive"+"<br>");
// document.write("Variable names should not be JS keywords."+"<br>");

// Chapter # 5

// var num1 = 3;
// var num2 = 5;
// document.write("Sum of "+ num1 +" and "+ num2+ " is "+ (num1+num2)+"<br>  ");
// document.write("Subtraction of "+ num1 +" and "+ num2+ " is "+ (num1-num2)+"<br> ");
// document.write("Multiplication of "+ num1 +" and "+ num2+ " is "+ (num1*num2)+"<br> ");
// document.write("Division of "+ num1 +" and "+ num2+ " is "+ (num1/num2)+"<br> ");
// document.write("Mod of "+ num2 +" and "+ num1+ " is "+ (num2%num1)+"<br> ");

// var a;
// document.write("Value after variable declaration is: "+a + "<br>");
// a = 5;
// document.write("Initial value is: "+a + "<br>");
// document.write("Value after increement: "+ (++a)+ "<br> ");
// b = a + 7;
// document.write("Value after addition: "+ (b)+ "<br>");
// document.write("Value after decreement: "+ (--b)+ "<br>");
// document.write("The reminder is: "+ (b%3)+ "<br>");


// var cost = 600;
// document.write("The total cost of buying 5 tickets to a movie is "+ (cost*5)+ "PKR");

// var num = 4;
// document.write("Table of "+num+"<br> <br>");    
// for(i=1; i<=10; i++){
//     document.write(num+"x"+i+"="+(num*i) + "<br>"); };


//6. The Temperature Converter:

// var celsius = 25;
// var far = 70;
// document.write(celsius+"^C is " + ((celsius*9/5)+32) +"^F <br>");
// document.write(far+"^F is " + ((far-32)*5/9) +"^C");


//7. Write a program to implement checkout process

// var price1 = 650;
// var qty1 = 3;
// var price2 = 100;
// var qty2 = 7;
// var ship = 100;
// document.write("Price of item 1 is "+price1+"<br>");
// document.write("Quantity of item 1 is "+qty1+"<br>");
// document.write("Price of item 2 is "+price2+"<br>");
// document.write("Quantity of item 2 is "+qty2+"<br>");
// document.write("Shipping charges "+ship+"<br> <br>");
// document.write("Total cost of your order is "+ (qty1*price1+qty2*price2+ship));

//8. Mark Sheet

// var total = 980;
// var obtain = 804;
// document.write("Total marks "+total+"<br>");
// document.write("Obtained marks "+obtain+"<br>");
// document.write("Percentage "+ (obtain/total*100)+"%");

// document.write("Total currency in PKR: 1748");


// var num4=5;
// document.write((num4+5)*10/2);


//age

// var currentyear = 2020;
// var birth = 1994;
// var age1 = currentyear-birth;
// var age2 = currentyear-birth-1;
// document.write("Current Year: " +currentyear+"<br>");
// document.write("Birth Year: " +birth+"<br>");
// document.write("Your age may be this: " +age1+" or this "+age2);


// var radius = 20;
// var circum = 2 * 3.142 * 20;
// document.write("Radius of a circle: " +radius+"<br>");
// document.write("The circumference is: " +circum+"<br>");
// document.write("The area is: 1256.8");


// document.write("Favourite snake: chocolate chip"+ "<br>");
// document.write("Current age: 15"+ "<br>");
// document.write("Est max age: 65"+ "<br>");
// document.write("Amount of snaks per day: 3"+ "<br>");
// document.write("You will need 150 chocolate chip to last you until the ripe old age of 65");



//Chapter 6 to 9

// var b=5;
// var c=5;
// var a=c+b;
// document.write("Result: <br> The value of a is: "+ a +" <br>");
// document.write("-------------------------------<br><br>")
// document.write("The value of ++a is: "+ ++a +"<br>");
// document.write("Now the value of a is: "+ a +"<br> <br>");
// document.write("The value of a++ is: "+ a++ +"<br>");
// document.write("Now the value of a is: "+ a +"<br><br>");
// document.write("The value of --a is: "+ --a +"<br>");
// document.write("Now the value of a is: "+ a +"<br><br>");
// document.write("The value of a-- is: "+ a-- +"<br>");
// document.write("Now the value of a is: "+ a +"<br>");


// var a = 2;
// var b = 1;
// document.write("a is: "+ a+ "<br> b is: "+ b+"<br>");
// var result = --a - --b + ++b + b--;
// document.write("result is "+result);

// var greet = prompt("Please input your name");
// alert("Welcome "+greet);


// var num = prompt("Please enter number");
// if(num>0){
// document.write("Table of "+num+"<br> <br>");    
// for(i=1; i<=10; i++){
//     document.write(num+"x"+i+"="+(num*i) + "<br>"); };
// }
// else{
//     document.write("Table of 5 <br> <br>");    
// for(i=1; i<=10; i++){
//     document.write(5+"x"+i+"="+(5*i) + "<br>"); };
// }


// Detailed Marksheet

// var sub1= prompt("Please enter your first subject"); 
// var sub2= prompt("Please enter your 2nd subject");
// var sub3= prompt("Please enter your 3rd subject");
// var markssub1= +prompt("Please enter your marks of first subject");
// var markssub2= +prompt("Please enter your marks of 2nd subject");
// var markssub3= +prompt("Please enter your marks of 3rd subject");
// var totalmarks = 100;

// function myFunction() {
//     var table = document.getElementById("myTable");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     cell1.innerHTML = "Subject";
//     cell2.innerHTML = "Total Marks";
//     cell3.innerHTML = "Marks Obtained";
//     cell4.innerHTML = "Percentage";

//     var row1 = table.insertRow(1);
//     var cell1 = row1.insertCell(0);
//     var cell2 = row1.insertCell(1);
//     var cell3 = row1.insertCell(2);
//     var cell4 = row1.insertCell(3);
//     cell1.innerHTML = sub1;
//     cell2.innerHTML = totalmarks;
//     cell3.innerHTML = markssub1;
//     cell4.innerHTML = markssub1/totalmarks*100+"%";
    
//     var row2 = table.insertRow(2);
//     var cell1 = row2.insertCell(0);
//     var cell2 = row2.insertCell(1);
//     var cell3 = row2.insertCell(2);
//     var cell4 = row2.insertCell(3);
//     cell1.innerHTML = sub2;
//     cell2.innerHTML = totalmarks;
//     cell3.innerHTML = markssub2;
//     cell4.innerHTML = markssub2/totalmarks*100+"%";

//     var row3 = table.insertRow(3);
//     var cell1 = row3.insertCell(0);
//     var cell2 = row3.insertCell(1);
//     var cell3 = row3.insertCell(2);
//     var cell4 = row3.insertCell(3);
//     cell1.innerHTML = sub3;
//     cell2.innerHTML = totalmarks;
//     cell3.innerHTML = markssub3;
//     cell4.innerHTML = markssub3/totalmarks*100+"%";

//     var row4 = table.insertRow(4);
//     var cell1 = row4.insertCell(0);
//     var cell2 = row4.insertCell(1);
//     var cell3 = row4.insertCell(2);
//     var cell4 = row4.insertCell(3);
//     cell1.innerHTML = "Total";
//     cell2.innerHTML = totalmarks+totalmarks+totalmarks;
//     cell3.innerHTML = markssub1+markssub2+markssub3;
//     cell4.innerHTML = cell3.innerHTML/cell2.innerHTML*100+"%";
//   }



// Chapter 9 to 11

// var city = prompt("Enter your city");
// if(city == "karachi" || city == "Karachi"){
//     alert("Welcome to city of lights");
// }
// else{
//     alert("Welcome");
// }

// var gender = prompt("Enter your gender");
// if(gender == "male" || gender == "Male"){
//     alert("Good Morning Sir.");
// }
// else{
//     alert("Good Morning Maam.");
// }


// function mytrafficsignal() {
//     var table = document.getElementById("trafficsignal");
//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     cell1.innerHTML = "Signal Color";
//     cell2.innerHTML = "  ";
//     cell3.innerHTML = "Message";

//     var row1 = table.insertRow(1);
//     var cell1 = row1.insertCell(0);
//     var cell2 = row1.insertCell(1);
//     var cell3 = row1.insertCell(2);
//     cell1.innerHTML = "Red";
//     cell2.innerHTML = "  ";
//     cell3.innerHTML = "Must Stop";

//     var row2 = table.insertRow(2);
//     var cell1 = row2.insertCell(0);
//     var cell2 = row2.insertCell(1);
//     var cell3 = row2.insertCell(2);
//     cell1.innerHTML = "Yellow";
//     cell2.innerHTML = "  ";
//     cell3.innerHTML = "Ready to Move";

//     var row3 = table.insertRow(3);
//     var cell1 = row3.insertCell(0);
//     var cell2 = row3.insertCell(1);
//     var cell3 = row3.insertCell(2);
//     cell1.innerHTML = "Green";
//     cell2.innerHTML = "  ";
//     cell3.innerHTML = "Move Now";
// }


// var fuel = +prompt("Enter your current fuel level");
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("Good to go.");
// }


// var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }

// var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }

// var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); }
// if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }

// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }

// if (true){ alert("True"); } if (false){ alert("False"); }

// if("car" < "cat"){ alert("car is smaller than cat"); }


// var num5 = prompt("Guess the number");
// if(num5 == 5){
//     alert("Bingo! Correct answer.");
// } else if(num5 == 6 || num5 == 4){
//     alert("Closed enough to the correct answer.");
// } else{
//     alert("Wrong");
// }

// var num6 = prompt("Enter the number");
// if(num6 % 3==0){
//     alert("Number is divisible by 3.");
// } else{
//     alert("Number is NOT divisible by 3.");
// }

// var num7 = prompt("Enter the number");
// if(num7 % 2==0){
//     alert("Number is Even.");
// } else{
//     alert("Number is Odd.");
// }


// var temp = prompt("Enter tempreture");
// if(temp > 40){
//     alert("It is too hot outside.");
// } else if(temp > 30 && temp <= 40){
//     alert("The Weather today is Normal.");
// } else if(temp > 20 && temp <= 30){
//     alert("Today’s Weather is cool.");
// } else if(temp <= 20){
//     alert("OMG! Today’s weather is so Cool.");
// }


// Chapter 12 and 13

// var num7 = prompt("Enter 1st num");
// var num8 = prompt("Enter 2nd num");
// if(num7>num8){
//     alert("1st num is greater than 2nd num");
// } else if(num7==num8){
//     alert("1st num is equals to 2nd num");
// } else{
//     alert("2nd num is greater than 1st num");
// }

// var num9 = prompt("Enter 1st num");
// if(num9>0){
//     alert("Num is positive");
// } else if(num9==0){
//     alert("Num is zero");
// } else{
//     alert("Num is negative");
// }

// var num10 = prompt("Enter character");
// if(num10=="a" || num10=="e" || num10=="i" || num10=="o" || num10=="u"){
//     alert("True");
// } else{
//     alert("False");
// }

// var pass = "aeiou";
// var num11 = prompt("Enter password");
// if(num11===""){
//     alert("Enter your pass please");
// } else if(num11===pass){
//     alert("Correct pass");
// } else{
//     alert("Wrong pass");
// }

// var greeting;
// var hour = 13;
// if (hour < 18){
//     greeting = "Good day";
//     alert(greeting);
// } else {
//     greeting = "Good evening"; 
//     alert(greeting);
// }


// Chapter 14 to 16

// var student1;
// var student2 = [];
// var student = ["Muhammad", "Awais", "Saleem"];
// var number = [1,2,3,4];
// var bolean = ["TRUE","FALSE"]
// var mixed = ["Muhammad", "Awais", 1,2]

// var qualification = ["SSC", "HSC", "BSC", "BS","BCom", "MS","M.Phil","PhD."]
// document.write("Qualification: <br> <br>")
// for(i=0; i<qualification.length; i++){
//     document.write((i+1) +") "+ qualification[i] + "<br>")
// }


// var color = ["Red", "Green", "Blue","Black","Yellow"];
// document.write(color+"<br>");
// var addcolor = prompt("Add your color");
// document.write(addcolor+"<br>");
// color.unshift(addcolor);
// document.write(color+"<br>");
// color.unshift("Purple","Maroon");
// document.write(color+"<br>");
// color.shift(color[0]);
// document.write(color+"<br>");
// color.pop(color);
// document.write(color+"<br>");
// var addcolor1 = prompt("Which color you want to Add?");
// var index = prompt("At which index?");
// color[index] = addcolor1;
// document.write(color+"<br>");
// var removecolor = prompt("Which color you want to remove?");
// var indexremove = prompt("At which index?");
// color.splice(indexremove-1,1);
// document.write(color+"<br>");



// var num = [3,2,5,6,1,9,4,8,7];
// num.sort();
// document.write(num+"<br>");


// var arr = ["This", "is", "my", "cat"];
// arr.join();
// document.write(arr+"<br>");

// Chapter 17 to 20

// var a = [[1,2,3][4,5,6]];
// document.write(a);


