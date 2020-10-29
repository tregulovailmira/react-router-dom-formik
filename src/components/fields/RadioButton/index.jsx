import React from 'react';
import styles from './RadioButton.module.css';

const RadioButton = (props) => {
  const { name, children, description } = props;

  return (
    <label className={styles.radioButton}>
      <input name={name} type="radio" />
      {children}
      {description && <span>{description}</span>}
    </label>
  );
};

export default RadioButton;
