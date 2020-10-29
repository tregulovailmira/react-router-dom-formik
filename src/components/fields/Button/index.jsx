import React from 'react';
import Classnames from 'classnames';
const Button = (props) => {
    const { text, onClick = ()=>{}, type, imgSrc, stylesClasses: {container} } = props;

    const btnClasses= Classnames(container);
    return (
        <button onClick={onClick} type={type} className={btnClasses} >
            {imgSrc && <img src={imgSrc} alt='icon'/>}
            {text}
        </button>
    );
}

export default Button;
