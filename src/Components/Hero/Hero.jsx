import { useEffect, useState } from 'react';
import { ReactTyped } from 'react-typed';
import Button from '../Button/Button';
import styles from './Hero.module.css';
import { marrakech, zuma_rock, victoria_falls
} from '../../Assets/Images/index';
import SearchBar from '../SearchBar/SearchBar';

const places = [
  {
    name: 'Marrakech',
    destination: 'Morocco',
    url: marrakech,
    alt: 'Marrakesh, Morocco'
  },
  {
    name: 'Zuma Rock',
    destination: 'Nigeria',
    url: zuma_rock,
    alt: 'Zuma rock, Nigeria'
  },
  {
    name: 'Victoria Falls',
    destination: 'Zimbabwe',
    url: victoria_falls,
    alt: 'Victoria falls, Zimbabwe'
  }
]

const Hero = () => {
  const [place, setPlace] = useState(places[0]);
  const [done, setDone] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const TYPE = 100;

  let frameTimeout;

  useEffect(() => {
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
    // eslint-disable-next-line
  }, [ done ]);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay}>
        <img src={ place.url } alt={ place.alt }/>
      </div>
      <div className={ styles.content }>
        <span className={ styles.tagline }>See Africa as you never have before,
        <br />
        visit <ReactTyped
          strings={[` ${place.name} in ${place.destination}`]}
          startDelay={200}
          typeSpeed={TYPE}
          cursorChar='|'
          smartBackspace
          showCursor
          onStringTyped={() => {
            frameTimeout = setTimeout(() => {
              setDone(true);
            }, (TYPE * 200));
          }}
        /> </span>
        <Button className={ styles.button } message='Get Started'
        onClick={() => console.log('clicked')}/>
      </div>
      <SearchBar />
    </section>
  );
};

export default Hero;
