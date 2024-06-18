// src/HomePage.js
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './HomePage.css';

const HomePage = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    console.log("user api: ", user)
    return (
        <div className="container">
            {isAuthenticated ? (
                <>
                    <h1><span className="wave">👋</span> Hello {user.nickname}</h1>
                    <div className="buttons">
                        <button className="button-28" role="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                    </div>
                </>
            ) :
                (
                    <>
                        <h1>Welcome to FBI Project</h1>
                        <div className="buttons">
                            <button className="button-28" role="button" onClick={() => loginWithRedirect()}>Get Started</button>
                            {/* <button className="button-28" role="button" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button> */}
                        </div>
                    </>
                )}
        </div>
    );
};

export default HomePage;
