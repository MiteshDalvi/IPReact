import React from 'react';
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
    const location = useLocation();
    const { email, message } = location.state || {};

    return (
        <div>
            <h2>Thank You for Contacting Me!</h2>
            <p>Your email: {email}</p>
            <p>Your message: {message}</p>
        </div>
    );
}

export default ThankYou;
