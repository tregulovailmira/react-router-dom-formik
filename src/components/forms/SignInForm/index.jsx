import React from 'react';
import styles from './SignInForm.module.css';
import { Formik, Form } from 'formik';
import Input from '../../fields/Input';
import Button from '../../fields/Button';
import Checkbox from '../../fields/Checkbox';
import { validationSignInSchema } from '../../../utils/validationSchems';

const SignInForm = () => {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const inputStylesClasses = { container: styles.inputMargin };
  const buttonStylesClasses = { container: styles.buttonMargin };

  const submitHandler = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSignInSchema}
      onSubmit={submitHandler}
    >
      <Form className={styles.formContainer}>
        <Input
          name="email"
          placeholder="Email Adress"
          stylesClasses={inputStylesClasses}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          stylesClasses={inputStylesClasses}
        />
        <div className={styles.infoWrapper}>
          <Checkbox name="rememberMe">Remember Me</Checkbox>
          <div>
            <a
              href="https://www.squadhelp.com/forgot_password.php"
              className={styles.forgorPassword}
            >
              Forgot Password
            </a>
          </div>
        </div>

        <Button
          type="submit"
          text="LOGIN"
          stylesClasses={buttonStylesClasses}
        />
      </Form>
    </Formik>
  );
};

export default SignInForm;
