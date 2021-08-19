import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './Navbar.css';
import logo from './image/logo.png';
import DehazeIcon from '@material-ui/icons/Dehaze';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                            <a className="navbar-brand" href="#"><img id="logo" src={logo} alt="logo"/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <DehazeIcon id="navbaricon"/>
                            </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a id="anc" className="nav-link  "  aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a id="anc" className="nav-link "  aria-current="page" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a id="anc" className="nav-link " aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a id="anc" className="nav-link " aria-current="page" href="#">Project</a>
                                </li>
                                <li className="nav-item">
                                    <a id="anc" className="nav-link " aria-current="page" href="#">Contact</a>
                                </li>  
                            </ul>
                        </div>
                </div>
        </nav>
    )
}

export default Navbar;
