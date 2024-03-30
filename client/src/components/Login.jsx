import React, { useState } from 'react';
import axios from "axios";
import { BASEURL } from "../API";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setCookie] = useCookies(["user"]);


  const sendRequest = async () => {
    const res = await axios
      .post(`${BASEURL}/api/login`, {
        email,
        password,
      })
      .catch((err) => console.log(err));
    const { data } = res;
    setCookie("user", data.user);
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    sendRequest().then(() => navigate("/user"));
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-950'>
      <form className="max-w-sm " onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input
            value={email}
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder='name@gmail.com'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            value={password}
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder='Password'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login into account</button>
      </form>
    </div>
  );
};

export default Login;
