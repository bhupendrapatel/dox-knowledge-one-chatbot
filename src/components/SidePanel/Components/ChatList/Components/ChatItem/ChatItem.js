import React, {useContext} from 'react';
import {useDispatch} from 'react-redux';
import {ChatBubbleLeftRightIcon, EllipsisVerticalIcon} from '@heroicons/react/24/outline';
import ThemeContext from '../../../../../../context/themeContext';
import {setActiveChat, deleteMessage} from '../../../../../../model/chat/chat.reducer';
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

    return (<div className={`flex items-center text-sm ${theme === 'light' ? 'text-gray-500 hover:bg-gray-300': 'text-gray-50 hover:bg-gray-500'} ${message?.[0].chatId === activeChat && 'bg-pink-300'} py-5 hover:bg-blue-500 rounded`} onClick={handleOnClick}>
        <ChatBubbleLeftRightIcon className='h-6 w-6 text-gray-400 mx-2'/>
        <div className={'px-2'}>{truncateString(message?.[0]?.text, 15)}</div>
        <MenuPopover disabled={message?.[0].chatId === activeChat} onClick={handleOnDelete} menu={<EllipsisVerticalIcon className='h-6 w-6 text-gray-800 mx-2'/>}/>
    </div>)
};

export default ChatItem;