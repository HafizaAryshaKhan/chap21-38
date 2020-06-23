//================================Chapter # 21-25

// Question # 01

// var firstname = prompt("Enter your first name ");
// var lastname = prompt("Enter your last name ");
// var fullname = firstname + " " + lastname;
// alert("Hey, How are you " +  fullname + "?")


// Question # 02

// var mobile = prompt("Enter your mobile phone");
// var model = mobile.length;
// document.write("My favourite phone is: " + mobile + "<br>" + "Length of string :" + model )


// Question # 03

// var text= "Pakistani";
// document.write("String : " + text + "<br>")
// document.write( "Index of 'n' : " +text.search("n"));


// Question # 04

//  var text = "Hello World";
//  var name = text.lastIndexOf("l");
//  document.write("String : " + text + " <br>" )  
//  document.write("Last index of 'l' : " + name )  

// Question # 05

// var country = "Pakistani";
// var firstChar = country.charAt(3)
// document.write("String: " + country + " <br>")
// document.write( "Character at index 3: " +firstChar)

// Question # 06

//  var firstname = prompt("Enter your first name ");
//  var lastname = prompt("Enter your last name ");
//  var fullname= firstname.concat( " " +lastname);
// document.write(fullname)

// Question # 07

// var city = "Hyderabad";
// var name= city.replace("Hyderabad", "Islamabad");
// document.write("City: " +  city + "<br>")
// document.write("After replacement: "  +  name)


// Question # 08

// var message ="Ali and Sami are best friends. They play cricket and football together.";
// var name= message.replace(/and/g, "&");
// document.write(name)


// Question # 09

//  var String = "472"
//  var num = Number(String);
//  document.write("Value: " + String + "<br>")
//  document.write("Type: string " + "<br>")
//  document.write("Value: " + num + "<br>")
//  document.write("Type: number " + "<br>")


// Question # 10
// var a = "peanuts";
// var b = a.toUpperCase()
// document.write("User Input: " + a + "<br>")
// document.write("Upper Case: " + b + "<br>")


// Question # 11
// var userinput = prompt (" Enter your text");
// var firstchar = userinput.slice(0,1);
// firstchar = firstchar.toUpperCase()
// var otherchar = userinput.slice(1)
// otherchar= otherchar.toLowerCase()
// var Title= firstchar + otherchar;
// document.write("User input: "+  userinput + "<br>")
// document.write("Title Case: "+  Title)

// Question # 12
// var num = 35.36;
// var a = num.toString().replace(".", ""); 
// document.write("Number: " + num + "<br>")
// document.write("Result: " + a)


// Question # 13
// var userName = prompt("Enter your name");
// var totlength = userName.length;
// for (i=0; i< userName.length; i++){
//     if (userName.slice(i , i+1) == "!" || userName.slice(i , i+1) == "@" || userName.slice(i , i+1) == "," || userName.slice(i , i+1) == "." ){
//         alert("Invalid Username")
//     }
// }

// Question # 14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bakery = prompt("Enter your bakery product");
// bakery = bakery.toLowerCase();
// var bakeryproduct = arr.indexOf(bakery);
// if (arr.indexOf(bakery) != -1){
//     alert(bakery + " is avaiable at index " + bakeryproduct + " in our bakery");
// }else{
//     alert(bakery + " is not availabe in our bakery ")
// }

// Question # 15
//  var pswd  =  prompt (" Enter your password");
// if (pswd.length <=6){
//     console.log("correct")
// }else{
//     console.log("incorrect")
// }


// Question # 18
// var text = "The quick brown fox jumps over the lazy dog";
// var convert = text.toLowerCase();
// var count = convert.match(/the/g).length
// document.write(text + "<br>")
// document.write("There are " + count + " occurence (s) of word 'the'")



//================================Chapter # 26-30
// // Question # 1

// var a = +prompt("Enter the positive number");
// var b = Math.round(a)
// var c = Math.floor(a)
// var d = Math.ceil(a)
// console.log("number:" +  a)
// console.log("round off value: " + b)
// console.log("floor value: " + c)
// console.log("ceil value: " + d)
// if (a <1){
//     alert(a + " is not a positive integer")
// }


// // Question # 2

// var a = +prompt("Enter the negative number");
// var b = Math.round(a)
// var c = Math.floor(a)
// var d = Math.ceil(a)
// console.log("number:" +  a)
// console.log("round off value: " + b)
// console.log("floor value: " + c)
// console.log("ceil value: " + d)
// if (a >1){
//     alert(a + " is not a negative integer")
// }


// // Question # 3
// var a = -4;
// var b = Math.abs(a)
// console.log("The absolute value of " + a +" is " + b)


// // Question # 4
// var dice = Math.random();
// console.log("random dice value: "+ dice)
// var dice = Math.random();
// console.log("random dice value: "+ dice)


// // Question # 5
// var head = prompt("Enter the value of head");
// var tail = prompt("Enter the value of tail");
// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if (floor === 0){
//     alert("Random coin value of head: " + head );
// } else{
//     alert("Random coin value of tail: " + tail );
// }


// // Question # 6
// var a = +prompt("Enter the value of head");
// var random = Math.random(a)
// if (a >=1 && a<=100){
//     console.log("Random value between 1 and 100 is: " + a )
// } else{
//     console.log("Not in range")
// }



// // Question # 7
//var a = prompt("Enter the weight");
//var b = parseFloat(a)
//console.log(b)



// // Question # 8
// var a = 5;
// var user = prompt("Enter the value of user");
// var b = Math.random(a)
// var floor = Math.floor(b)
// alert(floor)
// if (b >=1 && b<=10){
//     if(b == user){
//         alert("Congratulations you are right.")
//     }else{
//         alert("You are wrong")
//     }

// }





//================================Chapter # 31-34

// Question # 01

// var a = new Date();
// console.log(a)



// Question # 02

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var a = new Date();
// var b = months[a.getMonth()];
// alert("Current Month: " + b)


// Question # 03

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
//  var a = new Date();
//  var b = days[a.getDay()];
//  alert("Today is " + b)



// Question # 04

// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// var a = new Date();
// var b = days[a.getDay()];
// if (b === "Sun" || b === "Sat"){
//     alert("It's fun day")

// }else{
//     alert("It's Working day")
// }



// Question # 05

// var a = new Date();
// if (a <=15){
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month") 
// }



// Question # 06

// var min = new Date();
// var minmilli = min.getTime();
// var minconversion = minmilli/(1000*60*60)
// document.write("Current Date: " + min + "<br>");
// document.write("Elapsed miliseconds since january 1, 1970: " + minmilli + "<br>");
// document.write("CElapsed minutes since january 1, 1970: " + minconversion + "<br>");



// Question # 07

// var date = new Date()
// Hour = date.getHours()
// if(Hour <=12){
//     alert ("it's AM")
// }
// else{
//     alert("its PM")}



// Question # 08

// var laterdate = new Date("Dec, 31, 2020");
// console.log(laterdate)



// Question # 11

//  var date = new Date();
//  Hour = date.getHours()
//  var d = new Date();
// d.setHours(Hour - 1);
// alert ("Current Date: " + date + "\n" + "1 hour ago, it was " + d + "\n")


// Question # 12

// var a = new Date()
// var year = a.getFullYear();
// var d = new Date();
// d.setFullYear(year-100)
// alert("Current Date: " + a + "\n" + "100 years back," + " it was " + d)



// // Question # 13

// var a = new Date();
// var year = a.getFullYear()
// var userage = prompt ("Enter your age ");
// var age = year - userage 
// console.log( "Your age is: " + userage + "\n" + "Your birth year is: " + age)





//================================Chapter # 35-38

// Question # 01
// function date(){
//     var now = new Date();
//     alert(now );
// }
// date();


// Question # 02
// function name(firstname, lastname){
//    var a = prompt("Enter your First Name ");
//    var b = prompt(" Enter your Last Name");
//    alert("How are you " + a + " " + b)
// }
// name();


// Question # 03
// function name(a, b){
//      var a = +prompt("Enter your First Num ");
//      var b = +prompt(" Enter your second num");
//      return (a + b)
// }
// console.log(name());


// Question # 04
// function name(num1, num2, num3){
//          var num1 = +prompt("Enter your First Num ");
//          var num2 = +prompt(" Enter your second num");
//          var num3 = +prompt(" Enter your third num");
//          var op = prompt("Enter the operator")
//         if ( op == "+"){
//             return (num1 + num2 + num3)
//         }
//         else if(op == "*"){
//          return (num1 * num2* num3)
//         }
//         else if(op == "-"){
//             return (num1 - num2 - num3)
//            }
//     }
// console.log(name());


//Question # 05
// function squ(a){
//     alert(a*a)
// }
// squ(5);


//Question # 06
// function fact(n){
//     var num = 1;
//     if (n == 0 || n == 1){
//       return num;
//     }else{
//       for(var i = n; i >= 1; i--){
//         num = num * i;
//       }
//       return num;
//     }  
//   }
//   var n = 5;
//   num = fact(n)
//   console.log("The factorial of " + n + " is " + num);


//Question # 07
// function count(a,b){
//     var a = prompt("Enter your First Num ");
//     var b = prompt(" Enter your Last Num");
//     for(var a =1; a<=b; a = a+1) 
//     console.log(a)
// }

// count();


//Question # 08
// function hyp(a,b){
//     function squ(x){
//         return(x * x);
//     } return Math.sqrt(squ(a) + squ(b));
// }
// alert(hyp(5,4))



//Question # 09
// function area(w,h){
//     return (w * h);
// }
// console.log(area(2,3));


// function area (){
//     var a = 4;
//     var b = 4;
//     return a * b
// }
// console.log(area())

//Question # 10
// function palindrome(){
// var word = prompt("enter");
// var check = "";
// for (var i = word.length - 1; i >= 0; i--){
//     check += word[i]
// }
// if(word === check){
// console.log(word + " is a palindrome word");
// }else{
//     console.log (word + " is not a palindrome word")
// }
// }
// palindrome()

// function Upper(){
//     var a = ("he quick brown fox");
//     var b = a.slice(0,1);
//     b = b.toUpperCase()
//     alert(b)
// }
// Upper();



//Question # 11
// function uppercase(str)
// {
//   var arr = str.split(' ');
//   var arr1 = [];
    
//   for(var x = 0; x < arr.length; x++){
//       arr1.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1));
//   }
//   return arr1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));


//Question # 12
// function long(str) {
//     var arr = str.split(" ");
//     var longWord = arr.reduce((a, b) => {
//       if(b.length > a.length) {
//         return b;
//       } else {
//         return a;
//       }
//     });
//     return longWord;
//   }
//  console.log(long("Web Development Tutorial"));


//Question # 13
// function name(str, letter) 
// {
//  var count = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       count += 1;
//       }
//   }
//   return count;
// }

// console.log(name('JSResourceS.com', 'o'));


//Question # 14
// function calcCircumference(r){
//     var circumference = Math.PI *2 *r 
//     console.log("The Circumference is " + circumference);
// }
// calcCircumference(2)
// function calcArea(r){
//     var Area = Math.PI *r *r 
//     console.log("The Area of circle is " + Area);
// }
// (calcArea(3))