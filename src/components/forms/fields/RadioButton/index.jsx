import React from 'react';
import { Field } from 'formik';
import styles from './RadioButton.module.css';
import Classnames from 'classnames';

const RadioButton = (props) => {
  const {
    name,
    value,
    children,
    description,
    stylesClasses: { container },
    ...rest
  } = props;
  const radioButtonClasses = Classnames(styles.radioButtonContainer, container);
  return (
    <Field type="radio" name={name} value={value}>
      {({ field }) => {
        return (
          <label className={radioButtonClasses}>
            <input
              {...field}
              {...rest}
              name={name}
              value={value}
              type="radio"
              className={styles.input}
            />
            <div className={styles.textContainer}>
              {children}
              {description && (
                <span className={styles.description}>{description}</span>
              )}
            </div>
          </label>
        );
      }}
    </Field>
  );
};

export default RadioButton;
