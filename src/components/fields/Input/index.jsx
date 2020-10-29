import React from 'react';
import { Field } from 'formik';
import styles from './Input.module.css';
import Classnames from 'classnames';

const Input = (props) => {
  const { name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, meta }) => {
        const inputClasses = Classnames(
          styles.input,
          {
            [styles.valid]: !meta.error && meta.touched,
          },
          {
            [styles.invalid]: meta.touched && meta.error,
          }
        );
        return (
          <label className={styles.container}>
            <input {...field} {...rest} className={inputClasses} />
            {meta.touched && meta.error && (
              <span className={styles.error}>{meta.error}</span>
            )}
          </label>
        );
      }}
    </Field>
  );
};

export default Input;
