import React from 'react';
import styles from './Checkbox.module.css';
import { Field } from 'formik';
import Classnames from 'classnames';

const Checkbox = ({ name, children, stylesClasses = {}, ...rest }) => {
  const { container } = stylesClasses;
  const checkboxClasses = Classnames(container, styles.checkbox);
  return (
    <Field type="checkbox" name={name}>
      {({ field }) => {
        return (
          <label className={styles.checkboxContainer}>
            <input
              {...field}
              {...rest}
              type="checkbox"
              className={checkboxClasses}
            />
            {children}
          </label>
        );
      }}
    </Field>
  );
};

export default Checkbox;
