// MessageInput.js
import React, {useContext, useState} from 'react';
import { useDispatch } from 'react-redux';
import {PaperAirplaneIcon} from '@heroicons/react/24/solid';
import ThemeContext from '../../context/themeContext';

const MessageInput = ({ onSendMessage }) => {
    const dispatch = useDispatch();
    const theme = useContext(ThemeContext);

    const [messageText, setMessageText] = useState('');

    const handleSendMessage = () => {
        if (messageText.trim()) {
            onSendMessage(messageText); // Call passed-down function or dispatch action
            setMessageText('');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="flex items-center rounded-full my-10 mx-20 p-2 border border-gray-200 dark:border-gray-700">
            <input
                className={`flex-grow px-2 py-1 rounded-md bg-transparent focus:outline-none`}
                placeholder="Enter a prompt here..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button className="ml-2 py-1 px-2 text-amber-800 font-bold disabled:opacity-50"
                disabled={!messageText.trim()}
                onClick={handleSendMessage}>
                <PaperAirplaneIcon className="h-8 w-8 -rotate-45" />
            </button>
        </div>
    );
};

export default MessageInput;
