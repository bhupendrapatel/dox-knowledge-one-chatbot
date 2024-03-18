export const SEND_MESSAGE = 'SEND_MESSAGE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const SET_THEME = 'SET_THEME';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const sendMessageAction = (message) => ({
    type: SEND_MESSAGE,
    payload: message,
});

export const receiveMessageAction = (message) => ({
    type: RECEIVE_MESSAGE,
    payload: message,
});

export const loadingAction = () => ({
    type: LOADING,
});

export const errorAction = (error) => ({
    type: ERROR,
    payload: error,
});

export const setThemeAction = (theme) => ({
    type: SET_THEME,
    payload: theme,
});

export const deleteMessageAction = (messageId) => ({
    type: DELETE_MESSAGE,
    payload: messageId,
});
