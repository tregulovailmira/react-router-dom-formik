import React from 'react';
import styles from './SignInForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomInput from '../CustomInput';
import { validationSchema } from '../../../utils/validationSchems';

const SignInForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <Form>
        <CustomInput name="email" placeholder="Email Adress" />
        <CustomInput name="password" type="password" placeholder="Password" />
        <div>
          <input type="checkbox" />
          <span>Remember Me</span>
        </div>
        <div>
          <a href="https://www.squadhelp.com/forgot_password.php"></a>Forgot
          Password
        </div>
        <button type="submit">LOGIN</button>
        <button>
          <span>Sign up with Facebook</span>
        </button>
        <button>
          <span>Sign up with Google</span>
        </button>
      </Form>
    </Formik>
  );
};

export default SignInForm;
