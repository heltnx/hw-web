import React from 'react';
import Button from '../../components/button/Button'
import { Link } from 'react-router-dom';
import './confidentialite.css';


const Confidentialite = () => {
    return (
        <div>
            <div >
                <h1>Politique de confidentialité</h1>
            </div>
            <div className='confidentialite'>
                <Button>
                    <Link to="/" >close</Link>
                </Button>
                <p>Votre vie privée est importante pour nous. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations.</p>

                <h2>Collecte d'informations</h2>
                <p>Nous collectons des informations lorsque vous remplissez notre formulaire de contact. Les informations collectées incluent votre nom, votre adresse e-mail, votre numéro de téléphone, votre entreprise et votre message.</p>

                <h2>Utilisation des informations</h2>
                <p>Les informations que nous collectons lors de l'utilisation du formulaire de contact sont utilisées uniquement dans le but de répondre à votre demande et de vous fournir les informations demandées.</p>

                <h2>Divulgation à des tiers</h2>
                <p>Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles identifiables à des tiers. Cela n'inclut pas les tiers de confiance qui nous aident à exploiter notre site Web ou à mener nos activités, tant que ces parties acceptent de garder ces informations confidentielles.</p>

                <h2>Protection des informations</h2>
                <p>Nous mettons en œuvre une variété de mesures de sécurité pour garantir la sécurité de vos informations personnelles. Nous utilisons des protocoles de communication sécurisés (HTTPS) pour protéger la transmission de vos informations, et nous utilisons un stockage sécurisé pour protéger les informations que nous collectons.</p>

                <h2>Cookies</h2>
                <p>Nous n'utilisons pas de cookies sur notre site Web.</p>

                <h2>Consentement</h2>
                <p>En utilisant notre formulaire de contact, vous consentez à notre politique de confidentialité.</p>

                <h2>Modifications de la politique de confidentialité</h2>
                <p>Toute modification apportée à notre politique de confidentialité sera publiée sur cette page.</p>

                <p>Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, veuillez nous contacter à "hwweb21@gmail.com.</p>
            </div>
        </div>
    );
};

export default Confidentialite;