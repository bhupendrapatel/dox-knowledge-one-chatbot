// ChatApp.js
import React, { useEffect, useContext, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { sendMessage, clearState} from '../../model/chat/chat.reducer';
import { getActiveChat } from '../../model/chat/chat.selector';
import { generateUUID } from '../../utility/common.utils';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import ThemeContext from '../../context/themeContext';
import { MAX_TOKENS, MODEL, TEMP } from '../../constants/constants';
import { post } from '../../utility/http'; // Import ThemeContext

const ChatApp = ({ activeChat }) => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const {messages} = useSelector((state) => state.chat);
    const {theme} = useContext(ThemeContext); // Use useContext to access the current theme and the toggle function

    const handleSendMessage = async ({id, text}) => {
        console.log(text);
        setIsLoading(true);
        try {
            const response = await post('completions', {
                messages: [{
                    role: 'user',
                    content: text,
                }],
                max_tokens: MAX_TOKENS,
                model: MODEL,
                temperature: TEMP,
            });
            console.log(response);
            dispatch(sendMessage({
                text,
                id: generateUUID(),
                timestamp: Date.now(),
                chatId: id,
            }));
        } catch (error) {
            console.error('Error sending message: ', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 88px)',
                backgroundColor: 'transparent',
                color: theme === 'light' ? 'black' : 'white',
            }}
            className='container mx-auto max-w-5xl'
        >
            <MessageList isLoading={isLoading}/>
            <MessageInput onSendMessage={handleSendMessage}/>
        </div>
    );
};
export default connect((state) => {
  return {
    activeChat: getActiveChat(state),
  };
})(ChatApp);
