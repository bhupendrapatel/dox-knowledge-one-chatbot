import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import chatReducer from '../reducer/chat.reducer';
// import other reducers here

const rootReducer = combineReducers({
    chat: chatReducer,
    // other reducers go here
});

export default rootReducer;

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
