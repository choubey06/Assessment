import React, { Component } from 'react';
import './header.css';
import logo from './logo.png'
class Header extends Component {
    render() {
        return (
            <div className="background">
                <div className="head">
               <img src={logo} className="img"/>
               <div className="title"><b>My Shopping App</b></div>
               </div>
                <div className="nav">
                    <ul>
                        <li>Home</li>
                        <li>Categories</li>
                        <li>Contact Us</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
