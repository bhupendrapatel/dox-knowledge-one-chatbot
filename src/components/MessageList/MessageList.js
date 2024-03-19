// MessageList.js
import React, {useContext} from 'react';
import {connect} from 'react-redux';
import ThemeContext from '../../context/themeContext';
import {getActivePrompt, getError, getLoading, getMessages} from '../../model/chat/chat.selector';
import SelectionTiles from '../SelectionTile/SelectionTiles';
import LogoSVG from "../LogoSVG/LogoSVG";
import DummyResponseLoader from './components/DummyResponseLoader';


const MessageList = ({messages, loading, activePrompt}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <>{messages.length > 0 || activePrompt ? (
            <div className="p-6 overflow-y-auto h-[40rem] hide-scrollbar">
                <ul className="space-y-2">
                    {messages.map((message, index) => (
                        <li key={index} className={`flex ${message.sender ? 'justify-end' : 'justify-start'}`}>
                            {!message.sender && (<LogoSVG size={40}/>)}
                            <div className={`max-w-xl px-4 ml-5 py-2 rounded shadow ${theme === 'dark' ? (message.sender ? 'text-gray-700 bg-gray-100' : 'bg-gray-700 text-gray-100') : (message.sender ? 'bg-gray-100' : 'bg-gray-700 text-gray-100')}`}>
                                <span className="block">{message.text}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                {loading && <DummyResponseLoader theme={theme}/>}
            </div>
        ) : <SelectionTiles/>}
        </>
    );
};

export default connect((state) => ({
    activePrompt: getActivePrompt(state),
    messages: getMessages(state),
    error: getError(state),
    loading: getLoading(state),
}))(MessageList);
