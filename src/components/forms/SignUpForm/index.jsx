import React from 'react';
import styles from './SignUpForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomInput from '../CustomInput';
import { validationSchema } from '../../../utils/validationSchems';

const SignUpForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <Form>
        <CustomInput name="firstName" placeholder="First name" />
        <CustomInput name="lastName" placeholder="Last name" />
        <CustomInput name="displayName" placeholder="Display name" />
        <CustomInput name="email" placeholder="Email Adress" />
        <CustomInput name="password" type="password" placeholder="Password" />
        <CustomInput
          name="passwordConfirmation"
          type="password"
          placeholder="Password Confirmation"
        />
        <div>
          <label className={styles.joinAs}>
            <input name="joinAs" type="radio" />
            Join As a Buyer
            <span>
              I am looking for a Name, Logo or Tagline for my business, brand or
              product.
            </span>
          </label>
        </div>
        <div>
          <label className={styles.joinAs}>
            <input name="joinAs" type="radio" />
            Join As a Creative or Marketplace Seller
            <span>
              I plan to submit name ideas, Logo designs or sell names in Domain
              Marketplace.
            </span>
          </label>
        </div>
        <div>
          <input type="checkbox" />
          <span>
            Allow Squadhelp to send marketing/promotional offers from time to
            time
          </span>
        </div>
        <div>
          <input type="submit" value="Create account" />
          <span>
            By clicking this button, you agree to our{' '}
            <a href="https://www.squadhelp.com/Terms&Conditions">
              Terms of Service.
            </a>
          </span>
        </div>
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

export default SignUpForm;
