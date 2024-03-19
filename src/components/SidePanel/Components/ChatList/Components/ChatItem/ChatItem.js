import React, {useContext, useState} from 'react';
import {useDispatch} from 'react-redux';
import {ChatBubbleLeftRightIcon, EllipsisVerticalIcon, SparklesIcon} from '@heroicons/react/24/outline';
import ThemeContext from '../../../../../../context/themeContext';
import {setActiveChat, deleteMessage, setActivePrompt} from '../../../../../../model/chat/chat.reducer';
import {truncateString} from '../../ChatItem.utils';
import MenuPopover from '../MenuPopover/MenuPopover';

const ChatItem = ({message, activeChat}) => {
    const {theme} = useContext(ThemeContext);
    const dispatch = useDispatch();

    const handleOnDelete = () => {
        dispatch(deleteMessage(message[0].id));
    };

    const handleOnClick = () => {
        dispatch(setActiveChat(message[0].chatId));
    };

    const onPromptClick = (value) => {
        dispatch(setActivePrompt(value.text));
        dispatch(setActiveChat(value.chatId));
    }

    return (
        <>
            <div
                className={`flex justify-between items-center text-sm mt-2 py-2 ${theme === 'light' ? 'text-gray-500 hover:bg-gray-300' : 'text-gray-50 hover:bg-gray-500'} ${message?.[0].chatId === activeChat && 'bg-amber-500'} rounded-full cursor-pointer`}
                onClick={handleOnClick}>
                <ChatBubbleLeftRightIcon className='h-6 w-6 ml-3 me-2'/>
                <div className={'flex-grow px-2 overflow-hidden overflow-ellipsis whitespace-nowrap'}>{message?.[0]?.text}</div>
                <MenuPopover onClick={handleOnDelete} menu={<EllipsisVerticalIcon className='h-6 w-6 mx-2'/>}/>
            </div>
            {(message || []).map((item, index) => (
                <div key={index} className={`flex justify-between items-center text-sm py-1 group cursor-pointer ${theme === 'light' ? 'text-gray-500' : 'text-gray-50'}`} onClick={() => onPromptClick(item)}>
                    <SparklesIcon className='h-6 w-6 ml-8 text-amber-400 group-hover:text-pink-600' style={{minWidth: '24px' }}/>
                    <div className={'flex-grow px-2 overflow-hidden overflow-ellipsis whitespace-nowrap'}>{item.text}</div>
                </div>
            ))}
        </>
    );
};

export default ChatItem;
