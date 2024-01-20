import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Modale from '../../components/modale/Modale.jsx';
import './contactform.css';

const ContactForm = () => {
    // Effet pour remonter en haut de la page lors du rendu du composant
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    // Initialisation des données du formulaire
    const initialFormData = {
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        privacyPolicyAccepted: false,
    };

    // États du formulaire
    const [formData, setFormData] = useState(initialFormData);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    // Fonction pour ouvrir la fenêtre modale avec un message
    const openModal = (message) => {
        setModalMessage(message);
        setModalIsOpen(true);
    };

    // Fonction pour fermer la fenêtre modale
    const closeModal = () => {
        setModalIsOpen(false);
    };

    // Fonction pour réinitialiser le formulaire
    const resetForm = () => {
        setFormData(initialFormData);
    };

    // Fonction pour gérer les changements dans les champs du formulaire
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Fonction pour envoyer l'email après validation du formulaire
    const sendEmail = () => {
        if (!formData.privacyPolicyAccepted) {
            openModal('Veuillez accepter la politique de confidentialité.');
            return;
        }

        emailjs.send('service_dzeury9', 'template_zms473j', formData, 'PbrHOa8VsC-CtLjHu')
            .then((response) => {
                openModal('Email envoyé avec succès');
                resetForm();
            })
            .catch((error) => {
                openModal('Erreur lors de l\'envoi de l\'email');
            });
    };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
    };

    // Rendu du composant ContactForm
    return (
        <div className='contact-contain'>
            <form onSubmit={handleSubmit}>

                {/* Champs du formulaire */}
                <div>
                    <label htmlFor="firstName">Prénom:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Nom:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="company">Entreprise:</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:<span style={{ color: '#eeb95f' }}>*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">N° de téléphone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:<span style={{ color: '#eeb95f' }}>*</span></label>
                    <textarea
                        className='textarea'
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Pied du formulaire avec la case à cocher et le bouton d'envoi */}
                <div className='form-footer'>
                    <label className='check'>
                        {/* Case à cocher pour accepter la politique de confidentialité */}
                        <input
                            type="checkbox"
                            name="privacyPolicyAccepted"
                            checked={formData.privacyPolicyAccepted}
                            onChange={handleChange}
                            required
                        />
                        <span style={{ color: 'orange' }}> * </span>
                        J'ai lu et accepte la <Link to="/Confidentialite" style={{ color: 'rgb(61 77 79)', cursor: 'pointer', padding: '5px' }}>"politique de confidentialité"</Link>
                    </label>
                    {/* Bouton d'envoi du formulaire */}
                    <button className="custom-button" type="submit">Envoyer</button>
                </div>
            </form>

            {/* Intégration de la fenêtre modale */}
            <Modale className="custom-modal ReactModal__Overlay ReactModal__Overlay--after-open"
                isOpen={modalIsOpen}
                closeModal={closeModal}
                message={modalMessage}
                resetForm={resetForm}
            />
        </div>
    );
};

export default ContactForm;
