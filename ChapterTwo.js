// Looping a triangle
// Write a loop that makes seven calls to console.log to output 
// the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of 
// a string by writing .length after it.

// let abc = "abc";
// console.log(abc.length);
// // → 3
// Most exercises contain a piece of code that you can modify 
// to solve the exercise. Remember that you can click code
//  blocks to edit them.

// // Your code here.

// pseudocode-
// iterate, print out number your on times a "#"; in other words x number of 
// #'s. find out how to increase a string by one each iteration.
// could write function that takes in variable (# in this case) and prints it
// one more time each iteration (7).

// for (let number = 0; number <= 12; number = number + 2) {
//   console.log(number);
// }
// → 0
// → 2
//   … etcetera


// for(let i = "#"; i.length <= 7; i += "#"){
    

// console.log(i)
// }

// FizzBuzz
// Write a program that uses console.log to print all the numbers from 
// 1 to 100, with two exceptions. For numbers divisible by 3, print 
// "Fizz" instead of the number, and for numbers divisible by 5 (and not 3),
//  print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for 
// numbers that are divisible by both 3 and 5 (and still print "Fizz" or
//  "Buzz" for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed 
//     out a significant percentage of programmer candidates. So if you 
//     solved it, your labor market value just went up.)

// Your code here.

// let num 
// for(let i = 1; i <= 100; i++){
//     num = i;
//     if(num % 3 === 0 && num % 5 === 0){
//         console.log("FizzBuzz");
//     }else if(num % 3 === 0){
//         console.log("Fizz");
//     }else if(num % 5 === 0){
//     console.log("Buzz");
//     }else
// console.log(num)
// }


// Solution from the Book:
// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }


// Chessboard
// Write a program that creates a string that represents an 8×8 grid,
//  using newline characters to separate lines. At each position of the 
//  grid there is either a space or a "#" character. The characters should 
//  form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding
//  size = 8 and change the program so that it works for any size, 
//  outputting a grid of the given width and height.

// // Your code here.

// pseudocode:
// a string, new line character, space or "#"
// then console.log(number of rows and number in rows)

// so there will be n * n where n is number of rows and number in rows, but
// the number in rows will be / 2 and have space  " " and "#" then a /n for
// new line and will do it n number of times.
// "A newline character is written like \"\\n\"."

// for(let i = " #"; i.length <= 7; i += " #"){

// let x = 8

// for(let i = " #"; i <= x; i += " #"){
    // x = 
//     console.log(i)
// }
// this is not a loop problem, just a one time printing of i*i with a new line
// after each i.WRONG- it is a two loop problem. 

// for (let i = "1#"; i.length < 10 ; i += "2#"){
//     console.log(i)
// }


// //  console.log(i)

// if i = 8, print 8 * 8 characters, 8 in a row 

// i.length = i: \n 

let num = 8;

let string = "";

for (let i = 0; i < num; i++){
    for (let x = 0; x < num; x++){
        if((x + i) % 2 == 0){
            string += " ";
        }else {
            string += "#";
        }
    }
    string += "\n";
}
console.log(string)