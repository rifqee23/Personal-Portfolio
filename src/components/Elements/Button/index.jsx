const Button = (props) => {
  const { children, colors, widths, textColor, onClick } = props;
  return (
    <>
      <button
        className={`${colors} ${textColor} py-2 ${widths}  rounded`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
