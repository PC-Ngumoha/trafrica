import Button from '../Button/Button';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section id='cta' className={ styles.cta }>
      <div>
        <h3>So What Are You Waiting For ?</h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent semper.</span>
        <Button
          className={ styles.button }
          variant='outline'
          message='Get Started'
        />
      </div>
    </section>
  );
};

export default CTA;