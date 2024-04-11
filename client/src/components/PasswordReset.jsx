import React, { useState } from 'react';

const PasswordReset = () => {
    const [email, setEmail] = useState('');


    const setResetPassword = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-950">
            <form className="max-w-sm" onSubmit={setResetPassword}>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-xl font-medium text-white"
                    >
                        Your email
                    </label>
                    <input
                        value={email}
                        type="email"
                        id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] h-[70px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light p-3"
                        placeholder="name@gmail.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Send Reset Link
                </button>
            </form>
        </div>
    );
};

export default PasswordReset;
