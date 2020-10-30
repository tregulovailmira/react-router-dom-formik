import React from 'react';
import styles from './SignUpForm.module.css';
import { Formik, Form } from 'formik';
import Input from '../../fields/Input';
import Button from '../../fields/Button';
import RadioButton from '../../fields/RadioButton';
import Checkbox from '../../fields/Checkbox';
import { validationSignUpSchema } from '../../../utils/validationSchems';

const SignUpForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    allow: false,
    joinAs: false,
  };

  const radioButtonClasses = { container: styles.radioButtonMargin };
  const checkBoxClasses = { container: styles.checkBoxMargin };

  const submitHandler = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSignUpSchema}
      onSubmit={submitHandler}
    >
      <Form className={styles.formContainer}>
        <div className={styles.inputWrapper}>
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
        </div>

        <RadioButton
          name="joinAs"
          value="asBuyer"
          description="I am looking for a Name, Logo or Tagline for my business, brand or
          product."
          stylesClasses={radioButtonClasses}
        >
          Join As a Buyer
        </RadioButton>

        <RadioButton
          name="joinAs"
          value="asSeller"
          description="I plan to submit name ideas, Logo designs or sell names in Domain
          Marketplace."
          stylesClasses={radioButtonClasses}
        >
          Join As a Creative or Marketplace Seller
        </RadioButton>

        <Checkbox name="allow" stylesClasses={checkBoxClasses}>
          Allow Squadhelp to send marketing/promotional offers from time to time
        </Checkbox>

        <Button type="submit" text="Create acount" />

        <div className={styles.termsOfService}>
          By clicking this button, you agree to our{' '}
          <a href="https://www.squadhelp.com/Terms&Conditions">
            Terms of Service.
          </a>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
