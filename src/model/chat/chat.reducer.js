// chatSlice.js
import {createSlice} from '@reduxjs/toolkit';
import {generateUUID} from '../../utility/common.utils';

//  const state = {
//      activeChat: 'chat1',
//      userSelection: 'confluence',
//         messages: {
//             uuid1: {
//                 id: 'uuid1',
//                     text: 'message be it sender or receiver',
//                     chatId: 'sessionUUID',
//                     timestamp: Date.now(),
//                     sender: true,
//             },
//             uuid2: {
//                 id: 'uuid2',
//                     text: 'message be it sender or receiver',
//                     chatId: 'sessionUUID',
//                     timestamp: Date.now(),
//                     sender: false,
//             },
//         }
//
// };

const initialState = {
    activePrompt: '',
    messages: {},
    theme: 'dark',
    activeChat: generateUUID(),
    loading: false,
    error: null,
    userSelection: null,
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        clearState: () => initialState,
        setActivePrompt: (state, action) => {
            state.activePrompt = action.payload;
        },
        updateUserSelection: (state, action) => {
            state.userSelection = action.payload;
        },
        sendMessage: (state, action) => {
            state.activePrompt = '';
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
        setActiveChat: (state, action) => {
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

export const {sendMessage, activeChat, setLoading, setActivePrompt, deleteMessage, setActiveChat, clearState, updateUserSelection} = chatSlice.actions;
export default chatSlice.reducer;
