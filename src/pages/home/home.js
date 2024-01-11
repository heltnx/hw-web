import React from 'react';
import Layout from '../../layouts/Layout'
import { NavLink } from 'react-router-dom';
// style
import './home.css'
import Button from '../../components/button/Button.jsx'
import silhouette from '../../assets/images/silhouette.png'

const Home = () => {
    return (
        <Layout >
            <div className="home">
                <h1>Intégration Sites Web</h1>
                <div className='a-propos container'>
                    <div className='text'>
                        <p> Je viens de terminer une formation à distance et obtenu le:
                            <span><nobr><strong>" titre professionel d'intégrateur-web ".</strong></nobr></span><br></br>
                            Cela m'a permis d'acquérir de nouvelles compétences dans le domaine du web.<br></br>
                            Je possède également un <span><strong><nobr>" titre professionnel de web-designer ".</nobr></strong></span></p>
                        <p> Je suis une personne de confiance, rigoureuse et méthodique, qui aime relever des défis et apprendre de nouvelles choses.
                            J'ai créé mon auto-entreprise <span><strong><nobr>" HW-WEB "</nobr></strong></span>, afin de pouvoir travailler aussi en freelance'.
                        </p>

                        <p> Je souhaite collaborer avec des entreprises ou des entrepreneurs qui ont besoin de déléguer leurs projets web pour se consacrer davantage à leurs clients.</p>

                    </div>
                    <div className='contact-part'>
                        <img src={silhouette} alt="silouette travaillant sur un ordinateur, dans un ordinateur" />
                        <span> Mon profil vous intéresse ? <br></br>n'hésitez pas à me contacter !</span>
                        <Button>
                            <NavLink to="/contact" >Contact</NavLink>
                        </Button>
                    </div>

                </div>
            </div>
        </Layout >
    );
};

export default Home;