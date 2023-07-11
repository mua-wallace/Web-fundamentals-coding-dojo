// Assignment operator =

var count = 5;
var message = "Hello world";

// + operator

var sum = count + count;

var num1 = 4;
var num2 = "5";

var sum1 = num1 + num2;
console.log(sum1);

// sum = 10;

var newMessage = message + " " + message;

// concatenation

// Hello world hello world

console.log(sum);
console.log(newMessage);

//Operator precedence (BODMAS)

// 2-3*4*3/5 /3

var today = new Date();
if (today == 1) {
  console.log("I hate Mondays!");
}

if (today != 1) {
  console.log("Today is alright!");
}


 
var today = new Date();
if (today.getDay() == 1) {
  console.log("I hate Mondays!");
} else if (today.getDay() == 5) {
  console.log("Friday? More like Fri-yay!");
} else {
  console.log("Today is alright!");
}

var temperature = 100; 
var isRaining = true;
    //100
if(temperature >= 50) {

    // !false => true 
    if(!isRaining) {
        console.log("This is a good day to go for a walk!");
    } else {
        console.log('The  value of isRaining was set to true');
    }
} else {
    console.log('The temperature is less than 50 ');
}


// logical operators

// AND &&
var myName = 'wallice';
var yourName = 'peace';

var isOk = false;


// true              &&          true
(myName == 'wallice') && (yourName == 'peace') // true
// false              &&          true
(myName == 'wallace') && (yourName == 'peace') // false
//   false            &&          false
(myName == 'nanje') && (yourName == 'cedrick') // false
//       true        &&          false
(myName == 'wallice') && (yourName == 'arlette') // false


// OR ||

// true              &&          true
(myName == 'wallice') || (yourName == 'peace') // true
// false              &&          true
(myName == 'wallace') || (yourName == 'peace') // true
//   false            &&          false
(myName == 'nanje') || (yourName == 'cedrick') // false
//       true        &&          false
(myName == 'wallice') || (yourName == 'arlette') // true


// Negation !
!isOk // true


var is5even = 5 % 2 == 0; //false
var is500even = 500 % 2 == 0; // true








