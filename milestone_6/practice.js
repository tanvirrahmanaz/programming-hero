// // // // let name = null;
// // // // console.log(typeof name)

// // // console.log(names)  --> undefined

// // const name = "TANVIR RAHMAN"
// // if(name){
// //     console.log("This is truthly value")
// // }
// // else{s
// //     console.log('this is falsy value')
// // }

// // 0 falsy value,none string falsy value

// function sum(num1,num2){
//     var result = num1+ num2;
//     console.log(result)
// }

// sum(10,20)


const loadUser = () =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => showUser(data))
}

const showUser = (users) => {

    const userContainer = document.getElementById('users');

    for(const user of users){
        const li = document.createElement('li');
        li.innerText= user.name;
        userContainer.appendChild(li)
    }
}





// post section 
const handlePost = () =>
{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        displayPost(data)
    })
}

const displayPost = (posts) =>{

    const postContainer = document.getElementById('postContainer');


    for(const post of posts){
        const div= document.createElement("div")

        div.classList.add("card")
        div.innerHTML  = `
            <h1>${post.title}</h1>
            <p>${post.body}</p>
            <button>Details</button>
        `;
        postContainer.appendChild(div)
    }
}