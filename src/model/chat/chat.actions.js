import {sendMessage, error, setLoading, receiveMessage, setShowDialog} from './chat.reducer';
import {post, fileUpload} from '../../utility/http';
import {generateUUID} from '../../utility/common.utils';
export const sendMessageAction = (message) => {
    return async (dispatch) => {
        dispatch(setLoading());
        try {
            dispatch(sendMessage(message));
            const data = await post('chat', {prompt: message.text});

            if (typeof data.answer === 'string'){
                dispatch(receiveMessage({
                    id: generateUUID(),
                    text: data.answer,
                    sender: false,
                    timestamp: Date.now(),
                    chatId: message.chatId,
                }));
            }
            dispatch(setLoading());
        } catch (err) {
            dispatch(error(err));
            dispatch(setLoading());
        }
    };
};

export const addEmbeddings = (data, setLoader) => {
    return async (dispatch) => {
        try {
            const response = await post('download', {
                space: data.space,
                page_name: data.page,
                index_child: data.includeChild || false,
            });
            console.log(response);
            setLoader(false);
            dispatch(setShowDialog(false));
        } catch (err) {
            console.log(err);
            setLoader(false);
        }
    };
}

export const uploadFiles = (formData, setLoader) => {
    return async dispatch => {
        try {
            const response = await fetch('http://10.249.170.114:8080/v1/upload', {
                method: 'POST',
                body: formData
            });
            console.log(response);
            dispatch(setShowDialog(false));
        } catch (err) {
            console.log(err);
        } finally {
            setLoader(false);
        }
    }
}