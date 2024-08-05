import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const socialLinks = [
  {
    id: 1,
    icon: faTwitter,
    url: 'https://twitter.com/PNgumoha',
  },
  {
    id: 2,
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/prince-ngumoha-95a633194/',
  },
  {
    id: 3,
    icon: faGithub,
    url: 'https://github.com/PC-Ngumoha',
  },
];


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