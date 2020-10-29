import React from 'react';
import styles from './SignUpForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from '../../fields/Input';
import { validationSchema } from '../../../utils/validationSchems';
import Button from '../../fields/Button';
import SocialButton from '../../fields/SocialButton';
import Classnames from 'classnames';

const SignUpForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const signUpButtonStyles = Classnames({
    container: styles.signUpButton,
  });

  const facebookButtonStyles = Classnames(styles.facebookButton);
  const googleButtonStyles = Classnames(styles.googleButton);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      <Form className={styles.formContainer}>
        <Input name="firstName" placeholder="First name" />
        <Input name="lastName" placeholder="Last name" />
        <Input name="displayName" placeholder="Display name" />
        <Input name="email" placeholder="Email Adress" />
        <Input name="password" type="password" placeholder="Password" />
        <Input
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
          <Button
            type="submit"
            text="Create acount"
            stylesClasses={signUpButtonStyles}
          />
          <span>
            By clicking this button, you agree to our{' '}
            <a href="https://www.squadhelp.com/Terms&Conditions">
              Terms of Service.
            </a>
          </span>
        </div>
        <SocialButton text='Sign up with Facebook' socialType='google' stylesClasses={facebookButtonStyles}/>
        <SocialButton text='Sign up with Google' socialType='facebook' stylesClasses={googleButtonStyles}/>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
