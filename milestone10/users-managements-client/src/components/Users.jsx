import React,{use} from 'react';

const Users = ({usersPromise}) => {
    const users = use(usersPromise);
    console.log(users);
    return (
        <div>
            
        </div>
    );
};

export default Users;