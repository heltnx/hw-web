import React from 'react';
import Layout from '../../layouts/Layout';
import ContactForm from '../../layouts/contactForm/ContactForm';

const Contact = () => {
    return (
        <Layout className="contact">
            <div>
                <h1>Contact</h1>
            </div>
            <ContactForm className='contact_contain' />
        </Layout>
    );
};

export default Contact;