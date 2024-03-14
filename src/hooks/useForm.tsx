import { UserDataValid } from "@/models/userDataValid";
import { BaseSyntheticEvent, useState } from "react";

const types: UserDataValid = {
  email: /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/,
  password: /[0-9a-zA-Z]{8,}/,
};

const useForm = (type: string | boolean) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validate = (value: string) => {
    if (type === false) return true;
    if (
      types[type as keyof UserDataValid] &&
      !types[type as keyof UserDataValid].test(value)
    ) {
      setError("Digite um valor válido!");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const onChange = ({ target }: BaseSyntheticEvent): void => {
    if (target) setValue(target.value);
    setError("");
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
