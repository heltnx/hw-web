import React from 'react';
import Layout from '../../layouts/Layout';
import CompetencesList from '../../layouts/competencesList/competencesList';


const Competences = () => {

    return (
        <Layout>
            <div className="home">
                <h1>Compétences</h1>
            </div>
            <CompetencesList />

        </Layout>
    );
};

export default Competences;