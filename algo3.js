/**
 * SPLICE AND SLICE
 */

const members = ["Vivian", "Joseph", "Martha", "Zoe", "Jacob", "Desire"];

const firstFour = members.slice(0,4) // returns 4 items from index 0
console.log(firstFour)

const deletedElements = members.splice(2, 2, "David", "Paul", "Martin") // Start at index 2, remove 2 items, replace with David, Paul and Martin

console.log("Deleted: ", deletedElements);
console.log("Original: ", members)