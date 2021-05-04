import React from 'react';
import TitleBar from './TitleBar';
import Nav from './Nav'

const Header = () => {
    return (
        <div className='header'>
            <TitleBar />
            <Nav />
        </div>
    );
}

export default Header;
