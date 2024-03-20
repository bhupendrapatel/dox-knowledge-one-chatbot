export const truncateString = (str, maxLength, truncationText = '...') => {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.slice(0, maxLength - truncationText.length) + truncationText;
    }
};

export const sliceMessages = (messages, showMore) => {
    if (showMore) {
        return (messages || []).filter(v => v.sender);
    } else {
        return (messages || []).filter(v => v.sender).slice(0, 5);
    }
};
