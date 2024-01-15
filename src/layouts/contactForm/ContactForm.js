import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './contactform.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        privacyPolicyAccepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const sendEmail = () => {
        if (!formData.privacyPolicyAccepted) {
            console.log('Veuillez accepter la politique de confidentialité.');
            return;
        }

        emailjs.send('service_dzeury9', 'template_zms473j', formData, 'YOUR_USER_ID')
            .then((response) => {
                console.log('Email envoyé avec succès :', response);
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi de l\'email :', error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
    };

    return (
        <div className='contact-contain' >
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="firstName">Prénom:</label>
                    <input type="text" id="firstName" name="firstName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lastName">Nom:</label>
                    <input type="text" id="lastName" name="lastName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="company">Entreprise:</label>
                    <input type="text" id="company" name="company" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email:<span style={{ color: '#eeb95f' }}>*</span></label>
                    <input type="email" id="email" name="email" onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="phone">N° de téléphone:</label>
                    <input type="tel" id="phone" name="phone" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:<span style={{ color: '#eeb95f' }}>*</span></label>
                    <textarea className='textarea'
                        id="message"
                        name="message"
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
                        J'ai lu et accepte la <Link to="/Confidentialite" target="blank" style={{ color: '#666673', cursor: 'pointer', padding: '5px', hover: "white" }}>"politique de confidentialité"</Link> de ce site.
                    </label>

                    <button className="custom-button"
                        type="submit" >
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
