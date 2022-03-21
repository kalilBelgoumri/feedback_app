function Button({ children, version, type, isDisabled }) {
  return (
    <button
      classeName={`btn btn-${version}`}
      type={type}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Button;
