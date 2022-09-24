import React from 'react';
import './Button.css';

const STYLES = ['btn--blue', 'btn--white'];

const SIZES = ['btn--big', 'btn--medium', 'btn--small'];

function Button({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize, 
    marginTop
}) {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    
  return (
      <div>
          <button className={ `btn-main ${checkButtonStyle} ${checkButtonSize}`}onClick={onClick} type={type}>
            {children}
          </button>
    </div>
  )
}

export default Button;