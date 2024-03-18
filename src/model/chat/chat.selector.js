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
    state => state.chat.activeChat,
    activeChat => activeChat,
);

export const getError = createSelector(
    state => state.chat.error,
    error => error,
);
