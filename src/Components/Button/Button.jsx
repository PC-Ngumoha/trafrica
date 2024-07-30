import styles from './Button.module.css';

const Button = ({ className = '', variant = 'default', message}) => {
  return (
    <button
      className={
        `${className} ${ styles.button } ${variant === 'outline' ?
        styles.outline : styles.normal}`
      }>
      {message}
    </button>
  )
};

export default Button;