import React from 'react';
import styles from './Header.module.css';
import logo from '../../icons/logo.png';
import { Link, withRouter } from 'react-router-dom';

const Header = ({ location }) => {
  const buttonLink = location.pathname === '/signup' ? '/signin' : '/signup';
  const buttonText = location.pathname === '/signup' ? 'Login' : 'Signup';

  const buttons = (
    <div className={styles.buttonsContainer}>
      {location.pathname === '/' && (
        <Link to="/signin">
          <button className={styles.button}>Login</button>
        </Link>
      )}
      <Link to={buttonLink}>
        <button className={styles.button}>{buttonText}</button>
      </Link>
    </div>
  );

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logo} />
      </Link>
      {buttons}
    </header>
  );
};

export default withRouter(Header);
