import React, { useState, useRef, useEffect } from "react";
import CustomInput from "../../components/CustomInput";
import styles from "./FocusDemo.module.scss";

function FocusDemoPage() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValues, setInputValues] = useState({ input1: "", input2: "" });

  const customInputRef1 = useRef(null);
  const customInputRef2 = useRef(null);
  const renderCountRef = useRef(0);


  renderCountRef.current = renderCountRef.current + 1;

  const handleFocusInput1 = () => {
    customInputRef1.current.focus();
  };

  const handleFocusInput2 = () => {
    customInputRef2.current.focus();
  };

  const handleClearInputs = () => {
    setInputValue1("");
    setInputValue2("");
    customInputRef1.current.blur(); 
    customInputRef2.current.blur(); 
    setInputValues({ input1: "", input2: "" });
  };

  const handleGetValues = () => {
    const value1 = customInputRef1.current.getValue();
    const value2 = customInputRef2.current.getValue();
    setInputValues({ input1: value1, input2: value2 });
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Focus & Imperative Handle Demo</h1>

      <div className={styles.section}>
        <h3>Custom Input Control</h3>
        <p>
          This page demonstrates `forwardRef`, `useRef`, and
          `useImperativeHandle`.
        </p>

        <div className={styles.inputGroup}>
          <CustomInput
            ref={customInputRef1}
            label="Input 1"
            placeholder="Type something here..."
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
          />
          <CustomInput
            ref={customInputRef2}
            label="Input 2"
            placeholder="Type something else..."
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button onClick={handleFocusInput1}>Focus Input 1</button>
          <button onClick={handleFocusInput2}>Focus Input 2</button>
          <button onClick={handleClearInputs}>Clear Both</button>
          <button onClick={handleGetValues}>Get Values</button>
        </div>

        <div className={styles.valuesDisplay}>
          <p>
            <strong>Input 1 Value:</strong> {inputValues.input1}
          </p>
          <p>
            <strong>Input 2 Value:</strong> {inputValues.input2}
          </p>
        </div>

        <p className={styles.counter}>
          This component has re-rendered {renderCountRef.current} times.
          <br />
          (Counter uses `useRef` to avoid triggering re-renders)
        </p>
      </div>
    </div>
  );
}

export default FocusDemoPage;
