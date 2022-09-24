import React, { Component } from 'react';
import Button from './Button';
import './Resorts-list.css';

const ResortsList = (props) => {
    return ( 
        <div className='resorts-list container bd-container'>
            <img src={props.src} height={400} width={400} />
            <div className='resorts__title-middle'>
                <h2 className='resorts__title-main'>Winter Landscape Charlet</h2>
                <p className='resorts__description'>Cambodia</p>
                <div className='btn'><Button buttonStyle='btn--blue' buttonSize='btn--'>Book now</Button></div>
            </div>
        </div>
     );
}
 
export default ResortsList;