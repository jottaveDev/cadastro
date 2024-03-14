import { Link } from "react-router-dom";
import Head from "../../helpers/Head";
import styles from "../pages/Feed.module.css";

const Feed = () => {
  return (
    <>
      <Head title="JE | Feed" description="Página de feed." />
      <section className={styles.feed}>
        <h1>Você está logado</h1>
        <Link to="/login">Fazer logout</Link>
      </section>
    </>
  );
};

export default Feed;
