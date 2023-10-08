import { useState } from 'react';

const types = {
  email: /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/,
  password: /[0-9a-zA-Z]{8,}/,
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const validate = (value) => {
    if (type === false) return true;
    if (types[type] && !types[type].test(value)) {
      setError('Digite um valor válido!');
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    setValue(target.value);
    setError(null);
  };

  return {
    value,
    setValue,
    error,
    onChange,
    setError,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
