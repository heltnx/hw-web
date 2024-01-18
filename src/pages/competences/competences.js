
import React, { useEffect } from 'react';
import Layout from '../../layouts/Layout';
import CompetencesList from '../../layouts/competencesList/competencesList';


const Competences = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    return (
        <Layout>
            <div >
                <h1>Compétences</h1>
            </div>
            <CompetencesList />

        </Layout>
    );
};

export default Competences;