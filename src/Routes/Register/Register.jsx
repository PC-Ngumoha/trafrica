import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import styles from './Register.module.css';

const Register = () => {
  return (
    <main className={ styles.container }>
      <form className={ styles.form }>
        {/* Heading */}
        <div className={ styles.heading }>
          <h2>Join Us</h2>
          <span>Enter your credentials to create an account</span>
        </div>
        {/* Input Areas */}
        <div className={ styles.inputArea }>
          <FontAwesomeIcon icon={ faEnvelope } className={ styles.icon }/>
          <input
            className=""
            aria-label="firstName"
            name="firstName"
            placeholder="Enter your first name"
            type="text"
          />
        </div>
        <div className={ styles.inputArea }>
          <FontAwesomeIcon icon={ faEnvelope } className={ styles.icon }/>
          <input
            className=""
            aria-label="lastName"
            name="lastName"
            placeholder="Enter your last name"
            type="text"
          />
        </div>
        <div className={ styles.inputArea }>
          <FontAwesomeIcon icon={ faEnvelope } className={ styles.icon }/>
          <input
            className=""
            aria-label="email"
            name="email"
            placeholder="Enter your email"
            type="text"
          />
        </div>
        <div className={ styles.inputArea }>
          <FontAwesomeIcon icon={ faLock } className={ styles.icon }/>
          <input
            className=""
            aria-label="password"
            name="password"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div className={ styles.inputArea }>
          <FontAwesomeIcon icon={ faLock } className={ styles.icon }/>
          <input
            className=""
            aria-label="confimPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            type="password"
          />
        </div>
        {/* Call To Action */}
        <div>
          <span>Already have an account ? <Link to='/login'>Log In</Link>
          </span>
        </div>
        {/* Submit */}
        <Button className={ styles.button } message="Register"/>
      </form>
    </main>
  );
};

export default Register;
