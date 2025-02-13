function noDuplicate(array){
    const unique = [];

    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}
const array = [1,2,3,4,6,1,2,3];
const uniquearray = noDuplicate(array);
console.log(uniquearray)