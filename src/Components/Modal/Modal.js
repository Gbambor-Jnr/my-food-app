import { Fragment } from "react/cjs/react.production.min";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { useContext } from "react";
import CartContext from "../Store/food-context";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onRemoveNow}>
      {props.children}
    </div>
  );
};
const ModalOverlay = (props) => {
  const cartCtx = useContext(CartContext);
  // const cartItemAddHandler = (item) => {
  //   cartCtx.addItems({ ...item, amount: 1 });
  // }

  const cartItemAddHandler = (item) => {
    cartCtx.addItems({ ...item, amount: 1 }); //this amount of 1 here helps to overwrite the initial amount that came from adding the initial items to the cart so we can now increase or decrrease the counters, and recall  from the CartProvider, amount: existingItem.amount + action.item.amount,
  };
  // const cartItemRemoveHandler = (item) => {
  //   cartCtx.removeItems(item.id);
  // };

  //We bind that the cartItemHandler here to null because the function call insdie the cartItemHandler is a function called from another object and is now passed into the button. If it isnt bound to null, the 'this' keyword inside the function would be pointing to the button

  // const removeHandler = (item) => {
  //   cartCtx.removeItems(item.id);
  // };

  const foodlists = cartCtx.items.map((item) => {
    return (
      <li key={item.id}>
        <p>{item.title}</p>
        <p>{item.amount}</p>
        <p>{item.price}</p>
        <button onClick={cartItemAddHandler.bind(null, item)}>+</button>
        <button onClick={cartCtx.removeItems.bind(null, item.id)}>-</button>
      </li>
    );
  });

  return (
    <div className={classes.overlay}>
      <ul>{foodlists}</ul>
      <p>Total: ${cartCtx.totalAmount.toFixed(2)}</p>
      <div>
        <button onClick={props.onRemoveNow}>Close</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onRemoveNow={props.onRemoveNow}>{props.children}</Backdrop>,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onRemoveNow={props.onRemoveNow}>
          {props.children}
        </ModalOverlay>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
