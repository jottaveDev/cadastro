import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST_USER } from "../api.jsx";
import Loading from "../helpers/Loading.jsx";
import useForm from "../hooks/useForm.jsx";
import styles from "./Form.module.css";
import Input from "./Input.jsx";

const Form = () => {
  const email = useForm("email");
  const senha = useForm("password");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isUserValid = email.validate() && senha.validate();

    if (isUserValid) {
      const { url, options } = POST_USER({
        Nome: email.value,
        Email: email.value,
        Senha: senha.value,
      });
      try {
        setLoading(true);
        const response = await fetch(url, options);
        const dados = await response.json();
        navigate("/login");
        return dados;
      } catch (error) {
        setLoading(false);
        email.setError("Email já cadastrado");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className={styles.title}>Faça seu cadastro</h1>
      <p className={styles.description}>Cadastre suas informações.</p>
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
      <button type="submit">{loading ? <Loading /> : "Cadastrar"}</button>
    </form>
  );
};

export default Form;
