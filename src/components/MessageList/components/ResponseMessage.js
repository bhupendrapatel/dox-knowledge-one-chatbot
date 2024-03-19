import React from 'react';
import { motion } from 'framer-motion';
import {parseNewlines} from '../../../utility/common.utils';

const ResponseMessage = ({message}) => {
    return (
        <motion.div
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.5}}
        >
            <div className="block overflow-hidden" dangerouslySetInnerHTML={{__html: parseNewlines(message.text)}}></div>
        </motion.div>
    );
};

export default ResponseMessage;
