// Filtering out unique occurrances

const letters = ["a", "b", "a", "c", "d", "b", "a", "d", "e", "c", "b"];

const unique = letters.filter((item, index, arr) => {
    return(arr.indexOf(item) === index)
});

console.log("First Method Using Filter: ", unique)

const uniqueSet = Array.from(new Set(letters))

console.log("Second Method Using Set: ", uniqueSet);