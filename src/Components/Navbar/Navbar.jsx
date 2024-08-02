import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faClose, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import styles from './Navbar.module.css';
import { concatClasses } from '../../Utils/helpers';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [posY, setPosY] = useState(window.scrollY);
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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
            <Button className={ styles.button } variant='outline'
              message='Login'/>
            <Button className={ styles.button } message='Register' />
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
            <Button className={ styles.button } variant='outline' message='Login' />
            <Button className={ styles.button } message='Register' />
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

export default Navbar;
