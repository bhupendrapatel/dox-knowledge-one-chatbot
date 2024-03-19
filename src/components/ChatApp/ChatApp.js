// ChatApp.js
import React, { useEffect, useContext } from 'react'; // Import useContext
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import ThemeContext from '../../context/themeContext';
import {MAX_TOKENS, MODEL, TEMP} from '../../constants/constants';
import {post} from '../../utility/http'; // Import ThemeContext
import {sendMessage, clearState} from '../../model/chat/chat.reducer';
import {generateUUID} from '../../utility/common.utils';

const ChatApp = () => {
    const dispatch = useDispatch();
    const {activeChatId} = useSelector((state) => state.chat);
    const {theme} = useContext(ThemeContext); // Use useContext to access the current theme and the toggle function

    useEffect(() => {
        return () => dispatch(clearState());
        // Fetch messages from server or initial setup (if needed)
    }, []); // Empty dependency array to run only once

    const handleSendMessage = async ({id, text}) => {
        console.log(text);
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
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 88px)',
                backgroundColor: 'transparent',
                color: theme === 'light' ? 'black' : 'white',
                margin: '0 10%',
            }}>
            <MessageList/>
            <MessageInput chatId={activeChatId} onSendMessage={handleSendMessage}/>
        </motion.div>
    );
};

export default ChatApp;
