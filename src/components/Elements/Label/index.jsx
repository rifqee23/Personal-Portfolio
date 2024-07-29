const Label = (props) => {
  const { children, htFor } = props;
  return (
    <>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={htFor}
      >
        {children}
      </label>
    </>
  );
};

export default Label;
