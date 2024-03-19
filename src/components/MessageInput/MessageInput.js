// MessageInput.js
import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {PaperAirplaneIcon} from '@heroicons/react/24/solid';
import {generateUUID} from '../../utility/common.utils';
import {sendMessage} from '../../model/chat/chat.reducer';
import {getActiveChat, getUserSelection} from '../../model/chat/chat.selector';

const MessageInput = ({chatId, activeChat, onSendMessage, userSelection}) => {
    const dispatch = useDispatch();

    const [messageText, setMessageText] = useState('');

    const handleSendMessage = () => {
        if (messageText.trim()) {
            dispatch(sendMessage({
                id: generateUUID(),
                text: messageText,
                timestamp: Date.now(),
                chatId: activeChat,
            }));
            onSendMessage({id: chatId, text: messageText}); // Call passed-down function or dispatch action
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
            <input disabled={!userSelection}
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

export default connect((state) => ({
    userSelection: getUserSelection(state),
    activeChat: getActiveChat(state),
}))(MessageInput);
