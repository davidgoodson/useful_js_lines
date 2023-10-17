"use strict"

/**
 * FILTER, FIND, FINDINDEX
 */

const list = [
    {
      firstName: "Kiran",
      lastName: "Kumar",
      sex: "Female",
      salary: 25000,
    },
    {
      firstName: "Mohan",
      lastName: "Srivastav",
      sex: "Male",
      salary: 21000,
    },
    {
      firstName: "Mary",
      lastName: "Kom",
      sex: "Female",
      salary: 13000,
    },
    {
      firstName: "Mary",
      lastName: "Kom",
      sex: "Female",
      salary: 43000,
    },
    {
      firstName: "John",
      lastName: "Doe",
      sex: "Male",
      salary: 23000,
    },
    {
      firstName: "James",
      lastName: "Bond",
      sex: "Male",
      salary: 19000,
    },
  ];

  // FIND: Returns the first item that is matched
  let result = list.find((item, index, array) => item.salary >= 20000) // find an entry where salary is greater or equal to 20000
  console.log("Result after FIND: ", result)

  // FINDINDEX: Returns the index of the item with when the match is found. Returns the first match
  result = list.findIndex((item) => item.salary < 20000)
  console.log("Result after FINDINDEX: ", result)

  // FILTER: Returns an arry of matches that satisfy the condition/provided code
  result = list.filter((item, index, arr) => item.salary >= 20000)
  console.log("Result after FILTER: ", result)
  result =  list.filter((item, index, arr) => item.salary < 20000)
  console.log("Result after FILTER: ", result)