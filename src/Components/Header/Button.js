import { useContext, useEffect, useState } from "react";
import CartContext from "../Store/food-context";
import classes from "./Button.module.css";
import Icon from "./Icon";

const Button = (props) => {
  const [btnIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  //   const { items } = cartCtx;

  useEffect(() => {
    if (cartCtx.items.length > 0) {
      setButtonIsHighlighted(true);
      const timer = setTimeout(() => {
        setButtonIsHighlighted(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
    if (cartCtx.items.length === 0) {
      setButtonIsHighlighted(false);
    }
  }, [cartCtx.items.length]);

  const newClass = `${classes.btn} ${btnIsHighlighted ? classes.bump : ""}`;

  const itemCount = cartCtx.items.reduce((acc, item) => acc + item.amount, 0);
  return (
    <button className={newClass} onClick={props.onClickNow}>
      <Icon></Icon>
      <p>{itemCount}</p>
    </button>
  );
};

export default Button;
