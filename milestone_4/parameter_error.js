function multiply(num1,num2){
    if(typeof num!== 'number' || typeof num2!=='number'){
        return "please provide a number"
    }
    const mult = num1*num2;
    return mult;
}

const result = multiply('4','seven');
console.log(result);