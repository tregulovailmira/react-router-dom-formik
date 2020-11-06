import React from 'react';
import Classnames from 'classnames';
import styles from './Button.module.css';

const Button = ({ text, onClick = () => {}, type, stylesClasses = {} }) => {
  const { container } = stylesClasses;
  const buttonClasses = Classnames(container, styles.button);
  return (
    <button onClick={onClick} type={type} className={buttonClasses}>
      {text}
    </button>
  );
};

export default Button;
