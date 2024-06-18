import React from 'react';
import './userPage.css';
import { useAuth0 } from "@auth0/auth0-react";

const UserPage = () => {
    const { logout } = useAuth0();
    return (
        
        <div className="container">
            <h1><span className="wave">👋</span> Hello Anas</h1>
            <div className="buttons">
            <button class="button-28" role="button" onClick={() => logout({ logoutParams: { returnTo: window.location.href='/HomePage' } })}>Log Out</button>
            </div>
        </div>
    );
};

export default UserPage;
