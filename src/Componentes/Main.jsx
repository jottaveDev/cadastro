import sideImage from '../assets/side-image.png';
import Form from './Form';
import styles from '../App.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <section className={styles.mainForm}>
        <Form />
      </section>
      <section className={styles.mainImg}>
        <img src={sideImage} alt="" />
      </section>
    </main>
  );
};

export default Main;
