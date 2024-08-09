import Carousel from 'react-bootstrap/Carousel';
import ImageCard from '../ImageCard/ImageCard';
import styles from './Destinations.module.css';
import { popularDestinations } from './Destinations.fixtures';


/**
 * Implements the "Popular Destinations" carousel / slideshow
 *
 * TODO
 *
 * - Think of ways to improve the carousel [OPTIONAL]
 *
 * @returns <Destinations />
 */
const Destinations = () => {
  return (
    <section id='destinations' className={ styles.destinations }>
      <div>
        <h2>Top Destinations</h2>
        <span>Places our users can't seem to get enough of</span>
      </div>
      <Carousel className={styles.imageCarousel} controls={false}>
        {
          popularDestinations.map((destination) => (
            <Carousel.Item key={destination.id}>
              <ImageCard
                title={destination.title}
                image={destination.image}
                altText={destination.altText}
                tagline={destination.tagline}
              />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </section>
  )
};

export default Destinations