import Loader from '../../Loader/Loader';
import React from "react";

const CreateFromConfluence = ({setData, loading, handleOnApply, handleOnClose, isApplyDisabled}) => {
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
            <div className="relative bg-white w-1/3 max-w-xl m-auto rounded-md shadow-lg">
                <h2 className="text-2xl px-5 py-3 font-semibold bg-pink-500 text-gray-50 shadow-2xl">
                    Create
                </h2>
                <div className={'flex flex-col pt-5 px-5'}>
                    <input placeholder={'Confluence space'} className={`flex-grow px-5 py-2 my-2 rounded-md bg-gray-100`} onChange={e => setData(data => ({...data, space: e.target.value}))}></input>
                    <input placeholder={'Page name'} className={`flex-grow px-5 py-2 my-2 rounded-md bg-gray-100`} onChange={e => setData(data => ({...data, page: e.target.value}))}></input>
                    <label className={'flex items-center py-2'} htmlFor='include'>
                        <input id='include' className={'mx-2  h-4 w-4'}
                               type={'checkbox'} onClick={() => {
                            setData(data => ({...data, includeChild: !data.includeChild}));
                        }}></input>
                        Include child
                    </label>
                </div>
                <div className="px-4 py-4 mt-2 flex justify-end shadow-2xl">
                    <button onClick={handleOnApply} disabled={loading || isApplyDisabled}
                            className={`rounded font-semibold justify-center align-middle content-center text-2xl px-4 mx-3 ${isApplyDisabled ? 'text-gray-500' : 'text-transparent bg-gradient-to-r from-yellow-400 to-pink-700 bg-clip-text'}`}>
                        {loading ? <Loader size={50}/> : 'Apply'}
                    </button>
                    <button onClick={handleOnClose} className="rounded font-semibold text-2xl text-black">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateFromConfluence;
