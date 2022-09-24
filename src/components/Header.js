import React, {useState} from 'react';
import './Header.css';
import NavBar from './NavBar';

function Header() {
       const [navBar, changenav] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            changenav(true);   
        } else {
            changenav(false)
        }
    }

    window.addEventListener('scroll', changeBackground);

  return (
      <div className='bd-container'>
            <header className={navBar? 'header changeBackground' : 'header'}>
                <NavBar/>
            </header>
        </div>
  )
}

export default Header