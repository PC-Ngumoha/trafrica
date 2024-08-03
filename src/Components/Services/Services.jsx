import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlaneUp,
  faWaterLadder,
  faBowlFood,
  faHouse
} from '@fortawesome/free-solid-svg-icons';
import styles from './Services.module.css';

const ourServices = [
  {
    id: 1,
    icon: faPlaneUp,
    title: 'Travel Fully Covered',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis commodo orci. Vestibulum dignissim cursus odio nec condimentum. Duis sollicitudin.'
  },
  {
    id: 2,
    icon: faWaterLadder,
    title: 'All Amenities Provided',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis commodo orci. Vestibulum dignissim cursus odio nec condimentum. Duis sollicitudin.'
  },
  {
    id: 3,
    icon: faBowlFood,
    title: 'Feeding Fully Covered',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis commodo orci. Vestibulum dignissim cursus odio nec condimentum. Duis sollicitudin.'
  },
  {
    id: 4,
    icon: faHouse,
    title: 'Top-notch Accomodation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis commodo orci. Vestibulum dignissim cursus odio nec condimentum. Duis sollicitudin.'
  },
];

const Services = () => {
  return (
    <section id='services' className={styles.services}
    >
      <div>
        <h2>Our Services</h2>
      </div>
      <Row xs={1} md={2} lg={4}>
        {
          ourServices.map((service) => (
            <Col key={ service.id } className={ styles.serviceCard }>
              <FontAwesomeIcon icon={ service.icon }  className={styles.icon}/>
              <h3>{ service.title }</h3>
              <span>{ service.description }</span>
            </Col>
          ))
        }
      </Row>
    </section>
  );
};

export default Services;
