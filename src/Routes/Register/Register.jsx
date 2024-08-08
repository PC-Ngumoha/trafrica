import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, Form, useNavigate } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import styles from './Register.module.css';

// export const registerAction = async ({ request }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   const {email, firstName, lastName } = data;
//   window.localStorage.setItem('user', JSON.stringify({
//     email,
//     firstName,
//     lastName
//   }));
//   return redirect('/login');
// };

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // const {email, firstName, lastName } = Object.fromEntries(evt.target);
    const email = evt.target.email.value;
    const firstName = evt.target.firstName.value;
    const lastName = evt.target.lastName.value;
    window.localStorage.setItem('user', JSON.stringify({
      email,
      firstName,
      lastName
    }));
    return navigate('/login');
    // console.log(evt.target.email.value);
  };

  return (
    <main className={ styles.container }>
      <Form
        method='post'
        className={ styles.form }
        onSubmit={handleSubmit}>
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
      </Form>
    </main>
  );
};

export default Register;
