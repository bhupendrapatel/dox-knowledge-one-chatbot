import React, {useContext} from 'react';
import {PencilSquareIcon} from '@heroicons/react/24/outline';
import ThemeContext from '../../context/themeContext';
import './SidePanel.scss';

const SidePanel = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className="w-72 fixed h-screen left-0 top-0 overflow-y-auto flex flex-col">
            <div className="px-3 py-6 flex flex-col flex-grow">
                <button className="flex items-center justify-between py-2 px-4 border-transparent hover:bg-gray-200 rounded">
                    <span className='text-m font-medium text-gray-500'>New Chat</span>
                    <PencilSquareIcon className='h-6 w-6 text-gray-500' />
                </button>
                {/*<ul>*/}
                {/*    <li className="mb-2">Item 1</li>*/}
                {/*    <li className="mb-2">Item 2</li>*/}
                {/*    <li className="mb-2">Item 3</li>*/}
                {/*</ul>*/}
            </div>
            <div className="px-3 py-6 mt-auto bg-transparent flex flex-row justify-center items-center">
                <svg viewBox={`0 0 1024 1024`} className={'logo'}>
                    <path d="M544.712 122.828h-456.919l45.031 155.627h411.884c42.944 0 77.843 34.927 77.843 77.843v77.843h-389.069c-128.752 0-233.494 104.746-233.494 233.505 0 128.748 104.742 233.526 233.494 233.526h311.226c128.752 0 233.501-104.777 233.501-233.526v-311.355c0-128.717-104.746-233.463-233.501-233.463zM622.555 667.639c0 42.916-34.927 77.84-77.843 77.84h-311.226c-42.913 0-77.84-34.92-77.84-77.84 0-42.923 34.927-77.85 77.84-77.85h389.069v77.85z"></path>
                    <path d="M1000.933 434.165h-141.868v155.63h186.931z"></path>
                </svg>
                <div className="bg-transparent flex flex-col ml-2.5 items-start">
                    <p className="text-center font-bold text-gray-500">KnowledgeOne</p>
                    <p className="text-center font-bold text-gray-500">ChatBot</p>
                </div>

            </div>
        </div>
    );
};

export default SidePanel;
