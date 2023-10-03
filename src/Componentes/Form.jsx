import useForm from '../hooks/useForm.jsx';
import Input from './Input.jsx';
import './Form.css';

const Form = () => {
  const email = useForm('email');
  const senha = useForm('password');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.validate() && senha.validate()) {
      console.log('Enviado');
    } else {
      console.log('Ops, erro');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Faça seu cadastro</h1>
      <p>Cadastre suas informações.</p>
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
      <div>
        <input type="checkbox" name="termos" id="termos" required />
        <label htmlFor="termos">Aceito os termos</label>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Form;
