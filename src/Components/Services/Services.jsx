import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Services.module.css';
import { ourServices } from './Services.fixtures';

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
