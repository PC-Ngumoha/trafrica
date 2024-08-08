import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { Link, Form, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { AuthContext } from "../../Context/auth.context";
import styles from './Login.module.css';

// export const loginAction = async ({ request }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
//   console.log(data);
//   return null;
// };

// export const loginAction = (context) => async ({ request }) => {
//   const { login } = context;
//   const formData = await request.formData();
//   // console.log(login);
//   console.log(formData);
//   const { email } = Object.fromEntries(formData);


//   if (login) {
//     login(email);
//     return redirect('/');
//   }
// };


const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  // const submit = useSubmit();

  // console.log(login);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // const formData = new FormData(evt.target);
    const email = evt.target.email.value;
    console.log(email);

    if (login) {
      login(email);
      navigate('/');
    }
  };


  return (
    <main className={ styles.container }>
      <Form
        method="post"
        className={ styles.form }
        onSubmit={handleSubmit}>
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
      </Form>
    </main>
  );
};

export default Login;
