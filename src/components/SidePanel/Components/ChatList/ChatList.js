import React, {useContext} from 'react';
import {connect} from 'react-redux';
import ThemeContext from '../../../../context/themeContext';
import ChatItem from './Components/ChatItem/ChatItem';
import {getActiveChat, getChatList} from '../../../../model/chat/chat.selector';


export const ChatList = ({scrollRef, chatList, activeChat}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={'px-2 mt-6 py-5 flex-column overflow-y-auto'}>
            <div className={`text-left ${theme === 'light' ? 'text-gray-500': 'text-gray-50'}`}>Recent</div>
            <div>
                {Object.values(chatList).reverse().map((item, index) => (
                    <ChatItem key={index} scrollRef={scrollRef} activeChat={activeChat} message={item}/>
                ))}
            </div>
        </div>
    );
};

export default connect(state => ({
    activeChat: getActiveChat(state),
    chatList: getChatList(state),
}))(ChatList);
