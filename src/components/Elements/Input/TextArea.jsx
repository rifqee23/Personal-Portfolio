const TextArea = (props) => {
  const { id, value, onChanges, rows = "5" } = props;
  return (
    <>
      <textarea
        id={id}
        value={value}
        onChange={onChanges}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 resize-none leading-tight focus:outline-none focus:shadow-outline"
        rows={rows}
        required
      />
    </>
  );
};

export default TextArea;
