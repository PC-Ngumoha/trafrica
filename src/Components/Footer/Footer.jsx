import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';
import { socialLinks } from './Footer.fixtures';

/**
 * Implements a very simple footer section that displays company details
 *
 * TODO
 * - Maybe, we can add more information to this section. [OPTIONAL]
 *
 * @returns <Footer />
 */
const Footer = () => {
  return (
    <footer id='footer' className={ styles.footer }>
      <div>
        <h2>
          <FontAwesomeIcon icon={ faLocationDot} />Trafrica
        </h2>
        <div className={ styles.iconGroup }>
          {
            socialLinks.map((link) => (
              <a
                key={ link.id }
                href={ link.url }
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon icon={ link.icon } />
              </a>
            ))
          }
        </div>
        <span>Copyright Trafrica &copy;2024 All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;