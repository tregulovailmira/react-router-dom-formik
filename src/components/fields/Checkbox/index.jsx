import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = (props) => {
  const { children } = props;
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" />
      {children}
    </label>
  );
};

export default Checkbox;
