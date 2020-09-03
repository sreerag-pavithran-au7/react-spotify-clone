import React from 'react';
import './Login.css';
import { accessUrl } from './Spotify';

function Login() {
    return (
        <div className="login">
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White-750x225.png" 
            alt="Logo" />
        <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login;
