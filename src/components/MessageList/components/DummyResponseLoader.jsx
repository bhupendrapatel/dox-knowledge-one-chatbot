import React from "react";

const DummyResponseLoader = ({theme}) => {
    return (
        <div className={`flex justify-start mt-5`} key='loading-indicater'>
            <img
                className='object-cover w-10 h-10 rounded-full mr-5'
                src='/favicon.ico'
                alt='username'
            />

            <div
                className={`max-w-xl px-4 py-2 rounded shadow ${
                    theme === 'dark' ? 'bg-gray-100 text-gray-700' : 'text-gray-700'
                }`}
            >
                <span className={`block`}>Loading...</span>
            </div>
        </div>
    );
}

export default  DummyResponseLoader;