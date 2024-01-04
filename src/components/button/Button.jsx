// Button.js

import React from 'react';
import './button.css';

const Button = ({ children }) => {
    return (
        <button className="custom-button">
            {children}
        </button>
    );
};

export default Button;