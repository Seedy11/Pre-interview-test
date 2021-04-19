//Question 1.
//Print out the numbers 1 to 10 in descending order.

var number = [1,2,3,4,5,6,7,8,9,10];
number.sort((a, b) => b - a);

 console.log(number);

//  Question 2.
//  Implement FizzBuzz. For the numbers 1- 100:
//  ● If the number is divisible by 3 print out “fizz”
//  ● If the number is divisible by 4 print out “buzz”
//  ● If the number is not divisible by 3 or 4 then print out the number instead

var Numberq2 = Math.floor(Math.random() * 100);
if (Numberq2 / 3 === 0 ){
    console.log('fizz');
}  else if ( Numberq2 / 4 === 0){
    console.log('buzz');
} else {
    console.log('invalid');
}

// Question 3.
// A square number is the product of some integer with itself. For example, 9 is a square number,
// since it can be written as 3 × 3.
// ● Print out the square numbers between 1000 and 10,000
// ● The two square numbers 676 and 324 add up to 1000, find another pair of square
// numbers that add up to 1000
var max = 0;
var min = 0;
function Question3 (max, min){
    square = max + min === 1000;
    return square
}
console.log(square(max,min));


// Question 4.
// Create a class structure that can be used to represent shapes. Create a Square and Triangle
// class. Write a method that will calculate the area of the shapes.

    var height;
    var width;

function  Square (heigh, width){
    
    Area = heigh * width;

}


function triangle (h, b){
    area = h * b / 2;
    return area;
}


// Question 5.
// A person’s height can be represented as a combination of feet and inches, separated by an
// apostrophe ('), where one foot equals 12 inches. For example, a height of 6 feet and 8 inches
// would be represented as 6'8.
// Show how you would order the following strings from smallest to largest, assuming they
// represent heights in feet and inches. "6'2", "5'7", "6'1", "5'11"



var inches = ["6'2", "5'7", "6'1", "5'11"];
 inches.slice()








