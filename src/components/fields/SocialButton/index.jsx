import React from 'react';
import Classnames from 'classnames';
import styles from './SocialButton.module.css';
import Icon from '@mdi/react';
import { mdiGoogle } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';

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

  const googleIcon = <Icon path={mdiGoogle} size={1} className={styles.socialIcon}/>;
  const facebookIcon = <Icon path={mdiFacebook} size={1} className={styles.socialIcon}/>;
  const socialIcons = {
    google: googleIcon,
    facebook: facebookIcon,
  };

  return (
    <button className={socialButtonStyles}>
      {socialIcons[socialType]}
      {text}
    </button>
  );
};

export default SocialButton;
