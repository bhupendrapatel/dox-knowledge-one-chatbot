// MessageList.js
import React, {useContext} from 'react';
import { motion } from 'framer-motion';
import ThemeContext from '../../context/themeContext';

const messageVariants = {
    enter: (direction) => ({
        y: direction === 'up' ? 0 : 100,
        opacity: 10,
    }),
    exit: {
        y: '-100px',
        opacity: 100,
        transition: {
            duration: 0.5
        },
    },
};

const MessageList = () => {
    const {theme} = useContext(ThemeContext);
    const messages = [
        {text: 'Hello, world!'},
        {text: 'In the vast expanse of the enchanted forest, where ancient trees stand tall and whispers of magic dance on the breeze, there exists a hidden village known as Evergreen Haven. Tucked away f'},
    ];

    return (
        <motion.div
            className="flex flex-col overflow-y-auto h-full"
            initial={messageVariants.exit}
            animate={messageVariants.enter('up')}
            exit={messageVariants.exit}>
            {messages.map((message, index) => (
                <motion.div
                    key={index}
                    initial={messageVariants.enter('up')}
                    animate={messageVariants.enter('up')}
                    variants={messageVariants}
                    custom={index}
                    exit={messageVariants.exit}
                    className={`px-8 py-4 mb-2 rounded-lg shadow ${theme === 'light' ? 'bg-gray-100':  'bg-neutral-700'}`}
                >
                    <p className={theme === 'light' ? 'text-gray-500': 'text-gray-50'}>{message.text}</p>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default MessageList;
