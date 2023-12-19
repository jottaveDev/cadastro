import { memo } from "react";
import styles from "../Componentes/Header.module.css";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" />
    </header>
  );
};

export default memo(Header);
