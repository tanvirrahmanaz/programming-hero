import React from 'react';
import { useRouteLoaderData } from 'react-router';

const UpdateUser = () => {

    const user = useRouteLoaderData();
    console.log("USER DATA",user);
   
    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <form action="">
                <input type="text" name='name' defaultValue={user.name}/><br />
                <input type="email" name='email'/><br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;