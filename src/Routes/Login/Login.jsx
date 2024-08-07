import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import styles from './Login.module.css';

const Login = () => {
  return (
    <main className={ styles.container }>
      <form className={ styles.form }>
        {/* Heading */}
        <div className={ styles.heading }>
          <h2>Welcome Back</h2>
          <span>Enter your credentials to access your account</span>
        </div>
        {/* Input Areas */}
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
        {/* Call To Action */}
        <div>
          <span>Don't have an account ? <Link to='/register'>Register</Link>
          </span>
        </div>
        {/* Submit */}
        <Button className={ styles.button } message="Log In"/>
      </form>
    </main>
  );
};

export default Login;
