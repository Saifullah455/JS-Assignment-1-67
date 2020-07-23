//-------Alert-------
//1.
// alert("Asslam O Alikum")
//2.
// alert("Error! Please enter a valid password");
//3.
// alert("Welcome to JS Land...\nHappy Coding!")
//4.
// alert("Welcome to JS Land...")
// alert("Happy Coding!")

//-------Variable for Strings-------
//1.
// var userName;
// var myName = "SAIF ULLAH";
// var message = "HELLO WORLD";
// alert(message)
//2.
// var stdName = "ALI";
// alert(stdName);
// var age = "21 years old";
// alert(age);
// var designation = "CERTIFIED Mobile Application Developer";
// alert(designation)
//3.
// var pyramid = "PIZZA\nPIZZ\nPIZ\nPI\nP"
//4.
// var email = "saifullahanwrar455@gmail.com";
// alert("My email address is " + email)
//5.
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);
//6.
// document.write("Yeh! I can write HTML content through JS");
//7.
// var end = "_________________$$^#^$$_________________ ";
// alert(end)

//-------Variable for Numbers-------
//1.
// var age = 21;
// alert("I am " + age + " years old");
//2.
// var visitors = 31;
// alert("You have visited this site " + visitors + " times");
//3.
// var birthYear = 1998;
// document.write("My birth year is " + birthYear + "<br />");
// document.write("Datatype of my declared variable is number");
//4.
// var visitorsName = "HASSAN";
// var productTitle = "KURTA BAJAMA";
// var quantity = 7;
// document.write(visitorsName + " ordered " + quantity + " " + productTitle + " on daraz.pk");

//-------Variable Name Legal and Illegal-------
//1.
// var _ , r_1, $ali;
// _ = 1;
// r_1 = 2;
// $ali = 3;
// alert(_ + r_1 + $ali);
//2.
// var $water, _lion_, ali123, abidALi, a909b;
// var %water, +lion+, 123ali, abid ali, 2mango2;
//3.
// document.write("<h1>" + "Rules for naming JS variables" + "</h1>");
// document.write("Variable names can only contain letters, numbers, dollar sign, underscore." + "<br />");
// document.write("Variables must begin with a letters, Dollar sign or Underscore" + "<br />");
// document.write("Variable names are case sensitive" + "<br />");
// document.write("Variable names should not be JS Keywords" + "<br />");

//---------Math Expressions---------
//1.
// var a = 2;
// var b = 90;
// var result = a + b;
// document.write("Sum of " + a + " and " + b + " is " + result);
//2.
// var a = 21;
// var b = 9;
// var result = a - b;
// document.write("Difference of " + a + " and " + b + " is " + result);
// var a = 2;
// var b = 90;
// var result = a * b;
// document.write("Product of " + a + " and " + b + " is " + result);
// var a = 200;
// var b = 90;
// var result = a / b;
// document.write("Division of " + a + " and " + b + " is " + result); 
// var a = 90;
// var b = 8;
// var result = a % b;
// document.write("Remainder of " + a + " and " + b + " is " + result);
//3.
// var a;
// document.write("Value after variable declaration is " + a + "<br />");
// a = 101; 
// document.write("Initial Value: " + a + "<br />");
// a++;
// document.write("Value after increment is " + a + "<br />");
// a = a + 7;
// document.write("Value after addition is " + a + "<br />");
// --a;
// document.write("Value after decrement is " + a + "<br />");
// a = a % 7;
// document.write("The remainder is " + a);
//4.
// var ticketPrice = 3030;
// var noOftickets = 7;
// var totalCost = ticketPrice * noOftickets; 
// document.write("Ticket Price for buying " + noOftickets + " tickets to a movie is " + totalCost);
//5.
// var tableNo = 4;
// var multiplier = 1;
// var result;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
// document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
// multiplier++;
//6.
// var tempCel;
// tempCel = 25;
// var tempFar;
// tempFar = (tempCel * 9/5) + 32;
// document.write(tempCel + "oC  = " + tempFar + "oF" + "<br />");
// tempFar = 70;
// tempCel = 5/9 * (tempFar - 32);
// document.write(tempFar + "oF  = " + tempCel + "oC" + "<br />");
//7.
// var priceOfitem1 = 390;
// var priceOfitem2 = 9090;
// var orderedquantityOfitem1 = 23;
// var orderedquantityOfitem2 = 13;
// var shippingCharges = 500;
// document.write("<h1>" + "Shopping Cart" + "</h1>" + "<br />");
// document.write("Price of Item 1 = " + priceOfitem1 + "<br />");
// document.write("Quantity of Item 1 is " + orderedquantityOfitem1 + "<br />");
// document.write("Price of Item 2 = " + priceOfitem2 + "<br />");
// document.write("Quantity of Item 2 is " + orderedquantityOfitem2 + "<br />");
// document.write("Shipping Charges : " + shippingCharges + "<br />" + "<br />" );
// var tot = (orderedquantityOfitem1 * priceOfitem1) + (orderedquantityOfitem2 * priceOfitem2) + shippingCharges;
// document.write("Total Cost of Your Order is " + tot);
//8.
// var totMarks = 600;
// var obtMarks = 480;
// var per = (obtMarks * 100) / totMarks;
// document.write("Total Marks : " + totMarks + "<br />");
// document.write("Obtained Marks : " + obtMarks + "<br />");
// document.write("Percentage : " + per);
//9.
// var dollars = 10;
// var riyals = 25;
// var pkr = (dollars * 104.80) + (riyals * 28);
// document.write("<h1>" + "CURRENCY in PKR" + "</h1>" + "<br />");
// document.write("Total Currency in PKR is " + pkr);
//10.
// var num = 6;
// document.write("Add 5 to " + num + " is " + (num + 5) + "<br />");
// document.write("Multiply 10 by " + num + " is " + (num * 10) + "<br />");
// document.write("Divide " + num + " by 2 is " +  (num / 2) + "<br />");
//11.
// var currentYear = 2020;
// var birthYear = 1998;
// var age = currentYear - birthYear;
// document.write("Current Year : " + currentYear + "<br />" + "Birth Year : " + birthYear + "<br />" + "My age is " + age);
//12.
// document.write("<h1>" + "The GEOMETERIZER" + "</h1>");
// var radius = 20;
// var circum = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;
// document.write("Radius of Circle : " + radius + " m" + "<br />" + "Circumference : " + circum + " m" + "<br />" + "Area of Circle : " + area + " sq.m");
//13.
// document.write("<h1>" + "The Lifetime Supply Calculator" + "</h1>");
// var snack = "Party";
// var curr_age =22;
// var est_age = 65;
// var quanity = 5;
// document.write("Faviourate Snack = " + snack + "<br />");
// document.write("Your Current Age = " + curr_age + "<br />");
// document.write("Estimate Maximum Age = " + est_age + "<br />");
// document.write("Amount of Snacks Per day = " + quanity + "<br />");
// document.write("You will need " + (est_age - curr_age) * quanity + " to last you until the ripe old age of " +  est_age);

//---------Math Expression (Unfamiliar)---------
//1.
// var a = +prompt("Enter a numeric value : ");
// document.write("<h3>" + "Results" + "</h3>");
// document.write("The value of a is : " + a + "<br />");
// document.write("................................." + "<br />" + "<br />");
// ++a;
// document.write("The value of ++a is : " + a + "<br />");
// document.write("Now the value of a is : " + a + "<br />" + "<br />");

// document.write("The value of a++ is : " + a++ + "<br />");
// document.write("Now the value of a is : " + a + "<br />" + "<br />");

// document.write("The value of --a is : " + --a + "<br />");
// document.write("Now the value of a is : " + a + "<br />" + "<br />");

// document.write("The value of a-- is : " + a-- + "<br />");
// document.write("Now the value of a is : " + a + "<br />" + "<br />");

//2.
// var a = 4, b = 1;
// document.write("<h4>" + "STEPS" + "</h4>")
// w = --a;
// document.write("--a is " + w + "<br />");
// x = w - --b;
// document.write("--a - --b is " + x + "<br />")
// y = x + ++b;
// document.write("--a - --b + ++b is " + y + "<br />");
// z = y + b--;
// document.write("--a - --b + ++b + b-- is " + z + "<br />" + "<br />");

// document.write("a = " + a + "<br />");
// document.write("b = " + b + "<br />");
// document.write("--a - --b + ++b + b-- is " + z);

//3.
// var name = prompt("Enter your name: ");
// alert("Hi " + name + " :)");

//4.
// tableNo = +prompt("Enter a Table Number: ");
// var multiplier = 1;
// if (tableNo !== 0){
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(tableNo + " x " + multiplier + " = " + tableNo * multiplier + "<br />");
//     multiplier++;
// }
// else{
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++; + "<br />"
//     document.write(5 + " x " + multiplier + " = " + 5 * multiplier + "<br />");
//     multiplier++;
// }

//4.
// var math = prompt("Enter 1st Subject: ");
// var chem = prompt("Enter 2nd Subject: ");
// var phy = prompt("Enter 3rd Subject: ");
// var math_marks = +prompt("Enter your " + math + " Marks: ");
// var chem_marks = +prompt("Enter your " + chem + " Marks: ");
// var phy_marks = +prompt("Enter your " + phy + " Marks: ");
// var totmarksPersubject = 100;
// var totalObatined = math_marks + chem_marks + phy_marks;
// var percentage = (totalObatined) * 100 / (totmarksPersubject * 3);
// alert("Obatined Marks: " + totalObatined + "\nYour Percentage is: " + percentage + " %");

//------------- USER INPUT & CONDITIONAL STATEMENT --------------
//1.
// var cityName = prompt("Enter your City name: ");
// if (cityName === "Karachi"){
//     alert("Welcome to City of Lights :)")
// }

//2.
// var userGender = prompt("Enter your Gender: ");
// if (userGender == "Male"){
//     alert("Good Morning Sir :)");
// }
// if (userGender == "Female"){
//     alert("Good Morning Ma'am :)")
// }

//3.
// var signalColor = prompt("Enter a Traffic Signal Color: ");
// if (signalColor === "Red"){
//     alert("Must Stop!")
// }
// else if (signalColor === "Yellow"){
//     alert("Ready to move")
// }
// else if (signalColor === "Green"){
//     alert("Move Now :)")
// }

//4.
// var remianingFeul = +prompt("Enter your Remaining Feul: ");
// if (remianingFeul < 0.25){
//     alert("Please refill the feul in your car")
// }

//5.
//a.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//b.
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//c.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//e.
// if (true){
//     alert("True");
//     }
// if (false){
//     alert("False");
//     }
//f.
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
    
//6.
// document.write("<h2>" + "Mark Sheet" + "</h2>");
// var obtMarks = +prompt("Obtained Marks for Three Subjects: ");
// var totMarks = 300;
// var percentage = (obtMarks * 100) / totMarks;
// if (percentage >= 80 && percentage <= 100){
//     document.write("Total Marks: " + totMarks + "<br />");
//     document.write("Marks Obtained: " + obtMarks + "<br />");
//     document.write("Percentage: " + percentage + "%" + "<br />");
//     document.write("Your Grade is A-One" + "<br />");
//     document.write("Remarks: Exellent :)")
// }
// else if (percentage >= 70 && percentage < 80){
//     document.write("Total Marks: " + totMarks + "<br />");
//     document.write("Marks Obtained: " + obtMarks + "<br />");
//     document.write("Percentage: " + percentage + "%" + "<br />");
//     document.write("Your Grade is A" + "<br />");
//     document.write("Remarks: Good :)")
// }
// else if (percentage >= 60 && percentage < 70){
//     document.write("Total Marks: " + totMarks + "<br />");
//     document.write("Marks Obtained: " + obtMarks + "<br />");
//     document.write("Percentage: " + percentage + "%" + "<br />");
//     document.write("Your Grade is B" + "<br />");
//     document.write("Remarks: You Need to Improve :(")
// }
// else if (percentage >= 0 && percentage < 60){
//     document.write("Total Marks: " + totMarks + "<br />");
//     document.write("Marks Obtained: " + obtMarks + "<br />");
//     document.write("Percentage: " + percentage + "%" + "<br />");
//     document.write("Your Grade is F" + "<br />");
//     document.write("Remarks: Sorry :(")
// }
// else{
//     alert("Please enter a correct obatined marks!")
// }

//7.
// var secretNumber = 4;
// var userNumber = +prompt("Guess the Secret Number: ");
// if (userNumber == secretNumber){
//     alert("Bingo! Correct Answer");
// }
// if (userNumber == secretNumber + 1){
//     alert("Close enough to the correct answer")
// }

//8.
// var num = +prompt("Enter a Number: ");
// if (num % 3 == 0){
//     alert("Your Number is divisile by 3")
// }

//9.
// var num = +prompt("Enter a Number: ");
// if (num % 2 == 0){
//     alert("Number is Even")
// }
// else{
//     alert("Number is Odd")
// }

//10.
// var temp = +prompt("Enter a Temperture: ");
// if (temp >= 40 && temp <= 60){
//     alert("It is too hot outside");
// }
// else if (temp >= 30 && temp < 40){
//     alert("Today's Wheather is Normal");
// }
// else if (temp >= 20 && temp < 30){
//     alert("It is Cool today");
// }
// else if (temp >= 10 && temp < 20){
//     alert("OMG! Today’s weather is so Cool");
// }
// else{
//      alert("Incorrect Temperture")
// }

//11.
// var fn = +prompt("First Number: ");
// var sn = +prompt("Second Number: ");
// var operator = prompt("Enter a Operator: ");
// if (operator == "+"){
//     alert("Answer: " + (fn + sn));
// }
// else if (operator == "-"){
//     alert("Answer: " + (fn - sn));
// } 
// else if (operator == "*"){
//     alert("Answer: " + (fn * sn));
// }
// else if (operator == "/"){
//     alert("Answer: " + (fn / sn));
// }
// else if (operator == "%"){
//     alert("Answer: " + (fn % sn));
// }
// else{
//     alert("Invalid Operator")
// }

//--------IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS--------
//1.
// var userChar = prompt("Enter a Char: ");
// if (userChar.charCodeAt(0) >= 62 && userChar.charCodeAt(0) <= 90){
//     alert("The Given Char are in UPPER CASE")
// }
// else if (userChar.charCodeAt(0) >= 97 && userChar.charCodeAt(0) <= 122){
//     alert("The Given Char are in lower case")
// }
// else if(+userChar >= 0 && +userChar <= 9){
//     alert("The Given Char is a Number")
// }
// else{
//     alert("Other Character....")
// }

//2.
// var firstInt = +prompt("Enter 1st Integer: ");
// var SecondInt = +prompt("Enter 2nd Integer: ");
// if (firstInt === SecondInt){
//     alert("The Given Two Integers are EQUAL")
// }
// else if (firstInt > SecondInt){
//     alert(firstInt + " is Greater than " + SecondInt);
// }
// else{
//     alert(SecondInt + " is Greater than " + firstInt);
// }

//3.
// var num = +prompt("Input a Number: ");
// if (num > 0){
//     alert("Your Given Number is POSITIVE");
// }
// else if (num < 0){
//     alert("Your Given Number is neagtive");
// }
// else{
//     alert("Your Number is equals to Zero")
// }

//4.
// var c = prompt("Input an Alphabetic Character: ");
// if (c == "a" || c == "A" || c == "e" || c == "E" || c == "i" || c == "I" || c == "o" || c == "O" || c == "u" || c == "U"){
//     alert("True, This is a Vowel");
// }
// else{
//     alert("False, This is a Consonent");
// }

//5.
// var correctPassword = "admin123";
// var userPassword = prompt("Enter your Password: ");
// if (userPassword === ""){
//     alert("Please enter your password.");
// }
// else if (userPassword === correctPassword){
//     alert("Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect Password");
// }

//6.
// var greeting;
// var hour = 18;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting);
// }
// else{
//     greeting = "Good evening";
//     alert(greeting);
// }

//7.
// var time = +prompt("Enter time in that format; 1900 = 7pm: ");
// if (time >= 0000 && time < 1200){
//     alert("Good Morning");
// }
// else if (time >= 1200 && time < 1700){
//     alert("Good Afternoon");
// }
// else if (time >= 1700 && time < 2100){
//     alert("Good Evening");
// }
// else if (time >= 2100 && time <= 2359){
//     alert("Good Night");
// }
// else{
//     alert("Please enter a Correct time!")
// }

//------------------ Array ----------------------
//1.
// var empty_arr = [];

//2.

//3.
// var string_arr = ['UOK-DCS-UBIT', 'FAST', 'NED', 'UIT', 'HU'];

//4.
// var number_arr = [2, 5, 3, 7, 9, 22, 11, 85, 90];
// console.log(number_arr);

//5.
// var bool_arr = [true, false, false, true, false];
// console.log(bool_arr);

//6.
// var mixed_arr = ['Apple', true, 70.807, "Lamp", 6565];

//7.
// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// document.write("<h2>" + "Qualificattions:  " + "</h2>"); 
// document.write("1) " + qualification[0] + "<br />");
// document.write("2) " + qualification[1] + "<br />");
// document.write("3) " + qualification[2] + "<br />");
// document.write("4) " + qualification[3] + "<br />");
// document.write("5) " + qualification[4] + "<br />");
// document.write("6) " + qualification[5] + "<br />");
// document.write("7) " + qualification[6] + "<br />");
// document.write("8) " + qualification[7] + "<br />");

//8.
// var stdName = ["Shakeeb", "Saif Ullah", "Areeb"];
// var stdScore = [480, 220, 340];
// document.write("Score of " + stdName[0] + " is " + stdScore[0] + ". Percentage: " + (stdScore[0]*100)/500 + "%<br />");
// document.write("Score of " + stdName[1] + " is " + stdScore[1] + ". Percentage: " + (stdScore[1]*100)/500 + "%<br />");
// document.write("Score of " + stdName[2] + " is " + stdScore[2] + ". Percentage: " + (stdScore[2]*100)/500 + "%<br />");

//9.
// var colors_name = ['Red', 'Green', 'Yellow', 'Orange', 'Pink'];
// console.log(colors_name);
//a.
// var addBeginningColor = prompt("Enter a Color to Add at the Beginning: ");
// colors_name.unshift(addBeginningColor);
// console.log(colors_name);
//b.
// var addEndColor = prompt("Enter a Color to Add at the End: ");
// colors_name.push(addEndColor);
// console.log(colors_name);
//c.
// var addBeginningColor_1 = prompt("Enter a first Color to Add at the Beginning: ");
// var addBeginningColor_2 = prompt("Enter a second Color to Add at the Beginning: ");
// colors_name.unshift(addBeginningColor_1, addBeginningColor_2);
// console.log(colors_name);
//d.
// colors_name.shift();
// console.log(colors_name);
//e.
// colors_name.pop();
// console.log(colors_name);
//f.
// var addColorBetween = +prompt("Enter an Index to add Color on that position: ");
// var addColor = prompt("Enter a Color to Add on " + addColorBetween + " Index: ");
// colors_name.splice(addColorBetween, 0, addColor);
// console.log(colors_name);
//g.
// var deleteIndex = +prompt("From what index do you want to delete the color(s): ");
// var noOfdeletion = +prompt("How many Color(s) do you want to delete? ");
// colors_name.splice(deleteIndex, noOfdeletion);
// console.log(colors_name);

//10.
// var stdScore = [90, 66, 51, 68, 99, 78, 80, 83, 55, 50];
// console.log(stdScore);
// console.log(stdScore.sort());

//11.
// var citiesName = ['karachi', 'Lahore', 'Islamabad', 'Faisalabad', 'Multan'];
// document.write("<h4>" + "Cities List: " + "</h4>" + citiesName);
// var selectedCities = citiesName.slice(1,4);
// document.write("<h4>" + "Selected Cities List: " + "</h4>" + selectedCities);

//12.
// var arr = ["This ", "is ", "my ", "Cat"];
// document.write("<b>" + "Array: " + "</b>" + arr + "<br />");
// document.write("<b>" + "String: " + "</b>" + arr.join(" "));

//13.
// var devices = ['Juicer', 'Blender', 'Drill', 'Grander', 'bedder'];
// document.write("<b>" + "Devices: " + "</b>" + devices + "<br />");
// document.write("<b>" + "Out: " + "</b>" + "<br />");
// document.write(devices[0] + "<br />"); 
// document.write(devices[1] + "<br />"); 
// document.write(devices[2] + "<br />"); 
// document.write(devices[3] + "<br />"); 
// document.write(devices[4]); 

//14.
// var devices = ['Juicer', 'Blender', 'Drill', 'Grander', 'bedder'];
// document.write("<b>" + "Devices: " + "</b>" + devices + "<br />");
// document.write("<b>" + "Out: " + "</b>" + "<br />");
// document.write(devices.pop() + "<br />"); 
// document.write(devices + "<br />");
// document.write(devices.pop() + "<br />"); 
// document.write(devices + "<br />");
// document.write(devices.pop() + "<br />"); 
// document.write(devices + "<br />");
// document.write(devices.pop() + "<br />"); 
// document.write(devices + "<br />");
// document.write(devices.pop() + "<br />"); 
// document.write(devices + "<br />");

//15.
// var phoneManufacture = ['Apple', 'Sumsung', 'Motrolla', 'Hawaei', 'OPPO']
// document.write("<select>" + "<option>" + "Select" + "</option>" + "<option>" + phoneManufacture[0] + "</option>" + "<option>" + phoneManufacture[1] + "</option>" + "<option>" + phoneManufacture[2] + "</option>" + "<option>" + phoneManufacture[3] + "</option>" + "<option>" + phoneManufacture[4] + "</option>" + "</select>")

//--------------- Arrays & Loop ------------------
//1.

//2.

//3.
// for (var i = 1; i <= 10; i++){
//     document.write(i + "<br />");
// }

//4.
// var tableNo = +prompt("Enter a Number to show its Multiplication Table: ");
// var len = +prompt("Enter a Length of Multiplication Table: ")
// for (var i = 1; i <= len; i++) {
//     document.write(tableNo + " x " + i + " = " + tableNo*i + "<br />");
// }

//5.
// var fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Stawberry'];
// for (var i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br />");
// }
// document.write("<br />");
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index " + i + " is " + fruits[i] + "<br />");
// }

//6.
//a.
// document.write("<h2>" + "Counting:" + "</h2>");
// for (var i = 1; i < 16; i++) {
//     document.write(i + ", ");
// }
// //b.
// document.write("<h2>" + "Reverse Counting:" + "</h2>");
// for (var i = 10; i > 0; i--) {
//     document.write(i + ", ");
// }
// //c.
// document.write("<h2>" + "Even:" + "</h2>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }
// //d.
// document.write("<h2>" + "Odd:" + "</h2>");
// for (var i = 1; i <= 20; i += 2) {
//     document.write(i + ", ");
// }
// //e.
// document.write("<h2>" + "Series:" + "</h2>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }

//7.
// document.write("<h2>" + "XYZ Bakery" + "</h2>")
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + "<br />");
// }
// var item = prompt("Welcome to XYZ Bakery\nWhat do you want to order Sir/Ma'am?");
// var alarm = false;
// for (var i = 0; i < A.length; i++) {
//     if (item === A[i]) {
//         alarm = true;
//         alert(item + " is available at index " + i + " in our bakery.")
//     }
// }
// if (alarm === false) {
//     alert("We are Sorry. " + item + " is not available in our bakery.")
// }

//8.
// document.write("<h3>" + "Array Items: " + "</h3>");
// var A = [31, 2020, 56, 99, 109, 34, 22, 667];
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + " ");
// }
// document.write("<br />")
// var largest = A[0];
// for (var i = 0; i < A.length; i++) {
//     if (largest < A[i]) {
//         largest = A[i];
//     }
// }
// document.write("Largest no From the Array is " + largest);

//9.
// document.write("<h3>" + "Array Items: " + "</h3>");
// var A = [31, 56, 99, 21, 109, 34, 667];
// for (var i = 0; i < A.length; i++) {
//     document.write(A[i] + " ");
// }
// document.write("<br />")
// var samllest = A[0];
// for (var i = 0; i < A.length; i++) {
//     if (A[i] < samllest) {
//         samllest = A[i];
//     }
// }
// document.write("Smallest no From the Array is " + samllest);

//10.
// for (var i = 0; i <= 100; i += 5) {
//     if (i > 0) {
//         document.write(i + " ");
//     }
// } 

//-------------- String Methods --------------
//1.
// var firstName = prompt("First Name: ");
// var lastName = prompt("Last Name: ");
// var fullName = firstName + " " + lastName;
// alert("Hi " + fullName);

//2.
// var userPhone = prompt("Enter your favourite Phone is: ");
// var strLength = userPhone.length;
// document.write("My Favourite Mobile is: " + userPhone + "<br />");
// document.write("Length of String: " + strLength);

//3.
// var str = "Pakistani";
// document.write("String: " + str + "<br />" + "Index of 'n': " + str.indexOf("n"));

//4.
// var str = "Hello World";
// document.write("String: " + str + "<br />" + "Last Index of 'l': " + str.lastIndexOf("l"));

//5.
// var str = "Pakistani";
// document.write("String: " + str + "<br />" + "Char at Index 3: " + str.charAt(3));

//6.
// var firstName = prompt("First Name: ");
// var lastName = prompt("Last Name: ");
// var fullName = "";
// alert("Hi " + fullName.concat(firstName, " ", lastName));

//7.
// var word = "Hyderabad";
// document.write("City: " + word + "<br />"); 
// document.write("After Replacement: " + word.replace(word.slice(0, 5), "Islam"));

//8.
// var message = "Ali and Sami are best friends. They play cricket and football together. They also take lanuch and dinner together.";
// message = message.replace(/and/g, "&");
// console.log(message);

//9.
// var num = "472";
// document.write("Value: " + num + "<br />");
// document.write("Type: " + typeof num + "<br />");
// num = Number(num)
// document.write("Value: " + num + "<br />");
// document.write("Type: " + typeof num + "<br />");

//10.
// var input = prompt("Enter a Dry Fruit: ");
// document.write("User Input: " + input + "<br />");
// document.write("Upper Case: " + input.toUpperCase() + "<br />");

//11.
// var input = prompt("Enter a Dry Fruit: ");
// document.write("User Input: " + input + "<br />");
// var firstChar = input.slice(0, 1);
// document.write(firstChar.toUpperCase() + input.slice(1).toLowerCase());

//Extra.
//var: Jab Variable Globally initialized karna ho to ya particular instance p bhi kar sakte h.
// {
//     var a = 2;
//     console.log(a);
// }
// console.log(a);

//let: Jab Variable kisi bhi 'Block Scoped' m define karna ho to.
// {
//     let a = 2;
//     console.log(a);
// }
// console.log(a);     //ReferenceError: variable not defined error

//const: Jab kisi vaiable ko constantly initialized karana ho to.
// const a = 3.14;
// console.log(a);
// a = 3.142;
// console.log(a);        //TypeError: Assignment to constant variable

//12.
// var num = 33.56;
// var str = num.toString()
// document.write("Number : " + str + "<br />");
// document.write("Result : " + str.replace(".", ""));

//13.
// var userName = prompt("Enter your Name: ");
// for (var i = 0; i < userName.length; i++) { 
//     if (userName[i].charCodeAt(0) === "@".charCodeAt(0) ||userName[i].charCodeAt(0) ===  ".".charCodeAt(0) ||userName[i].charCodeAt(0) ===  ",".charCodeAt(0) ||userName[i].charCodeAt(0) ===  "!".charCodeAt(0)){
//         alert("Please Enter a Valid Username")
//     }
// }

//14.
// document.write("<h2>" + "XYZ Bakery" + "</h2>")
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// for (var i = 0; i < A.length; i++) {
//     document.write("[" + A[i] + "]" + " " );
// }
// var item = prompt("Welcome to XYZ Bakery\nWhat do you want to order Sir/Ma'am?");
// var alarm = false;
// for (var i = 0; i < A.length; i++) {
//     if (item.toLowerCase() === A[i]) {
//         alarm = true;
//         alert(item + " is available at index " + i + " in our bakery.")
//     }
// }
// if (alarm === false) {
//     alert("We are Sorry. " + item + " is not available in our bakery.")
// }

//15.
//Task:
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var password = prompt("Input your Password: ");
// for (var i = 0; i < password.length; i++){
//     if (((password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) || (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90)) && (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) ){
//         console.log("Case 1 Passed")
//         for (var j = 0; j < 10; j++) {
//             if (password.slice(0, 1) !== i && password.length >= 6){
//                 alert("Login Successfully")
//             }
//             else {
//                 alert("Enter a valid password!")
//             }
//         }
//     }
//     else {
//         alert("Enter a valid password!")
//     }
// }                                                    
//OR
// var pass = prompt("Input your password: ");
// for (var i = 0; i < pass.length; i++) {
//     if ((pass[i].charCodeAt(0) >= 97 && pass[i].charCodeAt(0) <= 122) || (pass[i].charCodeAt(0) >= 65 && pass[i].charCodeAt(0) <= 90)){
//         for (var t = 0; t < 10; t++) {
//             if (pass.slice(0, 1) !== i && pass.length >= 6) {
//                 console.log("Matched");
//                 break;
//             }
//         }
//         break;
//     }
// }                                                      //Incomplete

//16.
// var uni = "University Of Karachi";
// var arr = uni.split("")
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br />");
// }

//17.
// var userInput = prompt("Input Some Thing: ");
// document.write("User Input: " + userInput + "<br />");
// document.write("Last Character of Input: " + userInput.charAt(userInput.length - 1));

//18.
// var text = "The quick brown fox jumps ThE over the lazy dog. The dog waste tHE to much time.";
// var count = 0;
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 3) === "ThE" || text.slice(i, i + 3) === "The" || text.slice(i, i + 3) === "the" || text.slice(i, i + 3) === "THe" ||text.slice(i, i + 3) === "THE" || text.slice(i, i + 3) === "tHE" || text.slice(i, i + 3) === "thE" || text.slice(i, i + 3) === "tHe") {
//         count++;
//     }
// }
// document.write("Text: " + text + "<br />");
// document.write("There are " + count + " occurence(s) of word 'the'.");

//------------------ Math Methods -------------------
//1.
// var positiveInteger = prompt("Enter a Positive Integer decimal number: ");
// if (positiveInteger > 0) {
//     document.write("Number: " + Number(positiveInteger) + "<br />");
//     document.write("Round Off value: " + Math.round(positiveInteger) + "<br />");
//     document.write("Floor value: " + Math.floor(positiveInteger) + "<br />");
//     document.write("Ceil value: " + Math.ceil(positiveInteger) + "<br />");
// }
// else {
//     alert("Please Enter a valid value!")
// }

//2.
// var negativeFloatingNum = prompt("Enter a Negative Floating Point number: ");
// if (negativeFloatingNum < 0) {
//     document.write("Number: " + Number(negativeFloatingNum) + "<br />");
//     document.write("Round Off value: " + Math.round(negativeFloatingNum) + "<br />");
//     document.write("Floor value: " + Math.floor(negativeFloatingNum) + "<br />");
//     document.write("Ceil value: " + Math.ceil(negativeFloatingNum) + "<br />");
// }
// else {
//     alert("Please Enter a valid value!")
// }

//3.
// var num = -768;
// if (num < 0) {
//     var absoluteValue = (num * -1)
//     document.write("The Absolute Value of " + num + " is " + absoluteValue);
// }
// else {
//     document.write("The Absolute Value of " + num + " is " + num);
// }

//4.
// document.write("Random Dice Value: " + Math.ceil(Math.random() * 6));

//5.
// var toss = Math.ceil(Math.random() * 2);
// if (toss === 1){
//     document.write(toss + " : random coin value : Tails");
// }
// else {
//     document.write(toss + " : random coin value : Heads");
// }

//6.
// document.write("Random Number between 1 and 100: " + Math.ceil(Math.random() * 100));

//7.
// var weight = prompt("Enter your weight in kilograms: ");
// var num = 0;
// for (var i = 0; i < weight.length; i++) {
//     if (weight.slice(i, i + 1) === "k" || weight.slice(i, i + 1) === "K") {
//         num = weight.slice(0, i);
//         document.write("The Weight of User is " + Number(num) + " Kilograms");
//         break;
//     }
// }
// if (weight > 0) {
//     document.write("The Weight of User is " + Number(weight) + " Kilograms");
// }

//8.
// var randomNumber = Math.ceil(Math.random() * 10);
// var userNumber = +prompt("Input a Number between 1 and 10: ");
// if (randomNumber === userNumber) {
//     alert("Conratulations\nYour Number is Matched :)");
// }
// else {
//     alert("Try Again\nYour Number isn't Matched :(");
// }
// console.log(randomNumber)

//----------------- Date Methods -----------------
//1.
// var rightNow = new Date();
// document.write(rightNow);

//2.
// var rightNow = new Date();
// document.write(rightNow);
// var months = ['January', 'Febarary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// alert("Current Month: " + months[rightNow.getMonth()]);

//3.
// var rightNow = new Date();
// document.write(rightNow);
// var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thr', 'Fri', 'Sat'];
// alert("Toady is " + days[rightNow.getDay()]);

//4.
// var rightNow = new Date();
// if (rightNow.getDay() === 0 || rightNow.getDay() === 6) {
//     alert("It's Fun Day");
// }

//5.
// var rightNow = new Date();
// if (rightNow.getDate() < 15) {
//     alert("First Fifteen Days of the Month");
// }
// else {
//     alert("Last Days of the Month");
// }

//6.
// var rightNow = new Date();
// document.write("Current Date: " + rightNow + "<br />");
// document.write("Elapsed Minutes since January 1, 1970: " + rightNow.getTime() / (1000 * 60) + "<br />");
// document.write("Elapsed Milliseconds since January 1, 1970: " + rightNow.getTime());

//7.
// var rightNow = new Date();
// if (rightNow.getHours() < 12) {
//     alert("Its AM");
// }
// else {
//     alert("Its PM");
// }

//8.
// laterDate = new Date("December 31, 2020");
// document.write(laterDate);

//9.
// var days = Math.ceil((new Date().getTime() - new Date("April 24, 2020").getTime()) / (1000 * 60 * 60 * 24));
// document.write(days  + " days have passed since 1st Ramadan, 2020");

//10.
// var sec = Math.ceil((new Date("Dec 5, 2015 22:50:16").getTime() - new Date("Jan 1, 2015").getTime()) / (1000 * 60));
// document.write("On reference date Dec 5, 2015 22:50:16 " + sec + " minutes had passed since beginning of 2015");

//11.
// var curr = new Date();
// document.write("Current Date: " + curr + "<br />");
// curr.setHours(curr.getHours() - 1);
// document.write("1 Hour Ago, it was " + curr);

//12.
// var curr = new Date();
// alert(curr);
// curr.setFullYear(curr.getFullYear() - 100);
// alert("100 Years Back, it was " + curr);

//13.
// var age = +prompt("Enter your Age: ");
// var now = new Date();
// var currYear = now.getFullYear();
// now.setFullYear(currYear - age);
// alert("Your Birth Year is " + now.getFullYear());

//14.
// document.write("<h1>" + "K-Electric Bill" + "</h1>");
// var CPU = 18;
// var NOU = 320;
// var LPS = 390;
// document.write("Costumer Name: Imran Ali" + "<br />");
// document.write("Billing Month: July" + "<br />");
// document.write("Number of Units: " + NOU + "<br />");
// document.write("Charges per Unit: " + CPU + "<br />" + "<br />");

// document.write("Net Amount Payable (With in Due Date): " + (NOU * CPU) + "<br />");
// document.write("Late Payment Surcharge: " + LPS + "<br />");
// document.write("Gross Amount Payable (after due date): " + ((NOU * CPU) + LPS) + "<br />")

//----------------------- Functions ------------------------
//1.
// function rightNow() {
//     var dateTime = new Date();
//     alert(dateTime);
// }
// rightNow();

//2.
// function greeting (fn, ln) {
//     alert("Assalam O Alikum " + fn + " " + ln);
// }
// greeting("SAIFULLAH", "BIHARI");

//3.
// function add (num1, num2) {
//     return "Sum : " + (num1 + num2);
// }
// alert(add (+prompt("Enter First Num: "), +prompt("Enter Second Num: ")));

//4.
// function calculator(num1, operator, num2) {
//     switch(operator) {
//         case "+" :
//             alert("Sum : " + (num1 + num2));
//             break;
//         case "-" :
//             alert("Difference : " + (num1 - num2));
//             break;
//         case "*" :
//             alert("Product : " + (num1 * num2));
//             break;
//         case "/" :
//             alert("Quotient : " + (num1 / num2));
//             break;
//         case "%" :
//             alert("Remainder : " + (num1 % num2));
//             break;
//         default :
//             alert("Incorrect Operator")
//     }
// }
// calculator(+prompt("CALCULATOR\nEnter Num 1: "), prompt("CALCULATOR\nEnter Operator: "), +prompt("CALCULATOR\nEnter Num 2: "));

//5.
// var num = +prompt("Enter a Number for squaring: ");
// function powerSq(num) {
//     return num * num;
// }
// alert("Ans: " + powerSq(num));

//6.
// var num = +prompt("Enter a Number for finding factorial: ");
// function factorial(fac_num) {
//     var value = 1;
//     for (var i = fac_num; i > 0; i--) {
//         value = value * i;
//     }
//     return "Ans: " + value;
// }
// alert(factorial(num));

//7.
// var start = +prompt("Enter a Starting Number of Series: ");
// var end = +prompt("Enter an Ending Number of Series: ");
// function series(st, ed) {
//     if (st < ed){
//         for (var i = st; i <= ed; i++) {
//             document.write(i + " ");
//         }
//     }
//     else {
//         alert("Invalid Points");
//     }
// }
// document.write("<h2>" + "Series Of Numbers" + "</h2>");
// series(start, end);

//8.
// var per = +prompt("Input a Perpendicular of Right Triangle: ");
// var base = +prompt("Input a Base of Right Triangle: ");
// function squaring(val) {
//     return (val * val);
// }
// function hypotenuse(p, b) {
//     var hypo = squaring(p) + squaring(b);
//     return Math.round(Math.sqrt(hypo));
// }
// alert("Hypotenuse of Right Triangle is: " + hypotenuse(per, base));

//9.
// var width = 10;
// var height = 6;
// function areaOfrec(w, h) {
//     alert("Area: " + (w * h));
// }
// areaOfrec(4, 5);
// areaOfrec(width, height);

//10.
// var str = prompt("Enter a String to check Palindrome or not: ");
// function palindromeChecker(userString) {
//     var revStr = "";
//     for (var i = userString.length - 1; i >= 0 ; i--) {
//         revStr = revStr + str[i];
//     }
//     console.log(str);
//     console.log(revStr);
//     if (str === revStr) {
//         alert("Given String is a Palindrome");
//     }
//     else {
//         alert("String is not a Palindrome");
//     }
// }
// palindromeChecker(str);

//11.
// function titleCase(string) {
//     var check = "";
//     for (var i = 0; i < string.length; i++) {
//         if (i === 0 || string[i - 1] === " ") {
//             check = check + string[i].toUpperCase();
//         }
//         else {
//             check = check + string[i];
//         }
//     }
//     console.log(check);
// }
// titleCase("hello maria, you are the leader of 2020 bootcamp");

//12.
// function longestWord(string) {
//     var check1 = "";
//     var check2 = [];
//     var greaterLen = ""; 
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] !== " ") {
//             check1 = check1 + string[i];
//         }
//         else {
//             check2.push(check1);
//             check1 = "";
//         }
//     }
//     check2.push(check1);
//     for (var i = 0; i < check2.length; i++) {
//         if(check2[i].length > check2[i + 1].length) {       //TypeError
//             greaterLen = check2[i];
//         }
//     }
//     alert("Longest Word with in the String is: " + greaterLen);
// }
// longestWord("Web and Mobile Develoment");

//13.
// function letterCounter(str, let) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === let) {
//             count++;
//         }
//     }
//     alert("The Number of Occurence of \"" + let + "\" in \"" + str  + "\" is " + count + " times");
// }
// letterCounter("I am good fantastic, how about you?", "a");

//14.
// var circleRadius = +prompt("Enter a Circle Radius: ");
// function calCircumference(rad) {
//     alert("The Circumference is: " + (2 * Math.PI * rad).toFixed(3));
// }
// function calArea(rad) {
//     alert("The Area is: " + (Math.PI * (rad * rad)).toFixed(2));
// }
// calCircumference(circleRadius);
// calArea(circleRadius);
// ------------ Functions, Switch Statements, While...Do While loops -------------
// 1.
// function power(a, b) {
//     alert(a + " raised to the power " + b + " = " + (a ** b));
// }
// power(9, 2);

// 2.
// function leapYearChecker() {
//     var a = false;
//     var year = +prompt("Enter a Year");
//     for (var i = 1900; i <= 2200; i = i + 4) {
//         if (year === i) {
//             alert("This is a Leap Year");
//             a = true;
//             break;
//         }
//     }
//     if (a === false) {
//         alert("This is not a Leap Year")
//     }
// }
// leapYearChecker();

// 3.
// var a = +prompt("Input 'a' side: ");
// var b = +prompt("Input 'b' side: ");
// var c = +prompt("Input 'c' side: ");
// function S() {
//     var s = (a + b + c)/2
//     return s;
// }
// function area() {
//     var area = (S()) * (S() - a)*(S() - b)*(S() - c)
//     alert("Area of Triangle: " + area);
// }
// area();

// 4.
// var marks1 = +prompt("Enter 1st Subject Marks: ");
// var marks2 = +prompt("Enter 2nd Subject Marks: ");
// var marks3 = +prompt("Enter 3rd Subject Marks: ");
// function avaerage() {
//     var ava = (marks1 + marks2 + marks3) / 3;
//     return Math.ceil(ava);
// }
// function percentage() {
//     var per = ((marks1 + marks2 + marks3) * 100) / 300;
//     return per.toFixed(3);
// }
// function mainFunction() {
//     alert("Average Marks: " + avaerage());
//     alert("Percentage: " + percentage() + "%");
// }
// mainFunction();

// 5.
// function customIndexOf() {
//     var text = prompt("Enter some Text: ");
//     var targetChar = prompt("Enter Your Target Character: ")
//     var count = 0;
//     var index = [];
//     for (var i = 0; i < text.length; i++) {
//         if (text[i] === targetChar) {
//             count++;
//             index = index + i;
//         }
//     }
//     if (count !== 0) {
//         alert(targetChar + " is present " + count + " times in " + "'" +  text + "'" + " at index " + index);
//     }
// }
// customIndexOf();

// 6.
// function vowelRemover() {
//     var sen = prompt("Enter a Sentence of around 25 characters: ");
// var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
// for (var i = 0; i < sen.length; i++) {
//     for (var j = 0; j < vowels.length; j++) {
//         if (sen[i] === vowels[j]) {
//             sen = sen.slice(0,i) + sen.slice(i + 1,);
//         }
//     }
// }
// alert(sen);
// }
// vowelRemover();

// 7.
// function vowelsSucc() {
//     var sen = prompt("Enter a Sentence of around 25 characters: ");
//     var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
//     var count = 0
//     var check = false;
//     for (var i = 0; i < sen.length; i++) {
//         for (var j = 0; j < vowels.length; j++) {
//             if (sen[i] === vowels[j]) {
//                 for (var k = 0; k < vowels.length; k++) {
//                     if (sen[i + 1] === vowels[k]) {
//                         count++;
//                         break;
//                     }
//                 }
//             }
//         }
//     }
//     alert(count);                                      // Not Written in Switch Statements
// }
// vowelsSucc();

// 8.
// var distance = +prompt("Input distance between two cities in Km: ");
// function km_m() {
//     alert("Distance is " + (distance * 1000) + " m");
// }
// km_m();
// function km_ft() {
//     alert("Distance is " + (distance * 3280.84) + " ft");
// }
// km_ft();
// function km_inch() {
//     alert("Distance is " + (distance * 39370.1) + " inches");
// }
// km_inch();
// function km_cm() {
//     alert("Distance is " + (distance * 100000) + " cm");
// }
// km_cm();

// 9.
// var time = +prompt("Input Employee Working Hours: ");
// var overTime = 0;
// if (time > 40) {
//     overTime = time - 40;
// }
// alert("Overtime Pay for " + overTime + " hours is " + overTime * 12.00 + "$");

// 10.
// var withdraw = prompt("Enter amount to withdraw in hundreds: ")
// var hun;
// var ten;
// if (withdraw < 1000) {
//     if (withdraw >= 100) {
//         hun = withdraw[0];
//         if (withdraw.slice(1,) === '50') {
//             ten = withdraw[1];
//             alert("You will have " + hun + " hundred note(s) and 1 fifty note");
//         }
//         else if (withdraw.slice(1,) === '00') {
//             alert("You will have " + hun + " hundred note(s)");
//         }
//         else if (withdraw.slice(1,) < 50) {
//             ten = withdraw[1];
//             alert("You will have " + hun + " hundred note(s) " + ten + " ten note(s)");
//         }
//         else if (withdraw.slice(1,) > 50) {
//             ten = withdraw[1] - 5;
//             alert("You will have " + hun + " hundred note(s) 1 fifty note and " + ten + " ten note(s)")
//         }
//     }
//     else {
//         alert("Please Withdraw amount in Hundreds");
//     }
// }
// else {
//     alert("Please Withdraw amount in Hundreds");
// }

// ------------------- Events --------------------
// 1 & 2.
// function feedback() {
//     alert("Thanks for Puuchasing a Phone from us");
// }

// 3.
// var i = 0;
// var d = document.getElementsByTagName('td');
// for (var f = 0; f < 40; f = f + 4) {
//     var text = document.createTextNode(i++);
//     d[f].appendChild(text);
// }
// function del() {
//      var td = event.target.parentNode; 
//      var tr = td.parentNode; // the row to be removed
//      tr.parentNode.removeChild(tr);
// }                                                               // Slightly Issue

// 4.
// Written on HTML file

// 5.
// var val = 0;
// var num = document.getElementById('span');
// function inc() {
//     num.innerHTML = ++val;
// }
// function dec() {
//     num.innerHTML = --val;
// }

// ----------------------- The DOM ------------------------
// 1(i).
var main = document.getElementById('”main-content”');
// 1(ii).
// console.log(main.childNodes);
// 1(iii).
// for (var i = 1; i < 10; i = i + 2) {
//     document.write(main.childNodes[i].innerHTML + '<br />'); 
// }
// 1(iv).
// var fn = document.getElementById('”form-content”');
// var field = fn.childNodes[3];
// var text = document.createTextNode('SAIFULLAH  BIHARI');
// field.value = field.appendChild(text);
// console.log(field.appendChild(text));







