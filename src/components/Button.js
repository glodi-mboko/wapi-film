import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = (props) => {
    return (
        <NavLink activeClassName="active" to={props.route}>
            <div className='button'>
                {props.texte}
            </div>
        </NavLink>
        
    );
}

export default Button;
