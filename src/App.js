import { useState } from "react";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  const clickChangeHandler = () => {
    setShowCart(true);
  };
  const removeCartHandler = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      <Header onClickNow={clickChangeHandler}></Header>

      {showCart && <Modal onRemoveNow={removeCartHandler} />}
      <Body></Body>
    </CartProvider>
  );
}

export default App;
