import React,{use} from 'react';

const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users);

    const handleAddUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const User = {name, email};
        console.log(User); 

        //create user in the server
        fetch('http://localhost:3000/users').then(res => res.json()).then(data => {console.log(data)});
    }
    return ( 
        <div>

            <form onSubmit={handleAddUser}> 
                <input name='name' type="text" /><br />
                <input name='email' type="email" /><br />
                <input type="submit" value="Add User" />
            </form>

            {
                users.map(user => <p key={user.id}>{user.name} : {user.email}</p>)
            }
        </div>
    );
};

export default Users;