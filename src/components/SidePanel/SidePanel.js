import React, {useContext} from 'react';
import {PencilSquareIcon, ChatBubbleLeftRightIcon} from '@heroicons/react/24/outline';
import {useDispatch} from 'react-redux';
import ThemeContext from '../../context/themeContext';
import ChatList from './Components/ChatList/ChatList';
import {setActiveChat, setActivePrompt, updateUserSelection} from '../../model/chat/chat.reducer';
import {generateUUID} from '../../utility/common.utils';
import './SidePanel.scss';
import LogoSVG from '../LogoSVG/LogoSVG';

const SidePanel = ({chatList}) => {
    const {theme} = useContext(ThemeContext);
    const dispatch = useDispatch();
    const handleOnNewChatClick = () => {
        dispatch(updateUserSelection(null));
        dispatch(setActivePrompt(''));
        dispatch(setActiveChat(generateUUID()));
    };

    return (
        <div className='h-screen left-0 top-0 overflow-y-auto flex flex-col'>
            <div className='px-3 py-6 flex flex-col flex-grow'>
                <button className='flex items-center justify-between py-2 px-4 border-transparent hover:bg-gray-200 rounded' onClick={handleOnNewChatClick}>
                    <span className='text-m font-medium text-gray-500'>New Chat</span>
                    <PencilSquareIcon className='h-6 w-6 text-gray-500'/>
                </button>
                <ChatList/>
            </div>
            <div className='px-3 py-6 mt-auto bg-transparent flex flex-row justify-center items-center'>
                <LogoSVG size={50} />
                <div
                    className="bg-transparent flex flex-col ml-2.5 items-start text-transparent bg-gradient-to-r from-yellow-400 to-pink-700 bg-clip-text">
                    <p className="text-center font-bold">KnowledgeOne</p>
                    <p className='text-center font-bold'>ChatBot</p>
                </div>

            </div>
        </div>
    );
};

export default SidePanel;
