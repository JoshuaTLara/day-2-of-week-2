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


  const sayHello = (name) => {
    console.log(`sayHello name param: ${name}`);
    return `Hello, ${name}!`;
  };
  const irishGreeting = (name) => `Top o' the marnin' to ye, ${name}!`;
  
  const greet = (greetName, greetingCallback) => {
    // `name` `greetingCallback` are parameters of the function `greet`
    console.log(greetingCallback(greetName));
  };
  
  const greetPerson = (username, country) => {
    if (country === "Ireland") {
      greet(username, () => irishGreeting(username));
    } else {
      greet(username, () => sayHello(username));
    }
  };
  
  // get user input with their username and country
  greetPerson("Cat", "Ireland");
  
  // greet("Josh", sayHello); // invoke `greet`
  
  const words = ["apple", "berry", "cherry"];
  
  let capMapArr = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
    // whatever is returned here becomes the corresponding element in the new array
  });
  
  // words.forEach((word, i) => {
  //   words[i] = word[0].toUpperCase() + word.slice(1);
  // });
  
  console.log(capMapArr);
  console.log(words);