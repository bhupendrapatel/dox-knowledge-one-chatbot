import React from 'react';
import LogoSVG from '../../LogoSVG/LogoSVG';
import Loader from '../../Loader/Loader';

const DummyResponseLoader = ({theme}) => {
    return (
        <div className={`flex justify-start mt-5`} key='loading-indicater'>
            <LogoSVG size={40}/>
            <div
                className={`max-w-xl px-4 ml-5 py-2 rounded-lg shadow ${
                    theme === 'dark' ? 'bg-gray-100 text-gray-700' : 'bg-gray-100 text-gray-700'
                }`}
            >
                <Loader />
            </div>
        </div>
    );
}

export default DummyResponseLoader;
