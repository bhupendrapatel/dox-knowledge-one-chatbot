import React from 'react';
import {motion} from 'framer-motion';
import {useDispatch, useSelector} from 'react-redux';
import {setActiveChat, updateUserSelection} from '../../model/chat/chat.reducer';
import {generateUUID} from '../../utility/common.utils';


const SelectionTile = () => {
    const selectionList = ['Confluence', 'JIRA'];
    const dispatch = useDispatch();

    const handleOnClick = value => {
        dispatch(updateUserSelection(value));
        dispatch(setActiveChat(generateUUID()));  
    };
    return <div className={'flex flex-col h-full my-7 justify-between'}>
        <div className={'flex flex-col justify-end mx-12'}>
        {<motion.div layout transition={{duration: 0.3}} className={'text-6xl'}>{'Hello User,'}</motion.div>}
        {<div className={'text-3xl'}>{'How may I assist you?'}</div>}
        </div>
        <div className={'flex'}>
        {selectionList.map((value, index) => (
            <button key={index} value={value} className='max-w-md mx-auto bg-gray-200 rounded-lg' onClick={handleOnClick}>
                <div key={index} className='p-4'>
                    <h2 className='text-xl font-semibold text-gray-800 mb-2'>{'Suggestion Title'}</h2>
                    <p className='text-gray-600 mb-4'>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at just out felis scelerisque fringilla. Phasellus condimentum sapien nec turpis finibus, in mollis justomattis.'}</p>
                </div>
            </button>
        ))}
        </div>
    </div>
};

export default SelectionTile;