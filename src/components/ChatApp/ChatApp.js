// ChatApp.js
import React, {useContext} from 'react';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import ThemeContext from '../../context/themeContext';

const ChatApp = () => {
    const {theme} = useContext(ThemeContext); // Use useContext to access the current theme and the toggle function

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
            <MessageList />
            <MessageInput />
        </div>
    );
};
export default ChatApp;
