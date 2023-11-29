import { createPortal } from "react-dom";

import Button from "../Button";

import styles from './modal.module.css';
import { useState } from "react";


const portalElement = document.getElementById('portal')


const Modal = () => {
    const [showModal, setShowModal] = useState(true);

    const onCloseModal = () => {
        setShowModal(false);
    }

    const modalContent = (
        <div className={styles["common"]}>
            <div>Modal</div>
            <Button variant='error' type="button" onClick={onCloseModal}> 
                Close Modal
            </Button>
        </div>

    )
    return showModal ? createPortal(modalContent, portalElement) : null;
    
}

export default Modal;