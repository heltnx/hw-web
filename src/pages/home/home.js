import { useEffect } from 'react';
import Layout from '../../layouts/Layout'
import { Link } from 'react-router-dom';
// style
import './home.css'
import Button from '../../components/button/Button.jsx'
import silhouette from '../../assets/images/silhouette.png'
import Slideshow from '../../components/slideswhow/Slideshow.jsx';

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    return (
        <Layout >
            <div className="home">
                <h1>Intégration Sites Web</h1>
                <div className='a-propos container'>
                    <div className='text'>
                        <p> Je viens de terminer une formation à distance et j'ai obtenu le :
                            <span> titre professionel "<strong><nobr>intégrateur-web "</nobr>.</strong></span><br></br>
                            Cela m'a permis d'acquérir de nouvelles compétences dans le domaine du web.<br></br>
                            Je possède également un <span>titre professionnel de <strong><nobr> " Webdesigner ".</nobr></strong></span></p>
                        <p> Je suis une personne de confiance, rigoureuse et méthodique, qui aime relever des défis et apprendre de nouvelles choses.
                            J'ai créé mon auto-entreprise <span><strong><nobr>" HW-WEB "</nobr></strong></span>, afin de pouvoir travailler aussi en freelance'.
                        </p>

                        <p> Je souhaite collaborer avec des entreprises ou des entrepreneurs, qui ont besoin de déléguer leurs projets web, pour se consacrer davantage à leurs clients.</p>

                    </div>
                    <div className='contact-part'>
                        <img src={silhouette} alt="silouette travaillant sur un ordinateur, dans un ordinateur" />
                        <span> Mon profil vous intéresse ? <br></br>n'hésitez pas à me contacter !</span>
                        <Button>
                            <Link to="/contact" >Contact</Link>
                        </Button>
                    </div>
                </div>
                <div className="mesRealisations">

                    <div className='slider'>
                        <Slideshow />
                        <div className='textRealisation'>
                            <h2>Mes Réalisations</h2>
                            <p>Chaque projet est une étape de mon parcours, démontrant ma capacité à transformer des concepts en expériences utilisateur concrètes.</p>
                            <p>Ces réalisations reflètent ma passion pour la création de sites web fonctionnels, esthétiques et intuitifs.</p>
                            <p>En tant que professionnelle du web, j'ai également obtenu le titre de webdesigner et réalisé quelques projets en 2020.
                                Découvrez mon <Link to="https://hwweb.fr/" target='blank'>" Portfolio de Webdesigner "</Link>
                            </p>
                            <div className="realisationsButton">
                                <Button >
                                    <Link to="/realisations" >Réalisations d'Intégration-web</Link>
                                </Button>
                            </div>

                        </div>
                    </div>

                    <div className='competencesPart'>
                        <div>
                            <img src={process.env.PUBLIC_URL + "/assets/images/progress.png"} alt="competences progression" />

                        </div>
                        <p>Vous préférez le détail des compétences évaluées avec un acces aux réalisations qui les utilisent, accedez à la page:</p>
                        <Button>
                            <Link to="/competences">Mes compétences</Link>
                        </Button>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Home;