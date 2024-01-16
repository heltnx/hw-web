// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';
import './modale.css';

Modal.setAppElement('#root');

function ModalComponent({ isOpen, closeModal, message, resetForm }) {
    const handleCloseModal = () => {
        closeModal();
        if (resetForm) {
            resetForm();
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Example Modal"
            className="custom-modal"
        >
            <p>{message}</p>
            <button onClick={handleCloseModal}>Fermer</button>
        </Modal>
    );
}

export default ModalComponent;
