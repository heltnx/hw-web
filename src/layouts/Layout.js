import React from 'react';
/*layout*/
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import '../assets/css/main.css'


const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Header />

            <main >
                <div className="image-container"></div>
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;