import { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';
import Button from '../Button/Button';
import styles from './Hero.module.css';
// import image from '../../Assets/Images/marakesh_morroco.jpg';

const places = [
  {
    name: 'Marrakech',
    destination: 'Morocco',
    url: 'https://i.ibb.co/QXq5c9z/marrakech.jpg',
    alt: 'Marrakesh, Morocco'
  },
  {
    name: 'Zuma Rock',
    destination: 'Nigeria',
    url: 'https://i.ibb.co/nbY8Jq7/zuma-rock.jpg',
    alt: 'Zuma rock, Nigeria'
  },
  {
    name: 'Victoria Falls',
    destination: 'Zimbabwe',
    url: 'https://i.ibb.co/VN0Fx3F/victoria-falls.jpg',
    alt: 'Victoria falls, Zimbabwe'
  }
]

const Hero = () => {
  const [place, setPlace] = useState(places[0]);
  const [done, setDone] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const TYPE = 100;
  const BACK = 40;


  useEffect(() => {
    console.log(done);
    let frameTimeout;
    const nextFrame = (index, restart = false) => {
      setPlace(places[index]);
      if (restart) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
    }

    if (currentIndex < places.length - 1) {
      nextFrame(currentIndex);
    } else if (currentIndex === places.length - 1) {
      nextFrame(currentIndex, true);
    }
    setDone(false);

    return () => clearTimeout(frameTimeout);
  }, [ done ]);

  return (
    <section id="home" className={styles.hero}>
      <img src={ place.url } alt={ place.alt }/>
      <div className={ styles.content }>
        <span className={ styles.tagline }>See africa as you never have before.
        <br />
        Visit <ReactTyped
          strings={[` ${place.name} in ${place.destination}`]}
          typeSpeed={TYPE}
          backSpeed={BACK}
          cursorChar='|'
          showCursor
          onComplete={() => setDone(true)}
        /> </span>
        <Button className={ styles.button } message='Get Started'/>
      </div>
    </section>
  );
};

export default Hero;
