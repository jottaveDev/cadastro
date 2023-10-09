import Header from '../Componentes/Header';
import Input from '../Componentes/Input';
import sideImage from '../assets/side-image.png';
import styles from '../App.module.css';
import useForm from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const email = useForm('email');
  const senha = useForm('password');
  const [dados, setDados] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:5000/usuarios')
      .then((response) => response.json())
      .then((dados) => setDados(dados));
  }, []);

  const filterUser = () => {
    const [usuario] = dados.filter((user) => user.includes(email.value));

    if (!usuario) {
      setError('Usuario não cadastrado');
      email.validate();
      return false;
    } else if (usuario[1] === email.value && usuario[2] === senha.value) {
      setError(null);
      navigate('/feed');
      return true;
    } else {
      setError('Email ou senha incorretos');
    }
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && senha.validate()) {
      filterUser();
    }
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.mainForm}>
          <form onSubmit={handleSubmit}>
            <h1>Fazer Login</h1>
            <p>Entre com suas informações.</p>
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
            {error && <p>{error}</p>}
            <div className={styles.esqueceuSenha}>
              <a href="#">Esqueceu a senha?</a>
            </div>
            <button type="submit">Login</button>
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
