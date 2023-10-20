import React from 'react';
import MyImage from './profile.png';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <h2>My Profile</h2>
            <div> 
                <img src={MyImage} alt="" style={{ width: '150px', height: '150px' }} />
            </div>
            <h4>
                <b>Mitesh Dalvi</b><br></br>
            </h4>
            <Link to='/about'><button>About</button></Link>
            <Link to='/projects'><button>Projects</button></Link>
            <Link to='/contact'><button>Contact me</button></Link>

        </div>
    )
}

export default Home