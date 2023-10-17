//Array From

let arr = [1, 2, 3, 4, 5, 2, 3];
let arr2 = ["1", "2", "3", "4"];

const unique = Array.from(new Set(arr));
console.log(unique);

const nums = arr2.map(Number);
console.log(nums);

let nestedArr = [1, [2, [3, [4, [5, [6]]]]]]; //5 nested arrays
const flatArr = nestedArr.flat(4); //4 is the depth 

//[ 1, 2, 3, 4, 5, [ 6 ] ] will be the result, living one array in the nest because we specified a depth of 4 and not 5
console.log(flatArr);
