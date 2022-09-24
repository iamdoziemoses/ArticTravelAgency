import React, { Component } from 'react';
import './Regions.css';
import RegionShowcase from './RegionShowcase';

const Regions = () => {
    const myStyle = {
        color: '#3E86F5'
    }
    return ( 
        <div className='regions-intro section bd-container'>
            <h2>Creating the best <span style={myStyle}>ice-cold!</span> experience you would never forget.</h2>
            <p>Would you explore nature paradise in the world, find the best destination in the world with us.</p>
            <RegionShowcase/>
        </div>
     );
}
 
export default Regions;