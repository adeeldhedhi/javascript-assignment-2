// Question No-01
// var a = 10;
// document.write("<h> Result: <h>");
// document.write("<br>The value of a is:" + a);
// ++a
// document.write("<br> The value of ++a is" + a + "<br> Now The value of a is:" + a)
// a++
// document.write("<br>The value of a++ is" + a + "<br> Now The value of a is:" + a)
// --a
// document.write("<br>The value of --a is" + a + "<br> Now The value of a is:" + a)
// a--
// document.write("<br>The value of a-- is" + a + "<br> Now The value of a is:" + a)

// Question No-02
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;

//   document.write("<p>a: " + a + "</p>");
//   document.write("<p>b: " + b + "</p>");
//   document.write("<p>result: " + result + "</p>");

// Question No-03
// var yourName = prompt("write your name?", "");
// alert("Welcome \n" + yourName);

// Question No-04
// var yourName = prompt("write your name?", "");
// alert("Welcome \n" + yourName);

// Question No-05
// var userInput = prompt("Enter a number:");

// var number = parseInt(userInput);
// if (isNaN(number) || !userInput) {
//   number = 5;
//   document.write("<p>Default multiplication table of 5:</p>");
// } else {
//   document.write("<p>Multiplication table of " + number + ":</p>");
// }
// for (var i = 1; i <= 10; i++) {
//   document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// Question No-06
        // var subject1 = prompt("Enter the name of the first subject:");
        // var subject2 = prompt("Enter the name of the second subject:");
        // var subject3 = prompt("Enter the name of the third subject:");

        // var totalMarks = 100;

        // var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
        // var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
        // var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

        // var percentage1 = ((obtainedMarks1 / totalMarks)*100 );
        // var percentage2 = ((obtainedMarks2 / totalMarks)*100 );
        // var percentage3 = ((obtainedMarks3 / totalMarks)*100 );
        // var grandTotal  =  totalMarks * 3
        // var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
        // var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

        // document.write("<h2>Results</h2>");
        // document.write("<table border='1'>");
        // document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
        // document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage1 + "%</td></tr>");
        // document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage2 + "%</td></tr>");
        // document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage3 + "%</td></tr>");
        // document.write("<tr><td>Grand Total:</td><td>" + grandTotal + "</td></tr>");
        // document.write("<tr><td>Total Obtained Marks:</td><td>" + totalObtainedMarks + "</td></tr>");
        // document.write("<tr><td>Percentage:</td><td>" + percentage.toFixed(2) + "%</td></tr>");
        // document.write("</table>");

        ////// USER INPUT & CONDITIONAL STATEMENT //////

// Question No-01
// var cityName = prompt("Enter the city name:");

//   if (cityName === "karachi") {
//      document.write("Welcome to the city of lights!");
//   } else {
//      document.write("Welcome to " + cityName);
//         }

// Question No-02
// var gender = prompt("Enter your Gender:");

//   if (gender === "male") {
//      document.write("Good Morning Sir!");
//   } else if (gender === "female")
//    {
//      document.write("Good Morning Ma’am");
//         }

// Question No-03
      // var signalColor = prompt("Enter the color of the traffic signal (red, yellow, green):");
          
      // var message = "";


      //   if (signalColor === "red") {
      //       message = "Must Stop";
      //   } else if (signalColor === "yellow") {
      //       message = "Ready to move";
      //   } else if (signalColor === "green") {
      //       message = "Move now";
      //   } else {
      //       message = "Invalid input. Please enter red, yellow, or green.";
      //   }

      //   document.write("<h2>Traffic Signal Information</h2>");
      //   document.write("<table border='1'>");
      //   document.write("<tr><th>Signal Color</th><th>Message</th></tr>");
      //   document.write("<tr><td>" + signalColor + "</td><td>" + message + "</td></tr>");
      //   document.write("</table>");

// Question No-03
      // var fuel = prompt("Please remaining fuel:");
          
      //    if (fuel < 0.25) {
      //     document.write("Please refill the fuel in your car");
      //   } else {
      //     document.write("you are good to GOoo");
      //   }

      // Question No-04
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }else{
//   alert("given condition for variable b is false");
// }
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
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");}
// if (true){
//   alert("True");
//   }
//   if (false){
//   alert("False");
// }
// if("car" < "cat"){
//   alert("car is smaller than cat");
// }

// Question No-06
        // var obtainedMarks1 = parseInt(prompt("Enter marks obtained in subject 1:"));
        // var obtainedMarks2 = parseInt(prompt("Enter marks obtained in subject 2:"));
        // var obtainedMarks3 = parseInt(prompt("Enter marks obtained in subject 3:"));
        
        // var totalMarks = parseInt(prompt("Enter Total Marks:"));

        // var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
        // var percentage = (totalObtainedMarks / totalMarks ) * 100;

        // var grade;
        // var remarks;

        // if (percentage >= 80) {
        //     grade = 'A-one';
        //     remarks = 'Excellent';
        // } else if (percentage >= 70) {
        //     grade = 'A';
        //     remarks = 'Good';
        // } else if (percentage >= 60) {
        //     grade = 'B';
        //     remarks = 'You need to improve';
        // } else {
        //     grade = 'Fail';
        //     remarks = 'sorry';
        // }

        // document.write("<h2>Result</h2>");
        // document.write("<p>Total Total Marks: " + totalMarks + "</p>");
        // document.write("<p>Total Obtained Marks: " + totalObtainedMarks + "</p>");
        // document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
        // document.write("<p>Grade: " + grade + "</p>");
        // document.write("<p>Remarks: " + remarks + "</p>");

        // Question No-08
        // var number = parseInt(prompt("Enter a number:"));

        // if (number % 3 === 0) {
        //     document.write("The number " + number + " is divisible by 3.");
        // } else {
        //     document.write("The number " + number + " is not divisible by 3.");
        // }

// Question No-09
        // var number = parseInt(prompt("Enter a number:"));

        // if (number % 2 === 0) {
        //     document.write("The number " + number + " is even.");
        // } else {
        //     document.write("The number " + number + " is odd.");
        // }

// Question No-10
        // var temperature = parseFloat(prompt("Enter the temperature:"));

        // if (temperature > 40) {
        //     document.write("It is too hot outside.");
        // } else if (temperature > 30) {
        //     document.write("The Weather today is Normal.");
        // } else if (temperature > 20) {
        //     document.write("Today's Weather is cool.");
        // } else if (temperature > 10) {
        //     document.write("OMG! Today's weather is so Cool.");
        // } else {
        //     document.write("It's extremely cold outside.");
        // }

        // Question No-11
        // var firstNumber = parseFloat(prompt("Enter the first number:"));
        // var secondNumber = parseFloat(prompt("Enter the second number:"));
        // var operation = prompt("Enter the operation (+, -, *, /, %):");

        // var result;

        // if (operation === "+") {
        //     result = firstNumber + secondNumber;
        // } else if (operation === "-") {
        //     result = firstNumber - secondNumber;
        // } else if (operation === "*") {
        //     result = firstNumber * secondNumber;
        // } else if (operation === "/") {
        //     if (secondNumber !== 0) {
        //         result = firstNumber / secondNumber;
        //     } else {
        //         result = "Cannot divide by zero.";
        //     }
        // } else if (operation === "%") {
        //     if (secondNumber !== 0) {
        //         result = firstNumber % secondNumber;
        //     } else {
        //         result = "Cannot perform modulus with zero.";
        //     }
        // } else {
        //     result = "Invalid operation.";
        // }

        // document.write("Result: " + result);

        ///// IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS //////

// Question No-01
        // var inputChar = prompt("Enter a character:");
        // var asciiCode = inputChar;

        // if (asciiCode >= 48 && asciiCode <= 57) {
        //     document.write("The input is a number.");
        // } else if (asciiCode >= 65 && asciiCode <= 90) {
        //     document.write("The input is an uppercase letter.");
        // } else if (asciiCode >= 97 && asciiCode <= 122) {
        //     document.write("The input is a lowercase letter.");
        // } else {
        //     document.write("The input is neither a number, uppercase letter, nor lowercase letter.");
        // }

// Question No-02
        // var firstInteger = parseInt(prompt("Enter the first integer:"));
        // var secondInteger = parseInt(prompt("Enter the second integer:"));

        // if (firstInteger > secondInteger) {
        //     document.write("The larger integer is: " + firstInteger);
        // } else if (secondInteger > firstInteger) {
        //     document.write("The larger integer is: " + secondInteger);
        // } else {
        //     document.write("Both integers are equal.");
        // }

        // Question No-02
        // var number = parseFloat(prompt("Enter a number:"));

        // if (number > 0) {
        //     document.write("The number is positive.");
        // } else if (number < 0) {
        //     document.write("The number is negative.");
        // } else {
        //     document.write("The number is zero.");
        // }

// Question No-04
// var character = prompt("Enter a character (single letter):");

//         var vowels = "aeiou";

//         if (character.length === 1 && vowels.indexOf(character) !== -1) {
//             document.write("The character is a vowel.");
//         } else {
//             document.write("The character is not a vowel.");
//         }

// Question No-05
// var correctPassword = "12345678"; 

//         var enteredPassword = prompt("Enter your password:");

//         if (enteredPassword === "") {
//             document.write("Please enter your password.");
//         } else if (enteredPassword === correctPassword) {
//             document.write("Correct! The password you entered matches the original password.");
//         } else {
//             document.write("Incorrect password.");
//         }

// Question No-06
// var hour = prompt("Enter Hour:");
// var greeting;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// document.write(greeting);

// Question No-07
// var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900):"));

//         if (time >= 0 && time < 1200) {
//             document.write("Good morning!");
//         } else if (time >= 1200 && time < 1700) {
//             document.write("Good afternoon!");
//         } else if (time >= 1700 && time < 2100) {
//             document.write("Good evening!");
//         } else if (time >= 2100 && time <= 2359) {
//             document.write("Good night!");
//         } else {
//             document.write("Invalid time input.");
//         }