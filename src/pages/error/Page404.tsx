import { memo } from "react";
import { Link } from "react-router-dom";
import Head from "../../helpers/Head";
import styles from "../pages/Page404.module.css";

const Page404 = () => {
  return (
    <>
      <Head title="Error 404" description="Página não encontrada." />
      <div className={styles.page404}>
        <h1>Página não encontrada</h1>
        <Link to="/">Voltar para Home</Link>
      </div>
    </>
  );
};

export default memo(Page404);
