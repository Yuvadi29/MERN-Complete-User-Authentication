import React from 'react';

const Landing = () => {
    return (

        <section class="text-gray-400 body-font bg-gray-900">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h2 class="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">Coding Adda Presents</h2>
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Complete User Authentication using JWT and Cookies </h1>
                </div>
                <div class="flex flex-wrap">
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                        <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">BcrptJS</h2>
                        <p class="leading-relaxed text-base mb-4">Hash your Passwords using BcryptJs Package</p>
                        <a class="text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                        <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">JWT Token</h2>
                        <p class="leading-relaxed text-base mb-4">Enrich your Data with JWT as an added security.</p>
                        <a class="text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                        <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">Frontend Integration</h2>
                        <p class="leading-relaxed text-base mb-4">Integrate your backend with Frontend.</p>
                        <a class="text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
                        <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">MongoDB Database</h2>
                        <p class="leading-relaxed text-base mb-4">Store your Data in MongoDB Database.</p>
                        <a class="text-indigo-400 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started</button>
            </div>
        </section>
    );
};

export default Landing;
