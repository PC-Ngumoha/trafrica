import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faClose, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { AuthContext } from '../../Context/auth.context';
import styles from './Navbar.module.css';
import { concatClasses } from '../../Utils/helpers';

const HomeNavbar = () => {
  const [open, setOpen] = useState(false);
  const [posY, setPosY] = useState(window.scrollY);
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated());

  useEffect(() => {
    const updateScrollPos = () => {
      setPosY(window.scrollY);
    }

    document.addEventListener('scroll', updateScrollPos);

    return () => {
      document.removeEventListener('scroll', updateScrollPos);
    }
  }, [posY]);

  useEffect(() => {
    const removeDropdownOnResize = () => {
      if (window.innerWidth >= 600) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', removeDropdownOnResize);

    return () => {
      window.removeEventListener('resize', removeDropdownOnResize);
    }
  }, [])

  return (
    <>
      { open ? (
        <div className={ concatClasses(styles.dropdown, styles.sticky) }>
          <div className={ styles.closeMenu } onClick={
            () => setOpen(false)
          }>
            <FontAwesomeIcon icon={faClose} />
          </div>
          <ul className={ styles.dropdownList }>
            <li><a href='#home'>Home</a></li>
            <li><a href='#destinations'>Destinations</a></li>
            <li><a href='#tours'>Tours</a></li>
            <li><a href='#contact'>Contact Us</a></li>
          </ul>
          <div className={ styles.dropdownButtons }>
            {
              // If not authenticated, display login/register buttons
              // Else, display dashboard button
              !isAuthenticated() ? (
                <>
                  <Button
                    className={ styles.button }
                    variant='outline'
                    message='Login'
                    onClick={() => {
                      navigate('/login');
                    }}
                  />
                  <Button
                    className={ styles.button }
                    message='Register'
                    onClick={() => {
                      navigate('/register');
                    }}
                  />
                </>
              ) : (
                <Button
                  className={ styles.button }
                  message='Go to Dashboard'
                  onClick={() => {
                    navigate('/dashboard');
                  }}
                />
              )
            }
          </div>
        </div>
      ) : (
        <nav
          className={
            posY === 0
            ? concatClasses(styles.navbar, styles.sticky)
            : concatClasses(styles.navbar, styles.sticky, styles.opaque)}
        >
          <div className={ concatClasses(styles.navbarBrand, styles.section) }>
            <FontAwesomeIcon icon={faLocationDot} />
            Trafrica
          </div>
          <ul className={ concatClasses(styles.navbarList, styles.section) }>
            <li><a href='#home'>Home</a></li>
            <li><a href='#destinations'>Destinations</a></li>
            <li><a href='#tours'>Tours</a></li>
            <li><a href='#contact'>Contact Us</a></li>
          </ul>
          <div className={
            concatClasses(styles.buttonContainer, styles.section)
          }>
            {
              // If not authenticated, display login/register buttons
              // Else, display dashboard button
              !isAuthenticated() ? (
                <>
                  <Button
                    className={ styles.button }
                    variant='outline'
                    message='Login'
                    onClick={() => {
                      navigate('/login');
                    }}
                  />
                  <Button
                    className={ styles.button }
                    message='Register'
                    onClick={() => {
                      navigate('/register');
                    }}
                  />
                </>
              ) : (
                <Button
                  className={ styles.button }
                  message='Go to Dashboard'
                  onClick={() => {
                    navigate('/dashboard');
                  }}
                />
              )
            }
          </div>
          <div
            className={ concatClasses(styles.openMenu, styles.section) }
            onClick={
              () => setOpen(true)
            }>
            <FontAwesomeIcon icon={faGripVertical} />
          </div>
        </nav>
      )}
    </>
  );
};

const OtherNavbar = () => {
  const [posY, setPosY] = useState(window.scrollY);

  useEffect(() => {
    const updateScrollPos = () => {
      setPosY(window.scrollY);
    }

    document.addEventListener('scroll', updateScrollPos);

    return () => {
      document.removeEventListener('scroll', updateScrollPos);
    }
  }, [posY]);

  return (
    <nav
      className={
        posY === 0
        ? concatClasses(styles.navbar, styles.sticky)
        : concatClasses(styles.navbar, styles.sticky, styles.opaque)
      }
    >
      <div className={ concatClasses(styles.navbarBrand, styles.section) }>
        <Link to='/' className={ styles.brandNoDesign }>
          <FontAwesomeIcon icon={faLocationDot} />
          Trafrica
        </Link>
      </div>
    </nav>
  );
};

const Navbar = () => {
  const { pathname } = useLocation();

  return (
      pathname === '/' ? <HomeNavbar /> : <OtherNavbar />
  );
};

export default Navbar;
