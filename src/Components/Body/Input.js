import { useRef } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const inputRef = useRef();

  const submitChangeHandler = (e) => {
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    e.preventDefault();
    console.log(enteredAmountNumber);

    if (enteredAmountNumber > 0) {
      props.onSubmitNow(enteredAmountNumber);
    } else {
      return;
    }
    inputRef.current.value = "";
  };
  return (
    <form className={classes.form} onSubmit={submitChangeHandler}>
      <input type="number" className={classes.input} ref={inputRef} />
      <button type="submit" className={classes.btn}>
        +Add
      </button>
    </form>
  );
};

export default Input;
