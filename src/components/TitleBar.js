import React from 'react';
import svgLogo from '../img/svg/play-circle-solid.svg'
import userLogo from '../img/svg/user-regular.svg'

const TitleBar = () => {
    return (
        <div className='container-title-bar'>
            <div className='container-title-bar__logo'>
                <img src={svgLogo} alt ='logo_wapifilm'/>
                <h1>Wapifilm</h1>
            </div>
            <div className='container-title-bar__search'>
                <input type='texte'/>
                <div>
                <span>Search</span>
                </div>
                
            </div>
            <div className='container-title-bar__separator-bar'></div>
            <div className='container-title-bar__login'>
                <img src={userLogo} alt='user'/>
                <span>LOGIN</span>
            </div>
        </div>
    );
}

export default TitleBar;
