import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layouts/Layout';
import '../landing404/landing404.css'

const Landing404 = () => {
    return (
        <Layout>
            <div className='landing404'>
                <span>404</span>
                <p>La page que vous demandez n'existe pas.</p>
                <Link className="l404" to="/">Retourner sur la page d’accueil</Link>
            </div>
        </Layout>
    );
};

export default Landing404;