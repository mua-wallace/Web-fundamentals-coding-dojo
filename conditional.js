var average = 18.88;

var weather = "sunny";

var distanceToStadium = 26;

// conditions

if (average < 10) {
  console.log("Below Average");
} else if (average === 10) {
  console.log("Passed");
} else if (average < 12 && average > 10) {
  console.log("Average");
} else if (average < 14) {
  console.log("Fairly Good");
} else if (average < 16) {
  console.log("Good");
} else if (average < 18) {
  console.log("Very Good");
} else {
  console.log("Excellent");
}

// nested if/else

if (weather == "rainy") {
  console.log("I'll swim");
} else {
  if (distanceToStadium < 3) {
    console.log("I'll walk");
  } else {
    console.log("I'll fly");
  }
}

// banana
// banane
// banene
// banne
// binane

//Loops
//        A          B          D
for (var num = 1; num < 6; num = num + 1) {
  //   C
//   console.log("I am counting!, the num is ", num);
}
//   E
// console.log("We are done. Goodbye world!");

// num=1  num=2   num=3  num=4  num=5
// A-B-C  D-B-C   D-B-C  D-B-C  D-B-C D-B-E

// Syntax

// for (INITIALIZATION; TEST; UPDATE) {
//   // BODY of the loop –
//   // this runs repeatedly as long as TEST is true
// }

// While loop

// A
var num = 1;

//      B
while (num < 6) {
  // C
//   console.log("I am counting!, the num is ", num);
  // D
  num = num + 1;

//   num += 3;
//   num -= 5;
//   num *= 1;
//   num /= 1;

//   num++;
//   num--;
}

// parameters
for (var num = 10; num > 2; num = num - 1) {
  console.log("num is currently", num);
}

// person is what we call parameter
function greetSomeone(person) {
    if (person == "Martin") {
        console.log("Yo dawg, howz it goin?");
    } else {
        console.log("Greetings Earthling!");
    }
}
greetSomeone();
greetSomeone("Martin");