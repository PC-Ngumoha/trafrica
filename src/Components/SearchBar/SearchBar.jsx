import Button from "../Button/Button";
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={ styles.searchBar }>
      <form>
        <input type='text' placeholder='Location' className={styles.input}/>
        <input type='number' placeholder='Price' className={styles.input}/>
        <Button message='Search' className={styles.button}/>
      </form>
    </div>
  )
};

export default SearchBar;
