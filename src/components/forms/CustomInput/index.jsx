import React from 'react';
import { Field } from 'formik';
import styles from './CustomInput.module.css';
import Classnames from 'classnames';

const CustomInput = (props) => {
  const { name, ...rest } = props;
  console.log(rest);
  return (
    <Field name={name}>
      {({ field, meta }) => {
        const inputClasses = Classnames(
          {
            [styles.valid]: !meta.error && meta.touched,
          },
          {
            [styles.invalid]: meta.touched && meta.error,
          }
        );
        return (
          <label>
            <input {...field} {...rest} className={inputClasses}/>
            {meta.touched && meta.error && (
              <span className={styles.error}>{meta.error}</span>
            )}
          </label>
        );
      }}
    </Field>
  );
};

export default CustomInput;
