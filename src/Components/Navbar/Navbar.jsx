import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faClose } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import styles from './Navbar.module.css';
import { concatClasses } from '../../Utils/helpers';

const Navbar = () => {
  const [open, setopen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={ concatClasses(styles.navbarBrand, styles.section) }>
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
            () => setopen(true)
          }>
          <FontAwesomeIcon icon={faGripVertical} />
        </div>
      </nav>

      { open && (
        <div className={ styles.dropdown }>
          <div className={ styles.closeMenu } onClick={
            () => setopen(false)
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
      )}
    </>
  );
};

export default Navbar;
