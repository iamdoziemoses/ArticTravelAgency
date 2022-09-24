import React, { Component } from 'react';
import './Footer.css';

const Footer = () => {
    return ( 
        <div className='footer section bd-container'>
            <div className='footer__intro-container'>
                <div className='footer__intro'>
                <img src='/images/logo.png'/>
                <h2>Artic Travels</h2>
                <p className='footer__description'>Book your trip in minutes, get full control for much longer.</p>
            </div>

            <div className='container__footer'>
                <div className='footer__data'>
                    <h3 className='footer__title'>COMPANY</h3>
                    <p className='footer__description'>About</p>
                    <p className='footer__description'>Careers</p>
                    <p className='footer__description'>Mobile</p>
                </div>
                <div className='footer__data'>
                   <h3 className='footer__title'>CONTACT</h3>
                    <p className='footer__description'>FAQ</p>
                    <p className='footer__description'>Press</p>
                    <p className='footer__description'>Affiliates</p>
                </div>
                <div className='footer__data'>
                   <h3 className='footer__title'>MORE</h3>
                    <p className='footer__description'>Airlines</p>
                    <p className='footer__description'>Airfees</p>
                    <p className='footer__description'>Lowfare tips</p>
                </div>
                </div>
                </div>


            <div className='social'>
                <i className='fab fa-facebook social__icon'></i>
                <i className='fab fa-instagram social__icon'></i>
                <i className='fab fa-twitter social__icon'></i>
            </div>

            <div>
                <p className='footer__descriptioncopy'>&copy; 2022 Artic Travels- All Rights Reserved</p>
            </div>
        </div>
     );
}
 
export default Footer;