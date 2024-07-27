const Button = (props) => {
  const { children, colors, widths, textColor, onClick, hover } = props;
  return (
    <>
      <button
        className={`${colors} ${textColor} py-2 ${widths} ${hover} transition delay-100 rounded`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
