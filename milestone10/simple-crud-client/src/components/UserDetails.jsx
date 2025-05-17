import React from 'react';
import { useRouteLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useRouteLoaderData();
    console.log(user);
    return (
        <div>
            <p>hello userdetails section</p>
        </div>
    );
};

export default UserDetails;