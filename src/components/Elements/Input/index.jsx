const Input = (props) => {
  const { id, type, value, onChanges } = props;
  return (
    <>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChanges}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required
      />
    </>
  );
};

export default Input;
