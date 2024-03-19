// ChatApp.js
import React, { useEffect, useContext, useState } from 'react'; 
import { useDispatch, useSelector, connect } from 'react-redux';
import { sendMessage } from '../../model/chat/chat.reducer';
import { getActiveChat } from '../../model/chat/chat.selector';
import { generateUUID } from '../../utility/common.utils';
import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';
import ThemeContext from '../../context/themeContext';
import { MAX_TOKENS, MODEL, TEMP } from '../../constants/constants';
import { post } from '../../utility/http'; // Import ThemeContext

const ChatApp = ({ activeChat }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [requestSendId, setRequestSendId] = useState('');
  const dispatch = useDispatch();
  let setTimer;
  const { messages } = useSelector((state) => state.chat);
  const { theme } = useContext(ThemeContext); // Use useContext to access the current theme and the toggle function

  console.log(messages);

  useEffect(() => {
    // Fetch messages from server or initial setup (if needed)
  }, []); // Empty dependency array to run only once

  useEffect(() => {
    if (requestSendId) {
      setIsLoading(true);
      clearTimeout(setTimer);
      setTimer = setTimeout(() => {
        dispatch(
          sendMessage({
            id: generateUUID(),
            text: 'Result text .',
            timestamp: Date.now(),
            chatId: activeChat,
          })
        );
        setIsLoading(false);
      }, 3000);
    }
  }, [requestSendId]);

  const handleSendMessage = async (text) => {
    console.log(text);
    try {
      const response = await post('completions', {
        messages: [
          {
            role: 'user',
            content: text,
          },
        ],
        max_tokens: MAX_TOKENS,
        model: MODEL,
        temperature: TEMP,
      });
      console.log(response);
    } catch (error) {
      console.error('Error sending message: ', error);
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
      <MessageList isLoading={isLoading} />
      <MessageInput setRequestSendId={setRequestSendId} />
    </div>
  );
};

export default connect((state) => {
  return {
    activeChat: getActiveChat(state),
  };
})(ChatApp);
