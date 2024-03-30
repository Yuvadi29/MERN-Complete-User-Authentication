import React, { useEffect } from 'react';
import { useCookies } from "react-cookie";

const Welcome = () => {
    const [cookie] = useCookies(["user"]);

    useEffect(() => {
        console.log(cookie.user);
    }, [cookie]);

    return (
        <div className='bg-gray-950 h-screen'>
            <h1 className='text-white text-5xl justify-center items-center text-center'>Welcome {cookie.user.name}</h1>
        </div>
    );
};

export default Welcome;
