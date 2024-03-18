import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {thunk} from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from '@reduxjs/toolkit';
import chatReducer from '../model/chat/chat.reducer';
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

export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk),
);
export const persistor = persistStore(store);
