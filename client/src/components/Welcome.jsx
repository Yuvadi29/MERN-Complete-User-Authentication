import React, { useEffect, useState } from 'react';
import { BASEURL } from '../API';
import axios from 'axios';
axios.defaults.withCredentials = true;

const Welcome = () => {
    const [user, setUser] = useState(null);

    const getUsers = async () => {
        try {
            const response = await axios.get(`${BASEURL}/api/user`, {
                withCredentials: true
            });
            return response.data;
        } catch (error) {
            console.log("Error fetching user data:", error);
            return null;
        }
    };

    useEffect(() => {
        getUsers().then((data) => setUser(data));
    }, []);

    return (
        <div>
            {user ? <h1>{user.name}</h1> : <p>Loading...</p>}
        </div>
    );
};

export default Welcome;
