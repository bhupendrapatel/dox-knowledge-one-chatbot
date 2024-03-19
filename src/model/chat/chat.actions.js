import {sendMessage, error, setLoading, receiveMessage} from './chat.reducer';
import {post} from '../../utility/http';
import {generateUUID} from '../../utility/common.utils';
export const sendMessageAction = (message) => {
    return async (dispatch) => {
        dispatch(setLoading());
        try {
            dispatch(sendMessage(message));
            const data = await post('chat', {query: message.text});
            console.log(data);
            if (typeof data.kwargs.content === 'string'){
                dispatch(receiveMessage({
                    id: generateUUID(),
                    text: data.kwargs.content,
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
