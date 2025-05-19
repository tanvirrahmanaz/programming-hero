// UpdateUser.jsx

import React from 'react';
import { useRouteLoaderData } from 'react-router';  // <-- ঠিক করা

const UpdateUser = () => {

    const user = useRouteLoaderData("update-user");
    
    const handleSubmit = (e) => {  
        e.preventDefault(); // prevent page reload on submit
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email };
        console.log(updatedUser);

        //update user in the db
        fetch(`http://localhost:5000/users/${user._id}`,{
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {console.log("data after updating user in the db", data)
            if(data.modifiedCount){
                alert('user updated successfully');
                e.target.reset(); // reset the form
            }   
        })
    }
   
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' defaultValue={user.name} /><br />
                <input type="email" name='email' defaultValue={user.email || ''} /><br />
                <input  type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;
