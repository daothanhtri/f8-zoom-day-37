import React, { forwardRef, useRef, useImperativeHandle } from "react";
import styles from "./CustomInput.module.scss";

const CustomInput = forwardRef(
  ({ label, placeholder, value, onChange }, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
      blur: () => {
        inputRef.current.blur();
      },
      getValue: () => {
        return inputRef.current.value;
      },
    }));

    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.input}
        />
      </div>
    );
  }
);

export default CustomInput;
