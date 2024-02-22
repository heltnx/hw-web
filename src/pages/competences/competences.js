
import React, { useEffect } from 'react';
import Layout from '../../layouts/Layout';
import CompetencesList from '../../layouts/competencesList/competencesList';
import Skills from '../../components/skill/skill';


const Competences = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    return (
        <Layout >
            <div className="competences-layout">
                <div >
                    <h1>Compétences</h1>
                </div>
                <CompetencesList />
                <Skills />
            </div>
        </Layout>
    );
};

export default Competences;