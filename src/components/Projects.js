import React from 'react';
import { useNavigate } from 'react-router-dom';
import Call from './Footer';

function Projects() {
    const navigate = useNavigate(); 
    const projects = [
        { id: 1, title: "Pre-Tutor app", description: "A Java based website to teach pre school kids.." },
        { id: 2, title: "Crop Predictor", description: "A python based app to predict crop and yield according to the area and soil." },
        { id: 3, title: "PedalShare", description: "A web-app for users to rent a cycle for their daily use from the desired location." },
    ];

    const goBack = () => {
        navigate(-1); 
    };

    return (
        <div>
            <center>
                <h2>Projects</h2>
            </center>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>

            <button onClick={goBack}>Go Back</button> 
            <footer><hr></hr>
                <b>Call me</b>
                <Call rollno={11} name={"Mitesh"} email={"dalvimitesh19@gmail.com"} phone={"9892385514"} />
            </footer>
        </div>
    );
}

export default Projects;
