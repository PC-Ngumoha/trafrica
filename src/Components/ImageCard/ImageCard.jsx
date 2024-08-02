import styles from './ImageCard.module.css';

const ImageCard = ({ image, altText, title, tagline }) => {
  return (
    <div className={styles.imageCard}>
      <img src={image} alt={altText}/>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{tagline}</p>
      </div>
    </div>
  );
};

export default ImageCard;
