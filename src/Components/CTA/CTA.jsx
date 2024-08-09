import Button from '../Button/Button';
import styles from './CTA.module.css';

/**
 * Implements the "Call To Action" section
 *
 * TODO
 * - Maybe the "Get Started" can be modified to be more aesthetically pleasing
 *   [OPTIONAL]
 *
 * @returns <CTA />
 */
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