import React from 'react';
import {SparklesIcon} from '@heroicons/react/24/solid';

const SelectionTile = ({message, onClick, index}) => {
    return (<div key={index} className='p-4 relative max-w-52 mx-2 bg-gray-200 rounded-2xl h-60 overflow-y-auto'>
            <h2 key={`title-${index}`} className='text-xl font-semibold text-gray-800 mb-2'>{'Suggestion Title'}</h2>
            <p className='text-gray-600 mb-4 text-sm'>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at just out felis scelerisque fringilla. ${index === 1 ? 'Ut at just out felis scelerisque fringilla' : ''}`}</p>
            <button onClick={() => onClick(message)} className='absolute bottom-4 right-4'><SparklesIcon className='h-10 w-10 fill-amber-400 hover:fill-pink-600 shadow-2xl'/></button>
    </div>);
}

export default SelectionTile;