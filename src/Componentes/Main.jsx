import styles from "../Componentes/Main.module.css";
import sideImage from "../assets/side-image.jpg";
import Form from "./Form";

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
