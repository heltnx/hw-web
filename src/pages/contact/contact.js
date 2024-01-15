import React from 'react';
import Layout from '../../layouts/Layout';
import ContactForm from '../../layouts/contactForm/ContactForm';

const Contact = () => {
    return (
        <Layout>
            <div className="home">
                <h1>Contact</h1>
            </div>
            <ContactForm className='contact_contain' />
        </Layout>
    );
};

export default Contact;