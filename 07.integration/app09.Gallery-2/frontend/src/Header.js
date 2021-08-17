import React, { Fragment, useState, useRef, useEffect } from 'react';
import Modal from "react-modal";
import styles from "./assets/scss/modal.scss";


Modal.setAppElement('body');

export default function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const refForm = useRef(null);
    // const [comment, setComment] = useState("");
    // const [selectedFile, setSelectedFile] = useState(null);
    const [images, setImages] = useState([]);


    const handleSubmit = async function(e) {
        try {
            e.preventDefault();
            console.log("fetch or axios file upload!");
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(async () => {
        try {
            const response = await fetch('/api', {
                method:'get',
                headers:{'Content-Type': 'application/json'}
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            setImages(json.data);
        } catch(err){
            console.error(err);
        }
    }, []);


    return (
        <Fragment>
            <button onClick={ () => setModalIsOpen(true) }>upload</button>
            <br/><br/>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={ () => setModalIsOpen(false) }
                shouldCloseOnOverlayClick={ true }
                className={ styles.Modal }
                overlayClassName={ styles.Overlay }
                style={ {content: {width: 350}} }
                contentLabel="modal05 example">
                <h1>비밀번호입력</h1>
                <div>
                    <form
                        onSubmit={ handleSubmit }
                        ref={ refForm }>
                        <label>코멘트</label>
                        <br/>
                        <input
                            type={ 'text' }
                            name={ 'comment' }/>
                        <br/><br/>
                        <label>이미지</label>
                        <br/>
                        <input
                            type={ 'file' }
                            name={ 'file' } />
                    </form>
                </div>
                <div className={ styles['modal-dialog-buttons'] }>
                    <button onClick={ () => {
                        // refForm.current.submit();
                        refForm.current.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
                    } }>확인</button>
                    <button onClick={ () => setModalIsOpen(false) }>취소</button>
                </div>
            </Modal>


        </Fragment>
    );
}