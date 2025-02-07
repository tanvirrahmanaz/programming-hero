const number = [1,2,3,4,5,6];
console.log(number)

number.pop();
console.log(number)

number.push(8);
console.log(number)

number.shift();
console.log(number) //shift array er first digit k remove kore

const out1 = number.pop();
const out2 = number.pop();

console.log(out1, out2)

console.log(number.includes(3))
console.log(number.includes(9))

console.log(number.indexOf(4))
console.log(number.indexOf(1))