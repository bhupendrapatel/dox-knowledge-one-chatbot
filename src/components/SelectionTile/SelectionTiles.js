import React from 'react';
import {motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import {setActiveChat, setActivePrompt, updateUserSelection, setShowDialog, updateAdditionalDetails} from '../../model/chat/chat.reducer';
import {generateUUID} from '../../utility/common.utils';
import SelectionTile from './Components/SelectionTile/SelectionTile';
import {MainTitle} from './Components/MainTitle/MainTitle';

const selectionList = [
    {title: 'Create', prompt: 'Create your own knowledge base from Confluence.'},
    {title: 'Upload', prompt: 'Upload your files to knowledge base from PDFs or Text Documents.'},
    {title: 'Prompt', prompt: 'How to find validation failure fix?'},
    {title: 'Prompt', prompt: 'Query to count validation issues.'},
    {title: 'Prompt', prompt: 'How to do re-indexing in CatalogOne?'},
];


const SelectionTiles = () => {
    const dispatch = useDispatch();

    const handleOnClick = value => {
        if (value === 'Create' || value === 'Upload') {
            dispatch(setShowDialog());
            dispatch(updateAdditionalDetails(value))
        } else {
            const chatId = generateUUID();
            dispatch(updateUserSelection(value));
            dispatch(setActivePrompt(value))
            dispatch(setActiveChat(chatId));
        }
    };

    return <div className={'flex flex-col h-full my-7 justify-around'}>
        <div className={'flex flex-col justify-end mx-12'}>
        {<MainTitle/>}
        {<motion.h1 initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} transition={{duration: 1, delay: 0.5}} className={'text-3xl px-2'}>{'How may I assist you?'}</motion.h1>}
        </div>
        <motion.div style={{opacity: 0}} transition={{duration: 2}} animate={{opacity: 1}} className={'flex px-10'}>
        {selectionList.map((message, index) => (
            <SelectionTile key={index} message={message} onClick={handleOnClick} index={index}/>
        ))}
        </motion.div>
    </div>
};

export default SelectionTiles;
