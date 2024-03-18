// chatSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {generateUUID} from '../../utility/common.utils';

const initialState = {
    messages: {},
    theme: 'dark',
    activeChat: generateUUID(),
    loading: false,
    error: null,
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        sendMessage: (state, action) => {
            state.messages = {
                ...state.messages,
                [action.payload.id]: action.payload,
            };
        },
        receiveMessage: (state, action) => {
            state.messages = {
                ...state.messages,
                [action.payload.id]: action.payload,
            };
        },
        activeChat: (state, action) => {
            state.activeChat = action.payload;
        },
        setLoading: (state) => {
            state.loading = !state.loading;
        },
        deleteMessage: (state, action) => {
            delete state.messages[action.payload];
        },
        error: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { sendMessage, activeChat, setLoading, deleteMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
