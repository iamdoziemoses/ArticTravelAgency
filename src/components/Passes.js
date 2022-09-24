import React, { Component } from 'react';
import Button from './Button';
import './Passes.css';


const Passes = () => {
    return ( 
        <div className='passes section'>
            <h2 className='passes__title'>View Passes We’ve Made Available For You</h2>
            <div className='btn'><Button buttonStyle='btn--blue' buttonSize='btn--medium'>Sign up</Button></div>
        </div>
     );
}
 
export default Passes;