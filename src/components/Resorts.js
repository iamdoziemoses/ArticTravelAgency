import React, { Component } from 'react';
import './Resorts.css';
import ResortsList from './Resorts-list';

const Resorts = () => {
    return ( 
        <div className='resorts section bd-container'>
            <h2 className='resorts__title'>The best resort to chill and relax</h2>
            <div className='resort__images'>
                <ResortsList src='/images/fine-island.jpg'/>
                <ResortsList src='/images/skater.png' className="second-image"/>
                <ResortsList src='/images/skater.png'/>
                <ResortsList src='/images/artic-travel-agency.webp' />
                </div>
        </div>
     );
}
 
export default Resorts;