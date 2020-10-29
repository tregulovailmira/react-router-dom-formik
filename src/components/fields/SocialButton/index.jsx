import React from 'react';
import Classnames from 'classnames';
import styles from './SocialButton.module.css';
import googleIcon from '../../../icons/google.png';
import facebookIcon from '../../../icons/facebook.png';

const SocialButton = (props) => {
  const {
    text,
    socialType,
    onclick = () => {},
    stylesClasses: { container },
  } = props;
  const socialButtonStyles = Classnames(
    styles.socialButton,
    [styles[socialType]],
    container
  );
  const socialIcons = {
    google: googleIcon,
    facebook: facebookIcon,
  };
  return (
    <button className={socialButtonStyles}>
      <img className={styles.socialIcon} src={socialIcons[socialType]} alt="icon"/>
      {text}
    </button>
  );
};

export default SocialButton;
