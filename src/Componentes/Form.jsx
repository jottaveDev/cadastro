import useForm from '../hooks/useForm.jsx';
import Input from './Input.jsx';

const Form = () => {
  const email = useForm('email');
  const senha = useForm('password');

  const configApi = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Nome: email.value,
      Email: email.value,
      Senha: senha.value,
    }),
  };

  const postDataApi = async (url, config) => {
    try {
      const response = await fetch(url, config);
      const dados = await response.json();

      return dados;
    } catch (error) {
      email.setError('Email já cadastrado');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.validate() && senha.validate()) {
      postDataApi('http://127.0.0.1:5000/cadastrar', configApi);
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
