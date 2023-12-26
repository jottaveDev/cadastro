const Input = ({
  id,
  label,
  type,
  value,
  error,
  onChange,
  onBlur,
  placeHolder,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeHolder}
        style={{ borderColor: `${error ? "red" : ""}`, marginBottom: "0" }}
      />
      {error && (
        <p style={{ marginTop: "6px", fontSize: "14px", marginBottom: "0" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
