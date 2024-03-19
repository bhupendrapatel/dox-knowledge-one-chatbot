import {createSelector} from '@reduxjs/toolkit';

export const getMessages = createSelector(
    state => state.chat,
    chat => {
        const messages = Object.values(chat?.messages) || [];
        const activeChat = chat.activeChat;
        return messages.filter(message => message.chatId === activeChat);
    },
);

export const getActiveChat = createSelector(
    state => state.chat,
    chat => chat.activeChat,
);

export const getError = createSelector(
    state => state.chat,
    chat => chat.error,
);

export const getUserSelection = createSelector(
    state => state.chat,
    chat => chat.userSelection,
);

export const getChatList = createSelector(
    state => state.chat.messages,
    messages => {
        return Object.values(messages).reduce((acc, curr) => {
            if (acc[curr.chatId]) {
                acc[curr.chatId] = [...acc[curr.chatId], curr];
            } else {
                acc[curr.chatId] = [curr];
            }
            return acc;
        }, {});
    }
);
