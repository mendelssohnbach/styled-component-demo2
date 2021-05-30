const Button = ({ className, buttonLabel }) => {
  return (
    <div>
      <button className={className}>{buttonLabel}</button>
    </div>
  );
};

export default Button;
