// // Given an input array of numbers, return an array where each element is the square of the original number.
// // ex: squareArr([1, 2, 5, 7, 9])  —> [1, 4, 25, 49, 81]

// function squareArr(newArray) {
//       let array = []  
//   for  (let i = 0; i < newArray.length; i++){
//      array.push(newArray[i] ** 2)
//   }
//   return array
// }
// console.log(squareArr([1, 2, 5, 7, 9]))


// // Bonus - can you return the original array instead of a copy? (modifying in-place)

// function squareArr(newArray) { 
// for  (let i = 0; i < newArray.length; i++){
//    newArray[i] = newArray[i] ** 2;
//     }
//     return newArray
// }
// console.log(squareArr([1, 2, 5, 7, 9]))

let evens = (arr) => {
    return arr.filter((num) => {
      return num % 2 === 0;
    })
  }

  console.log(evens([1, 2, 3, 4, 5, 6,]))