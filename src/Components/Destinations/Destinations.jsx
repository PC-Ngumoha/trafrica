import Carousel from 'react-bootstrap/Carousel';
import styles from './Destinations.module.css';
import { lagos_nigeria, cape_town_SA } from '../../Assets/Images';

const Destinations = () => {
  return (
    <section id='destinations' className={ styles.destinations }>
      <div>
        <h2>Popular Destinations</h2>
        <span>Places our users can't seem to get enough of</span>
      </div>
      <Carousel>
        <Carousel.Item>
          <div className={styles.imageCard}>
            <img src={lagos_nigeria} alt='Lagos, Nigeria'/>
            <div>
              <h3>Lagos, Nigeria</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.imageCard}>
            <img src={cape_town_SA} alt='Cape Town, South Africa'/>
            <div>
              <h3>Cape Town, South Africa</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac.</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  )
};

export default Destinations