const country = 'Bangladesh';
const division = 'NewKhale';
const district = `B-baria`;
const thana = new String("demra");

console.log(typeof thana)
console.log(thana)
console.log(division)

console.log(country[3])

// tolowercase,to uppercase, trin(string er samne pisae jody kono space thkae tkhn eita use korte hoi )

const part = division.slice(3,);
console.log(part)

const sentence = "I am a good and hardworking person.";
console.log(sentence.split(' '))

const first = 'abid';
const last = 'Nabid';

const fullname = first + " " + last;
console.log(fullname)

console.log(first.concat(' ').concat(last))


// reverse strign 

let reverse = '';
for(const letter of sentence){
    reverse = letter+ reverse;
}
console.log(reverse)

const reversed = sentence.split('').reverse().join('')
console.log(reversed )