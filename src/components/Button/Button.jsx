import './Button.css';

const Button = (props) => {
  const { label, type, className, handleClick, disabled } = props;
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={handleClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

export { Button };
