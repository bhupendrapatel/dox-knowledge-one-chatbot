import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {getShowDialog, getAdditionalDetails} from '../../model/chat/chat.selector';
import {setShowDialog, updateAdditionalDetails} from '../../model/chat/chat.reducer';
import {addEmbeddings, uploadFiles} from '../../model/chat/chat.actions';
import CreateFromConfluence from "./components/CreateFromConfluence";
import UploadFile from "./components/UploadFile";

const GlobalDialog = ({showDialog, additionalDetails}) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [multipleFiles, setMultipleFiles] = useState([]);

    console.log(additionalDetails);

    const handleOnClose = () => {
        setData({});
        dispatch(updateAdditionalDetails({}));
        dispatch(setShowDialog(false));
    };

    const handleOnApply = () => {
        setLoading(true);
        dispatch(addEmbeddings(data, setLoading));
    };

    const handleFileChange = (e) => {
        console.log([...e.target.files]);
        setMultipleFiles([...e.target.files]);
    };

    const handleFileUpload = async () => {
        const formData = new FormData();
        [...multipleFiles].forEach((file, index) => {
            formData.append(`files_${index}`, file);
        });
        setLoading(true);
        dispatch(uploadFiles(formData, setLoading));
    }

    const isApplyDisabled = !(['space', 'page'].every(v => data[v]));

    return (
        <>
            {(showDialog && additionalDetails === 'Create') && <CreateFromConfluence {...{setData, loading, handleOnApply, handleOnClose, isApplyDisabled}}/>}
            {(showDialog && additionalDetails === 'Upload') && <UploadFile {...{handleFileChange, handleFileUpload, loading, handleOnClose}}/>}
        </>
    );
};

export default connect(state => ({
    showDialog: getShowDialog(state),
    additionalDetails: getAdditionalDetails(state),
}))(GlobalDialog);
