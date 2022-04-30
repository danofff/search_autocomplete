import classes from "./FormControl.module.css";

import searchIcon from "./search.svg";
import micIcon from "./mic.svg";

const FormControl = ({
  value,
  setValue,
  placeholder,
  handleFocus,
  isFound = false,
}) => {
  return (
    <div className={`${classes.wrapper} ${isFound ? classes.found : ""}`}>
      <picture className={classes["search-icon"]}>
        <img src={searchIcon} alt="search icon" />
      </picture>
      <input
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        className={classes.input}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
      />
      <button className={classes["mic-icon"]}>
        <img src={micIcon} alt="mic icon" />
      </button>
    </div>
  );
};

export default FormControl;
