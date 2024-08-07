import styles from './Button.module.css';

const Button = ({ className = '', variant, message, ...props }) => {
  return (
    <button
      className={
        `${className} ${ styles.button } ${variant === 'outline' ?
        styles.outline : styles.normal}`
      }
      {...props}
      >
      {message}
    </button>
  )
};

export default Button;