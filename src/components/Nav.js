import React from 'react';
import movieLogo from "../img/svg/film-solid.svg";
import arrow from "../img/svg/sort-down-solid.svg"
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <div className='nav-bar'>
            <span><Link to="/">HOME</Link></span>
            <span><Link to="/">CONTACT</Link></span>
            <span><Link to="/">ABOUT</Link></span>
            <div className='nav-bar__categorie'>
                <img src={movieLogo} alt='movielogo'/>
                <span>CATEGORIE</span>
                <div>
                    <img src={arrow} alt='arrowdown'/>
                </div>
                
            </div>
            
        </div>
    );
}

export default Nav;
