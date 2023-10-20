import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ContactMe = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/thank', { state: { email, message } });
    }

    return (
        <div>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div>
                    <label>Query or Suggestion:</label>
                    <textarea value={message} onChange={handleMessageChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactMe;
