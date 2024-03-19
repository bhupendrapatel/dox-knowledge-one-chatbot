export const truncateString = (str, maxLength, truncationText = '...') => {
    if (str.length <= maxLength) {
        return str;
    } else {
        return str.slice(0, maxLength - truncationText.length) + truncationText;
    }
};