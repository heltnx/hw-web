import React from 'react';
import Layout from '../../layouts/Layout';
import CompetencesList from '../../layouts/competencesList/competencesList';


const Competences = () => {

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