import React, {useState} from 'react';
import './ScrollToTop.css';

function ScrollToTop() {
    const [scroll, setScroll] = useState(false)

    const showScroll = () => {
        if (window.scrollY >= 250) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', showScroll);
  return (
      <div>
          <a href='#' className={scroll ? 'scroll-top show-scroll' : 'scroll-top'}>
            <i className='fa fa-arrow-up scrolltop__icon'></i>
         </a>
       </div>
  )
}

export default ScrollToTop