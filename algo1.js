// Counting the number of occurrences of each letter in a string using forEach

const str = "The elephant is lifted eleven floors easily with the help of an electricity elevator"

const strArr = str.split('')

const count = {}

strArr.forEach((letter) => {
    if(count[letter]) count[letter]++
    else count[letter] = 1  
})

console.log(count)