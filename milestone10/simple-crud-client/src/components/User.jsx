import React,{use} from 'react';

const User = ({userPromise}) => {

    const initialUser = use(userPromise)
    const [ users, setUsers] = React.useState(initialUser);
 
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
        .then(data => {console.log("data after creating user in the db", data)
            if(data.insertedId){
                newUser._id = data.insertedId; // add the id to the new user
                const newUsers = [...users, newUser]; // add the new user to the users array
                setUsers(newUsers); // update the state
                alert('user added successfully');
                e.target.reset(); // reset the form
            }   
        })
    }


    const handleUserDelete = (id) => {
        console.log('delete user',id);/ /
        // delete user from the db
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
        .then(data => {
            if(data.deleteCount){

                const remainingUsers = users.filter(user => user._id !== id);
                 // filter out the deleted user 
                 setUsers(remainingUsers); // update the state
                alert('user deleted successfully');
                console.log("data after deleting user from the db", data);
            }
            
        })
    }

    return (
        <div>
            {/* add user */}
            <div>
                <p>user: {users.length}</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name'/><br />
                    <input type="email" name='email'/><br />
                    <input type="submit" value="Add User" />
                </form>
            </div>

            {/* view useres  */}
            <div>
                {
                    users.map(user => <p key={user.id}>
                        {user.name} : {user.email}
                        <button onClick={() => handleUserDelete(user._id)}>X</button>
                        </p>)
                }
            </div>
        </div>
    );
};

export default User;