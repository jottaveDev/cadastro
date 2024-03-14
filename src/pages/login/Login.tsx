import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../api";
import Header from "../../components/header/Header";
import Input from "../../components/input/Input";
import Head from "../../helpers/Head";
import Loading from "../../helpers/loading/Loading";
import useForm from "../../hooks/useForm";
import sideImage from "../assets/side-image.jpg";
import styles from "../pages/Login.module.css";

const Home = () => {
  const email = useForm("email");
  const senha = useForm("password");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const navigate = useNavigate();

  const login = async () => {
    const { url, options } = LOGIN({
      email: email.value,
      password: senha.value,
    });
    try {
      setLoading(true);
      const response = await fetch(url, options);
      const data = await response.json();
      navigate("/feed");
      return data;
    } catch (error) {
      setLoading(false);
      setError("Usuário inválido!");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const isUserValid = email.validate() && senha.validate();
    if (isUserValid) login();
  };

  return (
    <>
      <Head title="JE | Login" description="Página de Login." />
      <Header />
      <main className={styles.main}>
        <section className={styles.mainForm}>
          <form onSubmit={handleSubmit}>
            <h1 className={styles.title}>Fazer Login</h1>
            <p className={styles.description}>Entre com suas informações.</p>
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              {...email}
            />
            <Input
              label="Senha"
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              {...senha}
            />
            {error && <p style={{ marginBottom: "1.25rem" }}>{error}</p>}
            <div className={styles.esqueceuSenha}>
              <a href="#">Esqueceu a senha?</a>
            </div>
            <button type="submit">{loading ? <Loading /> : "Login"}</button>
          </form>
        </section>
        <section className={styles.mainImg}>
          <img src={sideImage} alt="" />
        </section>
      </main>
    </>
  );
};

export default Home;
