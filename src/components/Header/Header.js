import React from 'react';
import logo from '../../logo.jpg' //impoting logo for the website
import './Header.css'


const Header = () => {
    return (
        <div className='header py-2'>
            <div className='head py-1'>
                <div>
                <img src={logo} alt="" />
                </div>
                <div><h2>SpaceX Programmer Team</h2></div>
            </div>
            <h3 className='text-secondary fw-bold'>Recruiting programmer for SpaceX mission</h3>
            <h1 className='header-title'>Total Budget: 100 Million</h1>
        </div>
    );
};

export default Header;