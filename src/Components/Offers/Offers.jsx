import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import styles from './Offers.module.css';
import { topOffers } from './Offers.fixtures';


const Offers = () => {
  return (
    <section id="tours" className={ styles.offers }>
      <div>
        <h2>Special Offers</h2>
        <span className={ styles.tagline }>Deals you wouldn't want to miss out on</span>
      </div>
      <Row xs={1} md={2} lg={3}>
        {
          topOffers.map((offer) => (
            <Col key={ offer.id }>
              <Card className={ styles.offerCard }>
                <Card.Img
                  variant="top"
                  src={ offer.image }
                  alt={ offer.altText }
                />
                <Card.Body>
                  <Card.Title className={ styles.section }>
                    <span className={ styles.highlight }>{ offer.title }</span>
                    <span>{ offer.currencySymbol }{ offer.price }</span>
                  </Card.Title>
                  <Card.Text className={ styles.section }>
                    <span className={ styles.highlight }>
                      <FontAwesomeIcon icon={ faLocationDot } /> { offer.location }
                    </span>
                    <span className={ styles.small }>
                      <FontAwesomeIcon icon={ faStar } /> { offer.rating }
                      ({ offer.reviewCount })
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </section>
  )
}

export default Offers;
