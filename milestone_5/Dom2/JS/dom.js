console.log('External file')

// option 2 event hadle 
function makeYellow(){
    document.body.style.backgroundColor= 'yellow';
}
function makeRed(){
    document.body.style.backgroundColor= 'red';
} 


// option 3 elements by id 
const btnMakeBlue= document.getElementById('btn-make-blue')
btnMakeBlue.onclick = function btnMakeBlue(){
    document.body.style.backgroundColor= 'blue' 
}


