// chatSlice.js
import { createSlice } from '@reduxjs/toolkit';
import {generateUUID} from '../../utility/common.utils';

const initialState = {
    messages: {},
    theme: 'dark',
    activeChat: generateUUID(),
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
        activeChat: (state, action) => {
            state.activeChat = action.payload;
        }
    },
});

export const { sendMessage, activeChat } = chatSlice.actions;
export default chatSlice.reducer;
