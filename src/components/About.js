import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // This function takes you to the previous page
    };

    return (
        <div>
            <h2>About Me</h2>
            <p>
                This is <b>Mitesh Dalvi</b><br></br>
                I am pursuing a BE degree from <strong>VESIT</strong> in <strong>IT</strong> branch (3<sup>rd</sup>)<br></br>
                I like drawing and playing games and sports.
                <br></br>
            </p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default About;
