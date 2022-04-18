import { useContext } from "react";
import Input from "./Input";
import classes from "./FoodListItem.module.css";

import CartContext from "../Store/food-context";

const FoodListItem = (props) => {
  const cartCtx = useContext(CartContext);
  const submitNowHandler = (amount) => {
    const items = {
      id: props.id,
      title: props.title,
      price: props.price,
      amount: amount,
    };

    cartCtx.addItems(items);
  };
  return (
    <li>
      <img src={props.src} alt="pictures" />
      <div className={classes.div}>
        <p>{props.title}</p>
        <p>{props.price}</p>
      </div>

      <Input onSubmitNow={submitNowHandler} />
    </li>
  );
};

export default FoodListItem;
