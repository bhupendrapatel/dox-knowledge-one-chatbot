import Loader from '../../Loader/Loader';
import React from "react";

const UploadFile = ({handleFileChange, handleFileUpload, loading, handleOnClose}) => {
    return (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex">
            <div className="relative bg-white w-1/3 max-w-xl m-auto rounded-md shadow-lg">
                <h2 className="text-2xl px-5 py-3 font-semibold bg-pink-500 text-gray-50 shadow-2xl">
                    Upload
                </h2>
                <div className={'flex flex-col pt-5 px-5'}>
                    <input type='file' accept='.pdf,.txt,.zip,.doc' multiple name='sourses' onChange={handleFileChange}/>
                </div>
                <div className="px-4 py-4 mt-2 flex justify-end shadow-2xl">
                    <button onClick={handleFileUpload}
                        className={`rounded font-semibold justify-center align-middle content-center text-2xl px-4 mx-3 text-transparent bg-gradient-to-r from-yellow-400 to-pink-700 bg-clip-text`}>
                        {loading ? <Loader size={50}/> : 'Upload'}
                    </button>
                    <button onClick={handleOnClose} className="rounded font-semibold text-2xl text-black">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UploadFile;
