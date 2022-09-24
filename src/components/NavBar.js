import React, {useState} from 'react';
import Button from './Button';
import './NavBar.css';

function NavBar() {
    const [clicked, showNav] = useState(false);

    const handleClick = () => showNav(!clicked);

  return (
                 <div>
                    <nav className='nav bd-container' id="main-nav">
                        <a href="#" class="nav__logo" id="nav-logo"><span><img src='/logo.png' width={ 20} className='plane__icon'/></span>Artic Travels</a>

                    <div className={clicked ? 'show-menu nav__menu' : 'nav__menu'} id="nav-menu">
                        <ul class="nav__list">
                            <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                            <li className="nav__item"><a href="#" className="nav__link">About Us</a></li>
                            <li className="nav__item"><a href="#" className="nav__link">FAQ</a></li>
                      <div className='btn__cta'>
                            <Button buttonStyle='btn--white' buttonSize='btn--small'>Sign up</Button>
                        </div>
                  </ul>
                    </div>

                    <div class="nav__toggle" id="nav-toggle" onClick={handleClick}>
                            <i className={clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
                    </div>
                </nav>
        </div> 
  )
}

export default NavBar