
import React, { useEffect } from 'react';
import Layout from '../../layouts/Layout';
import ContactForm from '../../layouts/contactForm/ContactForm';

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

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