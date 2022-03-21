function Button({ children, version, type, isDisabled }) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
}

Button.defautlProps = {
  version: "secondary",
  type: "button",
  disabled: false,
};

export default Button;
