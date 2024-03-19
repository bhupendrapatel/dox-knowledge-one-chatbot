import React from 'react';
import {CloudArrowUpIcon, SparklesIcon} from '@heroicons/react/24/solid';

const SelectionTile = ({message, onClick, index}) => {
    return (<div key={index} className="p-4 relative max-w-52 mx-2 bg-gray-200 rounded-2xl h-60 overflow-y-auto">
        <h2 key={`title-${index}`} className="text-xl font-semibold text-gray-800 mb-2">
            {message.title}
        </h2>
        <p className="text-gray-600 mb-4 text-l">
            {message.prompt}
        </p>
        <button onClick={() => onClick(index === 0 ? message.title : message.prompt)} className="absolute bottom-4 right-4">
            {message.title === 'Prompt' ? <SparklesIcon className="h-10 w-10 fill-amber-400 hover:fill-pink-600 shadow-2xl"/> : <CloudArrowUpIcon className="h-10 w-10 fill-amber-400 hover:fill-pink-600 shadow-2xl"/>}
        </button>
    </div>);
};

export default SelectionTile;
