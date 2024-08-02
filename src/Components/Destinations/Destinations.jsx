import Carousel from 'react-bootstrap/Carousel';
import ImageCard from '../ImageCard/ImageCard';
import styles from './Destinations.module.css';
import {
  lagos_nigeria,
  cape_town_SA,
  nairobi_kenya,
  aksum_ethiopia,
  daressalaam_tanzania,
} from '../../Assets/Images';


const popularDestinations = [
  {
    id: 1,
    title: 'Lagos, Nigeria',
    altText: 'Lagos, Nigeria',
    tagline: 'Come and enjoy the sweet lagos nightlife',
    image: lagos_nigeria
  },
  {
    id: 2,
    title: 'Cape Town, South Africa',
    altText: 'Cape Town, South Africa',
    tagline: 'Explore the exciting scenes of Cape Town, South Africa',
    image: cape_town_SA
  },
  {
    id: 3,
    title: 'Nairobi, Kenya',
    altText: 'Nairobi, Kenya',
    tagline: 'Get into the heart of true Africana in Nairobi, Kenya',
    image: nairobi_kenya
  },
  {
    id: 4,
    title: 'Aksum, Ethiopia',
    altText: 'Aksum, Ethiopia',
    tagline: 'Take a trip in history as you walk through the streets of Aksum, Ethiopia',
    image: aksum_ethiopia
  },
  {
    id: 5,
    title: 'Dar es Salaam, Tanzania',
    altText: 'Dar es Salaam, Tanzania',
    tagline: 'Explore the jewel of the east. Dar es Salaam, Tanzania ',
    image: daressalaam_tanzania
  },
];


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