import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo-black.png';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <Link className="navbar-brand ms-5" to="/">
                <img src={logo} width="130" height="30" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-5 ">
                    <li className="nav-item active">
                        <Link className="nav-link text-white text-white" to="/home">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link text-white" to="home#services">Services</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link text-white" to="home#experts">Experts</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="about">About</Link>
                    </li>
                    <li className="nav-item">
                        {user ? <button onClick={() => signOut()} className="btn btn-success">Log Out</button>

                            : <Link className="nav-link text-white" to="/login">Login</Link>}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;