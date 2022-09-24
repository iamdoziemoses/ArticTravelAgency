import React, { Component } from 'react';
import Booking from './Booking';

import Button from './Button';
import Clients from './Clients';
import './main.css';
import Passes from './Passes';
import Regions from './Regions';
import Resorts from './Resorts';

const Main = () => {
    return ( 
        <main className="main">
        <div className="home__wrapper">
            <img src='/images/landscape-shot.png' alt="landscape-shot" class="home__bgimg" />
            <section className="home bd-container">
                <div className="home__data">
                    <h1 className="home__title"> 
                      Plan The Perfect Winter Trip
                    </h1>
                    <p className="home__description">Easily plan your ideal ski trip from home with the help of professionals</p>
                     <div className='btn btn-animate'><Button buttonStyle='btn--blue' buttonSize='btn--medium'>Book here</Button></div>
                </div>
            </section>
            </div>

            <div className='book__section'><Booking /></div>
            <div><Clients /></div>
            <Regions />
            <Resorts />
            <Passes/>

          
    </main>
     );
}
 
export default Main;