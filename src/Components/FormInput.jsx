const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text capitalize">{label}</span>
      </div>
      <input
        type={type}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
        name={name}
      />
    </div>
  );
};
export default FormInput;
