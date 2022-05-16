// Exercises
// The sum of a range
// The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// // Your code here.

// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55

// PREP- probably best to do PREP for each function this exercise is asking for. 

// pseudocode:
// function range(start, end)
// return array from start and including end

// get length, iterate that many times , puts each index to end of array being made Because the function takes two numbers , that wont Work . will need to subtract or maybe a while loop, so that the array will be created or could use a for loop, as long as the comparison is set up so that <= end. 

// function range(start, end, step = 1){
//     let array = []
//     for(let i = start; i <= end; i + step){
//     array.push(i)
//      } console.log("test1",array)
//     return array 

// }

// console.log(range(1,10,2))


// function range(start,end,step = 1){
//     let array = []

//     if(step > 0){
//     for(let i = start; i <= end; i = i+step){
//     array.push(i)
//      } console.log("test1",array)
//     return array 
//     }else if(step < 0){
//     for(let i = start; i >= end; i = i + step){
//         array.push(i)
//             } console.log("test1",array)
//         return array 

//     }
// }
// // range(6,10)
// console.log("test2", range(10,6,-1))
// // then 
// // function sum(array) 
// // return element + element for all elements

// function sum(arr){
//     let answer = 0
//     for(i = 0; i < arr.length; i++){
//       answer = answer + arr[i]  
//       console.log("testsum",answer)
//     }
//     return answer
// } 
// // sum([1,2,3,4,5])

// console.log("test3",sum(range(10, 1,-1)));

// Reversing an array
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

// // Your code here.

// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]