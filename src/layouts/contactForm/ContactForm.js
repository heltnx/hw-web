import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import Modale from '../../components/modale/Modale.jsx';
import './contactform.css';

const ContactForm = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    const initialFormData = {
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        privacyPolicyAccepted: false,
    };

    const [formData, setFormData] = useState(initialFormData);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const openModal = (message) => {
        setModalMessage(message);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const resetForm = () => {
        setFormData(initialFormData);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
    };

    return (
        <div className='contact-contain'>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="firstName">Prénom:</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lastName">Nom:</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="company">Entreprise:</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:<span style={{ color: '#eeb95f' }}>*</span></label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="phone">N° de téléphone:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:<span style={{ color: '#eeb95f' }}>*</span></label>
                    <textarea className='textarea'
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className='form-footer'>
                    <label className='check'>
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
