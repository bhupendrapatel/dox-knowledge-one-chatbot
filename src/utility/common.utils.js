import {v4 as uuidv4} from 'uuid';

export const generateUUID = () => uuidv4();

export const parseNewlines = (string) => {
    return string.replace(/```/g, (match, offset, string) => {
        return (offset === 0 || string[offset - 1] !== '`') ? '<code>' : '</code>';
    }).replace(/\n/g, '<br/>');
}
