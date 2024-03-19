// MessageList.js
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import ThemeContext from '../../context/themeContext';
import {getActivePrompt, getError, getMessages} from '../../model/chat/chat.selector';
import SelectionTiles from '../SelectionTile/SelectionTiles';

const messageVariants = {
  enter: (direction) => ({
    y: direction === 'up' ? 0 : 100,
    opacity: 10,
  }),
  exit: {
    y: '-100px',
    opacity: 100,
    transition: {
      duration: 0.5,
    },
  },
};

const MessageList = ({messages, isLoading, activePrompt}) => {
  const {theme} = useContext(ThemeContext);

  return (
      <>{messages.length > 0 || activePrompt ? (
          <div className=' p-6 overflow-y-auto h-[40rem]'>
              <ul className='space-y-2'>
                  {messages.map((message, index) => (
                      <li
                          className={`flex ${
                              index % 2 === 0 ? 'justify-end' : 'justify-start'
                          }`}
                          key={index}
                      >
                          {index % 2 !== 0 && (
                              <img
                                  className='object-cover w-10 h-10 rounded-full mr-5'
                                  src='/amdocs-a.svg'
                                  alt='Amdocs Logo'
                              />
                          )}
                          <div
                              className={`max-w-xl px-4 py-2 ${
                                  index % 2 === 0 ? 'bg-gray-100' : 'text-gray-700'
                              } rounded shadow ${
                                  theme === 'dark' &&
                                  (index % 2 !== 0 ? 'bg-gray-100' : 'bg-gray-700 text-gray-100')
                              }`}
                          >
                              <span className='block'>{message.text}</span>
                          </div>
                      </li>
                  ))}
              </ul>
              {isLoading && (
                  <li className={`flex justify-start mt-5`} key='loading-indicater'>
                      <img
                          className='object-cover w-10 h-10 rounded-full mr-5'
                          src='/amdocs-a.svg'
                          alt='username'
                      />

                      <div
                          className={`max-w-xl px-4 py-2 rounded shadow ${
                              theme === 'dark' ? 'bg-gray-100 text-gray-700' : 'text-gray-700'
                          }`}
                      >
                          <span className={`block`}>Loading...</span>
                      </div>
                  </li>
              )}
          </div>
      ) : <SelectionTiles/>}
      </>
  );
};

export default connect((state) => ({
    activePrompt: getActivePrompt(state),
    messages: getMessages(state),
    error: getError(state),
}))(MessageList);
