const CustomInput = ({ label, value }) => {
  return (
    <div className="custom-input-container">
      <input className="custom-input" type="text" />
      {label ? (
        <label
          className={`${
            value.length !== "" ? "shrink" : ""
          } custom-input-label`}
        ></label>
      ) : null}
    </div>
  );
};

export default CustomInput;
