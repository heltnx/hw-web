// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';
import './modale.css';

// Définit l'élément racine pour l'accessibilité du composant Modale
Modal.setAppElement('#root');

// Composant ModalComponent
function ModalComponent({ isOpen, closeModal, message, resetForm }) {
    // Fonction pour fermer la modale et réinitialiser le formulaire si nécessaire
    const handleCloseModal = () => {
        closeModal();
        // Réinitialise le formulaire si la fonction resetForm est fournie
        if (resetForm) {
            resetForm();
        }
    };

    // Rendu du composant ModalComponent
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Example Modal"
            className="custom-modal"
        >
            {/* Affiche le message de la modale */}
            <p>{message}</p>
            {/* Bouton pour fermer la modale */}
            <button onClick={handleCloseModal}>Fermer</button>
        </Modal>
    );
}

export default ModalComponent;
