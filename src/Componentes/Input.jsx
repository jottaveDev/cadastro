const Input = ({
  id,
  label,
  type,
  value,
  onChange,
  error,
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
      />
      {error && <p style={{ marginTop: '6px', fontSize: '14px' }}>{error}</p>}
    </div>
  );
};

export default Input;
