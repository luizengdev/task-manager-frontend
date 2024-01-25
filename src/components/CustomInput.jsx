import "./CustomInput.scss";

const CustomInput = ({ label, value, onChange, onEnterPress }) => {
  return (
    <div className="custom-input-container">
      <input
        type="text"
        className="custom-input"
        value={value}
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => e.key === "Enter" && onEnterPress()}
      />

      {label ? (
        <label
          className={`${value.length > 0 ? "shrink" : ""} custom-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default CustomInput;
