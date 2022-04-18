import { useReducer } from "react";
import CartContext from "./food-context";

const defaultValue = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  //   console.log(action, state, "I am logging in reducer");
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingCartIndex];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems, totalAmount: updatedAmount };
  }

  if (action.type === "REMOVE") {
    const itemToBeRemovedIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const itemToBeRemoved = state.items[itemToBeRemovedIndex];

    const updatedAmount = state.totalAmount - itemToBeRemoved.price;
    let updatedItems;
    if (itemToBeRemoved.amount === 1) {
      updatedItems = state.items.filter(
        (item) => item.id !== itemToBeRemoved.id
      );
    } else {
      const updatedItem = {
        ...itemToBeRemoved,
        amount: itemToBeRemoved.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[itemToBeRemovedIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultValue;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(reducer, defaultValue);

  const addItemHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const cartValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemHandler,
    removeItems: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
