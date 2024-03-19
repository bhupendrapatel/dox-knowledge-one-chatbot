import React, {useContext} from 'react';
import {connect} from 'react-redux';
import ThemeContext from '../../../../context/themeContext';
import ChatItem from './Components/ChatItem/ChatItem';
import {getActiveChat, getChatList} from '../../../../model/chat/chat.selector';


export const ChatList = ({chatList, activeChat}) => {
    const {theme} = useContext(ThemeContext);
    return (
        <div className={'px-2 mt-6 py-5 flex-column'}>
            <div className={`${theme === 'light' ? 'text-gray-500': 'text-gray-50'}`}>Recent</div>
            <div className={'hide-scrollbar'}>
                {Object.values(chatList).map((item, index) => (
                    <ChatItem key={index} activeChat={activeChat} message={item}/>
                ))}
            </div>
        </div>
    );
};

export default connect(state => {
    return {
        activeChat: getActiveChat(state),
        chatList: getChatList(state),
    }
})(ChatList);
