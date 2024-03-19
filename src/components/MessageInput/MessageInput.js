// MessageInput.js
import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {PaperAirplaneIcon} from '@heroicons/react/24/solid';
import {generateUUID} from '../../utility/common.utils';
import {getActiveChat, getActivePrompt, getUserSelection} from '../../model/chat/chat.selector';
import {sendMessageAction} from '../../model/chat/chat.actions';

const MessageInput = ({chatId, activeChat, activePrompt}) => {
    const dispatch = useDispatch();
    const [messageText, setMessageText] = useState('');

    const handleSendMessage = () => {
        if (messageText.trim()) {
            const id = generateUUID();
            dispatch(
                sendMessageAction({
                    id,
                    text: messageText,
                    timestamp: Date.now(),
                    chatId: activeChat,
                    sender: true,
                }),
            );// Call passed-down function or dispatch action
            setMessageText('');
        }
    };
    useEffect(() => {
        setMessageText(activePrompt);
    }, [setMessageText, activePrompt]);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="w-full flex items-center rounded-full mt-4 mb-10 p-2 border border-gray-200 dark:border-gray-700">
            <input
                className={`flex-grow px-2 py-1 rounded-md bg-transparent focus:outline-none`}
                placeholder="Enter a prompt here..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={handleKeyPress}
            />
            <button
                className="ml-2 py-1 px-2 text-amber-800 font-bold disabled:opacity-50"
                disabled={!messageText.trim()}
                onClick={handleSendMessage}
            >
                <PaperAirplaneIcon className="h-8 w-8 -rotate-45"/>
            </button>
        </div>
    );
};


export default connect((state) => ({
    activePrompt: getActivePrompt(state),
    userSelection: getUserSelection(state),
    activeChat: getActiveChat(state),
}))(MessageInput);
