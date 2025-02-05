console.log(5 > 10);
console.log(5 >= 10);
console.log(5 <= 10);



var weight = 40;

if(weight<20){
    console.log("I will carry it by myself");
}
else{
    console.log("I will rent a rickshaw");
}

weight<20 ? console.log("carry myself") : console.log("rent a rickshaw")

var price = 500;
var isLeader = true;
if(isLeader === true){
    price = 0;
}
else{
    price = price + 100;
}
console.log(price)

price = isLeader === true ? 0:price + 100; 