"use strict"

const employees = [
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
  
  const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fortune butto", type: "oil", quantity: 19 },
    { name: "fish", type: "meat", quantity: 22 },
    { name: "spinach", type: "vegetables", quantity: 12 },
    { name: "apples", type: "fruits", quantity: 41 },
    { name: "beef", type: "meat", quantity: 15 },
    { name: "vaseline", type: "oil", quantity: 14 },
    { name: "sukuma", type: "vegetables", quantity: 27 },
  ];


  /**
   * REDUCE
   */

  // Using reduce to compute total salary of male employees from the employees array
  const totalMaleSalary = employees.reduce((total, employee) => {
    return total + (employee.sex == "Male"? employee.salary : 0)
  }, 0)
  // OUTPUT
  console.log("Total Male Employees Salary: ", totalMaleSalary)

  
  // Grouping with reduce
  // The function to implement grouping
  const groupBy = (arr, key) => {
    return arr.reduce((group, item) => {
        group[item[key]] = group[item[key]] ?? []
        group[item[key]].push(item)
        return group
    }, {})
  }

  const grouped = groupBy(inventory, "type")
  console.log("Categories: ",  grouped)