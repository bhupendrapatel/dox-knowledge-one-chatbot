import React, {useContext, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {ChatBubbleLeftRightIcon, EllipsisVerticalIcon, SparklesIcon} from '@heroicons/react/24/outline';
import ThemeContext from '../../../../../../context/themeContext';
import {setActiveChat, deleteMessage, setActivePrompt} from '../../../../../../model/chat/chat.reducer';
import MenuPopover from '../MenuPopover/MenuPopover';

const ChatItem = ({scrollRef, message, activeChat}) => {
    const {theme} = useContext(ThemeContext);
    const dispatch = useDispatch();
    const itemRef = useRef();
    const [menuPosition, setMenuPosition] = useState({top: 0, left: 0, display: 'block'});

    const handleOnDelete = () => {
        dispatch(deleteMessage(message[0].chatId));
    };

    const handleOnClick = () => {
        dispatch(setActiveChat(message[0].chatId));
    };

    const onPromptClick = (value) => {
        dispatch(setActivePrompt(value.text));
    }

    useEffect(() => {
        const handleScroll = () => {
            // Calculate new position here based on scroll position
            if (itemRef.current === null) return;

            const rect = itemRef.current?.getBoundingClientRect();

            let newPosition = {top: rect.top + 30, left: rect.width - 20, display: 'block'};

            if (rect.top < 88 || rect.bottom > (window.innerHeight - 98)) {
                // Hide the element
                newPosition = {top: rect.top + 30, left: rect.width - 15, display: 'none'};

            } else {
                // Show the element
                newPosition = {top: rect.top + 30, left: rect.width - 15, display: 'block'};
            }
            setMenuPosition(newPosition);
        };

        scrollRef.current.addEventListener('scroll', handleScroll);

        return () => {
            scrollRef.current.removeEventListener('scroll', handleScroll);
        };
    }, [scrollRef]);

    return (
        <>
            <div
                ref={itemRef}
                className={`flex justify-between items-center text-sm mt-2 py-2 ${theme === 'light' ? 'text-gray-500 hover:bg-gray-300' : 'text-gray-50 hover:bg-gray-500'} ${message?.[0].chatId === activeChat && 'bg-amber-500'} rounded-full cursor-pointer`}
                onClick={handleOnClick}>
                <ChatBubbleLeftRightIcon className='h-6 w-6 ml-3 me-2' style={{minWidth: '24px'}} />
                <div className={'flex-grow px-2 overflow-hidden overflow-ellipsis whitespace-nowrap'}>{message?.[0]?.text}</div>
                <MenuPopover top={menuPosition.top} left={menuPosition.left} display={menuPosition.display} onClick={handleOnDelete} menu={<EllipsisVerticalIcon className='h-6 w-6 mx-2'/>}/>
            </div>
            {(message || []).map((item, index) => (
                item.sender && <div key={index} className={`flex justify-between items-center text-sm py-1 group cursor-pointer ${theme === 'light' ? 'text-gray-500' : 'text-gray-50'}`} onClick={() => onPromptClick(item)}>
                    <SparklesIcon className='h-6 w-6 ml-8 text-amber-400 group-hover:text-pink-600' style={{minWidth: '24px' }}/>
                    <div className={'flex-grow px-2 overflow-hidden overflow-ellipsis whitespace-nowrap'}>{item.text}</div>
                </div>
            ))}
        </>
    );
};

export default ChatItem;
