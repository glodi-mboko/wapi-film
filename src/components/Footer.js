import React from 'react';
import linkdin from '../img/svg/linkdin.svg'
import twitter from '../img/svg/twitter.svg'
import facebook from '../img/svg/facebook.svg'
import mail from '../img/svg/mail.svg'
import messenger from '../img/svg/messenger.svg'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__information'>
                <div className='footer__information__politique'>
                    <h6>POLITIQUE DE CONFIDENTIALITÉ</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum temporibus reprehenderit eius ullam at. Repellat sit vero ex cumque voluptatem soluta veniam, tempore neque dolore sed deleniti atque, aut maiores?</p>
                </div>
                <div className='footer__information__adresse'>
                    <h6>ADRESSE</h6>
                    <p>Kinzazi 5 A,</p>
                    <p>Kinshasa Matete</p>
                    <p>+243822167485</p>
                    <p><a href='/'><img src={mail} alt="mail" /></a><a href='/'><img src={messenger} alt="messenger" /></a></p>
                </div>
                
                <div className='footer__information__suivez-nous'>
                    <h6>SUIVEZ-NOUS SUR</h6>
                    <p><a href='/'><img src={facebook} alt="linkdin" /></a><a href='/'><img src={twitter} alt="linkdin" /></a><a href='/'><img src={linkdin} alt="linkdin" /></a></p>
                </div>
            </div>
            <div className='footer__separator'></div>
            <div className='footer__copyright'>
                <p>Copyright © 2021 All Rights Reserved by gmboko. </p>
            </div>
        </div>
    );
}

export default Footer;
