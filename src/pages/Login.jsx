import Header from '../Componentes/Header';
import Input from '../Componentes/Input';
import sideImage from '../assets/side-image.png';
import styles from '../App.module.css';
import useForm from '../hooks/useForm';

const Home = () => {
  const email = useForm('email');
  const senha = useForm('password');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('http://127.0.0.1:5000/usuarios')
      .then((response) => response.json())
      .then((dados) => console.log(dados));
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
            <div className={styles.esqueceuSenha}>
              <a href="#">Esqueceu a senha?</a>
            </div>
            <button type="submit">Cadastrar</button>
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
