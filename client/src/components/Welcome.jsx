import React, { useEffect } from 'react';
import { useCookies } from "react-cookie";

const Welcome = () => {
    const [cookie] = useCookies(["user"]);

    useEffect(() => {
        console.log(cookie.user); // Log user data from cookie
    }, [cookie]);

    return (
        <div>
            <h1>Welcome {cookie.user.name}</h1>
        </div>
    );
};

export default Welcome;
