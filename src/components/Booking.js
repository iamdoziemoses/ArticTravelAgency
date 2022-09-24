import React, { Component } from 'react';
import './Booking.css';
import Button from './Button';

const Booking = () => {
    return ( 
        <div className='booking-container bd-container'>
            <div className='booking-section'>
                <div className='booking__data'>
                    <p className='booking__description'>
                        <span className='booking__description-sub'><i className='fa fa-location-arrow location'></i>LOCATION</span>
                        <div className='booking__description-main'>Iceland<i className='fa fa-chevron-down dropdown'></i></div>
                    </p>
                </div>
                <div className='booking__data'>
                    <p className='booking__description'>
                        <span className='booking__description-sub'><i className='fa fa-people-arrows person'></i>PERSONS</span>
                        <div className='booking__description-main'>4 persons<i className='fa fa-chevron-down dropdown'></i></div>
                    </p>
                </div>
                <div className='booking__data'>
                     <p className='booking__description'>
                         <span className='booking__description-sub'><i className='fa fa-calendar check-in'></i>CHECK IN</span>
                         <div className='booking__description-main'>12th January, 2022 <i className='fa fa-chevron-down dropdown'></i></div>
                    </p>
                </div>
                <div className='booking__data'>
                  <p className='booking__description'>
                      <span className='booking__description-sub'><i className='fa fa-calendar check-out'></i>CHECK OUT</span>
                      <div className='booking__description-main'>18th January, 2022<i className='fa fa-chevron-down dropdown'></i></div>
                  </p>
                </div>
            </div>
            <div className='btn-booking btn'><Button buttonStyle='btn--blue' buttonSize='btn--big'>Book trip</Button>
                <span><img src='/images/aeroplane.png' className='booking__aeroplaneimg'></img></span></div>
        </div>
     );
}
 
export default Booking;
