const numbers = [2,3,36,11,4,6,9]

// const numbers_asc = numbers.sort() // not working properly
const numbers_asc = [...numbers].sort(function(a,b){ return a-b}) 
const numbers_dsc = [...numbers].sort(function(a,b){ return b-a}) 

console.log(numbers_asc);
console.log(numbers_dsc);
