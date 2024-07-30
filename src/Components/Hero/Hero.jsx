import Button from '../Button/Button';
import styles from './Hero.module.css';
import image from '../../Assets/Images/marakesh_morroco.jpg';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <img src={image} alt='A castle in Marrakesh, Morroco'/>
      <div>
        <span>Explore africa to your heart's content.
        Visit Marrakesh in Morocco</span>
        <Button message='Get Started'/>
      </div>
    </section>
  );
};

export default Hero;
