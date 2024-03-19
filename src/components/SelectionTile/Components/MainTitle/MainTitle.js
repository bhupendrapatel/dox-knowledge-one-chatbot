import React from 'react';
import {motion} from 'framer-motion';

export const MainTitle = () => {
    return (<motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 2}} layout className={'text-9xl text-transparent bg-gradient-to-r from-yellow-400 to-pink-700 w-3/4 bg-clip-text'}>
        {'Hello User,'.split('').map((letter, index) => (
        <motion.span key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{delay: 0.04 * index}}>
            {letter}
        </motion.span>
    ))}</motion.div>)
}