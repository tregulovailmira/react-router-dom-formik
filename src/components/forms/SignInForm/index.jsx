import React from 'react';
import styles from './SignInForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from '../../fields/Input';
import { validationSchema } from '../../../utils/validationSchems';

const SignInForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <Form>
        <Input name="email" placeholder="Email Adress" />
        <Input name="password" type="password" placeholder="Password" />
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
