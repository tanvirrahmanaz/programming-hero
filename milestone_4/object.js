const age = 21;
const school = "rifle square";
const isPassed = true;
let isDeveloper;
const subject = ["bangla","English","Physics","Math"]


// object 

const bottle = {
    brand : "Apple",
    price : 45,
    color : "White",
    isClean : false,
    'selling area' : ['dhaka','comilla', 'jashore']
}

console.log(bottle.brand)
console.log(bottle['color'])
console.log(bottle['selling area'])

// keys 
const keys = Object.keys(bottle);
const value = Object.values(bottle);
console.log(keys)
console.log(value)


//for of : array
//for in : object
for(const prob in bottle){
    console.log(prob, bottle[prob])
}

