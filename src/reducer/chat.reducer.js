// chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messages: [],
    theme: 'light',
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        sendMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
    },
});

export const { sendMessage, toggleTheme } = chatSlice.actions;
export default chatSlice.reducer;
