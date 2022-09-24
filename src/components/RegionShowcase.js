import React, { Component } from 'react';
import Button from './Button';
import './RegionShowcase.css';

const RegionShowcase = () => {
    return ( 
        <div className='regionShowcase section bd-container'>
            <h2>Why Choose Us</h2>

            <div className='regionShowcase-container'>
                <div className='regionShowcase__data'>
                    <img src='/images/destination.svg' width={100}/>
                    <h3>DIVERSE DESTINATIONS</h3>
                    <p>lorem ipsum dolor sit lorem amet, consectur adipiscing elit, sed do eismod.
                        lorem ipsum dolor sit lorem amet, consectur adipiscing elit, sed do eismod</p>
                </div>

                <div className='regionShowcase__data'>
                     <img src='/images/money.svg' width={60}/>
                    <h3>VALUE FOR MONEY</h3>
                    <p>lorem ipsum dolor sit lorem amet, consectur adipiscing elit, sed do eismod.
                        lorem ipsum dolor sit lorem amet, consectur adipiscing elit, sed do eismod</p>
                </div>

                <div className='regionShowcase__data'>
                    <img src='/images/world.svg' width={100}/>
                    <h3>BEAUTIFUL PLACES</h3>
                    <p>lorem ipsum dolor sit lorem amet, consectur adipiscing elit, sed do eismod.
                        lorem ipsum dolor sit lorem amet, consectur adipiscing elit, sed do eismod</p>
                </div>
            </div>

            <div className='btn'><Button buttonStyle='btn--blue' buttonSize='btn--medium'>CONTACT US</Button></div>
        </div>
     );
}
 
export default RegionShowcase;