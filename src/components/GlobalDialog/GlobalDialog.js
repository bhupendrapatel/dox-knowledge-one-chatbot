import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {getShowDialog} from '../../model/chat/chat.selector';
import {setShowDialog, setActivePrompt, updateAdditionalDetails} from '../../model/chat/chat.reducer';

const GlobalDialog = ({showDialog}) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});

    const handleOnClose = () => {
        setData({});
        dispatch(updateAdditionalDetails({}));
        dispatch(setShowDialog(false));
    };

    const handleOnApply = () => {
        dispatch(setActivePrompt('Should look like this?'));
        dispatch(updateAdditionalDetails(data));
        dispatch(setShowDialog(false));
    }

    const isApplyDisabled = !(['space', 'page'].every(v => data[v]));

    return (<>
            {showDialog && (
                <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
                    <div className="relative bg-white w-1/3 max-w-xl m-auto rounded-md shadow-lg">
                        <h2 className="text-2xl px-5 py-3 font-semibold bg-gradient-to-r from-yellow-400 to-pink-700 opacity-80">{'Add additional details to analyse'}</h2>
                        <div className={'flex flex-col pt-5 px-5'}>
                            <input placeholder={'Confluence space'} className={`flex-grow px-5 py-2 my-2 rounded-md bg-gray-100`} onChange={e => setData(data => ({...data, space: e.target.value}))}></input>
                            <input placeholder={'Page name'} className={`flex-grow px-5 py-2 my-2 rounded-md bg-gray-100`} onChange={e => setData(data => ({...data, page: e.target.value}))}></input>
                            <span className={'flex items-center py-2'}><input className={'mx-2  h-4 w-4'} type={'checkbox'} onClick={() => {
                                setData(data => ({...data, includeChild: !data.includeChild}))
                            }}></input>{'Include child'}</span>
                        </div>
                        <div className="px-4 py-4 flex justify-end">
                            <button onClick={handleOnApply} disabled={isApplyDisabled} className={`rounded font-semibold text-2xl px-4 ${isApplyDisabled ? 'text-gray-500' : 'text-transparent bg-gradient-to-r from-yellow-400 to-pink-700 bg-clip-text'}`}>
                                Apply
                            </button>
                            <button onClick={handleOnClose} className="rounded font-semibold text-2xl text-black">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default connect(state => ({
    showDialog: getShowDialog(state),
}))(GlobalDialog);
