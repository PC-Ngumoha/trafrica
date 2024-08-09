import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from './Stats.module.css';
import { interestingStats } from './Stats.fixtures';

/**
 * Implements the "Interesting stats" section of the Home page which displays
 * certain statistics about the platform that maybe of interest to the user.
 *
 * BUGS
 * - The countdown effect in this section counts out during load-time for the
 *   website. As a result, the user is unable to actually see it happening. I
 *   want it to be able to wait for the user to view it before it starts
 *   counting.
 *
 * @returns <Stats />
 */
const Stats = () => {
  const initialCount = [0, 0, 0, 0]
  const [count, setCount] = useState(initialCount);

  useEffect(() => {

    let interval;

    const incrementCount = (idx, timer, increment) => {
      interval = setInterval(() => {
        if (count[idx] < interestingStats[idx].count) {
          count[idx] += increment;
          setCount([...count]);
        } else {
          clearInterval(interval);
        }
      }, timer);
    }

    incrementCount(0, 10, 100);
    incrementCount(1, 20, 20);
    incrementCount(2, 100, 5);
    incrementCount(3, 20, 5);

    return () => {
      clearInterval(interval);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section className={ styles.stats }>
      <div>
        <Row xs={2} md={2} lg={4}>
          {
            interestingStats.map((stat, idx) => (
              <Col key={ stat.id }>
                <span className={ styles.count }>{ count[idx] }</span>
                <span>
                 # of {stat.name}
                </span>
              </Col>
            ))
          }
        </Row>
      </div>
    </section>
  );
};

export default Stats;
