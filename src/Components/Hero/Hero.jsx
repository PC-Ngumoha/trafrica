import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import styles from './Hero.module.css';
// import image from '../../Assets/Images/marakesh_morroco.jpg';

const places = [
  {
    name: 'Marrakesh',
    destination: 'Morocco',
    url: 'https://i.ibb.co/QXq5c9z/marrakech.jpg',
    alt: 'Marrakesh, Morocco'
  },
  {
    name: 'Zuma Rock',
    destination: 'Nigeria',
    url: 'https://i.ibb.co/VN0Fx3F/victoria-falls.jpg',
    alt: 'Zuma rock, Nigeria'
  },
  {
    name: 'Victoria Falls',
    destination: 'Zimbabwe',
    url: 'https://i.ibb.co/nbY8Jq7/zuma-rock.jpg',
    alt: 'Victoria falls, Zimbabwe'
  }
]

const Hero = () => {
  const [place, setPlace] = useState(places[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlace(places[Math.floor(Math.random() * places.length)]);
      console.log(place);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [ place ]);

  return (
    <section id="home" className={styles.hero}>
      <img src={place.url} alt={place.alt}/>
      <div className={ styles.content }>
        <span className={ styles.tagline }>See africa as you never have before.
        <br />
        Visit Marrakesh in Morocco</span>
        <Button className={ styles.button } message='Get Started'/>
      </div>
    </section>
  );
};

export default Hero;
