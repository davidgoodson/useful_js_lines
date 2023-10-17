"use strict"

/**
 * EVERY, INCLUDES, REVERSE, JOIN, PUSH, UNSHIFT, POP, SHIFT
 */

let arr1 = [
    "John",
    "David",
    "Mark",
    "Michael",
    "Paul",
    "Peter",
    "Moses",
    "Isaac",
    "Samuel",
  ];
  let arr2 = ["Samuel", "John", "Isaac"];

  // Checking if all elements in one array are in another array. array.every will return a boolean true if all elements are present.
  let includes = arr2.every((element) => arr1.includes(element))
  console.log("All Elements of arr2 in arr1: ", includes)
  includes = arr1.every((element) =>  arr2.includes(element))
  console.log("All Elements of arr1 in arr2: ", includes)

  // Reversing a string
  const str = "i don't want to die"
  const reversedStr = str.split("").reverse().join("")
  console.log("Reversed String: ", reversedStr)

  // PUSH: Add element to end of array and return new length
  let newLen = arr2.push("David", "Ezekiel");
  console.log("New Length of arr2 after pushing: ", newLen)
  console.log("New arr2: ", arr2)

  // UNSHIFT: Add element to start of array and return new length
  newLen = arr2.unshift("Moses", "Elijah");
  console.log("New length of arr2 after unshifting", newLen)
  console.log("New arr2: ", arr2)

  // POP: Remove element from end of array return removed element
  let removed = arr2.pop()
  console.log("Removed Element: ", removed)
  console.log("New arr2: ", arr2)

  // SHIFT: Remove element from start of array and return removed element
  removed = arr2.shift()
  console.log("Removed Element: ", removed)
  console.log("New arr2: ", arr2)