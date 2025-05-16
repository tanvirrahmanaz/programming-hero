import React from 'react';

const User = () => {

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload on submit
        const name = e.target.name.value;
        const email = e.target.email.value;
        const newUser = { name, email };
        console.log(newUser);

        //create user in the db
        fetch('http://localhost:5000/users',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {console.log("data after creating user in the db", data)})
    }

    return (
        <div>
            {/* add user */}
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name'/><br />
                    <input type="email" name='email'/><br />
                    <input type="submit" value="Add User" />
                </form>
                
            </div>
        </div>
    );
};

export default User;