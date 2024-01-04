import React from 'react';
/*layout*/
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <Header />
            <main > {children} </main>
            <Footer />
        </div>
    );
};

export default Layout;