import React from 'react';
import styles from '../../components/styles.module.css';
import SignUpForm from '../../components/forms/SignUpForm';
import SocialButton from '../../components/fields/SocialButton';
import Header from '../../components/Header';

function SignUpPage(props) {
  const socialButtonClasses = { container: styles.socialButton };
  return (
    <>
      <Header />
      <article className={styles.pageContainer}>
        <h1 className={styles.formHeader}>CREATE AN ACCOUNT</h1>
        <p className={styles.formDescription}>
          We always keep your name and email address private.
        </p>
        <SignUpForm />
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
}

export default SignUpPage;
