import React from 'react';
import './Toolbar.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
       
           
            <div className="spacer"/>
            <div className="toolbar_navigation-items"> 
                <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
