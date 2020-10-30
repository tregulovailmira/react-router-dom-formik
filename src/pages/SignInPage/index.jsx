import React from 'react';
import styles from '../../components/styles.module.css';
import SignInForm from '../../components/forms/SignInForm';
import SocialButton from '../../components/fields/SocialButton';
import Header from '../../components/Header';

const SignInPage = () => {
  const socialButtonClasses = { container: styles.socialButton };
  return (
    <>
      <Header />
      <article className={styles.pageContainer}>
        <h1 className={styles.formHeader}>LOGIN TO YOUR ACCOUNT</h1>

        <SignInForm />
        <SocialButton
          text="Sign up with Facebook"
          socialType="google"
          stylesClasses={socialButtonClasses}
        />
        <SocialButton
          text="Sign up with Google"
          socialType="facebook"
          stylesClasses={socialButtonClasses}
        />
      </article>
    </>
  );
};

export default SignInPage;
