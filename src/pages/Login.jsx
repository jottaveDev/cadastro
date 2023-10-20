import Header from '../Componentes/Header';
import Input from '../Componentes/Input';
import sideImage from '../assets/side-image.png';
import styles from '../App.module.css';
import useForm from '../hooks/useForm';
import Head from '../Componentes/Head';
import Loading from '../Componentes/Loading';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const email = useForm('email');
  const senha = useForm('password');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogin = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Nome: email.value,
          Email: email.value,
          Senha: senha.value,
        }),
      });
      const body = await response.json();
      navigate('/feed');
    } catch (error) {
      setLoading(false);
      setError('Usuário inválido!');
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && senha.validate()) {
      userLogin();
    }
  }

  return (
    <>
      <Head title="JE | Login" description="Página de Login." />
      <Header />
      <main className={styles.main}>
        <section className={styles.mainForm}>
          <form onSubmit={handleSubmit}>
            <h1>Fazer Login</h1>
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
            {error && <p style={{ marginBottom: '1.25rem' }}>{error}</p>}
            <div className={styles.esqueceuSenha}>
              <a href="#">Esqueceu a senha?</a>
            </div>
            <button type="submit">{loading ? <Loading /> : 'Login'}</button>
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
