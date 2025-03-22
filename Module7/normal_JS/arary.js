const  person = {
    name : "hero ",
    age: 30,
    friends : ["bd","CN","rahim"],
    family:{
        fatherName: "kolim uddin",
        motherName: "jorina"
    }
}

const jsonData = JSON.stringify(person);
const planData = JSON.parse(jsonData);



console.log(planData)



const handleAddToStorage = () => {
    const name = document.getElementById("name").value;
    localStorage.setItem("name",name)
}