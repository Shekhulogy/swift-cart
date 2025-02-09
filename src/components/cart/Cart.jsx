import { useContext } from "react";
import { CartProductCard } from "../CartProductCard";
import Style from "./Cart.module.css";
import { CartContext } from "../../context/CartContext";

const Cart = ({ setShowCart }) => {
  const { cartItems, dispatch } = useContext(CartContext);

  let subTotal = 0;
  cartItems.map((item) => {
    subTotal += parseInt(item.price * 87);
  });

  const removeItem = (item) => {
    const updatedItems = cartItems.filter((curItem) => curItem.id != item.id);
    dispatch({ type: "UPDATE", payload: updatedItems });
  };

  const clickHandler = () => {
    setShowCart(false);
  };

  if (cartItems.length === 0) {
    setShowCart(false);
  }

  return (
    <div className={Style.cart}>
      <div className={Style.cancelButton}>
        <span className="material-symbols-outlined" onClick={clickHandler}>
          close
        </span>
      </div>
      {cartItems.length != 0 && (
        <>
          <div className={Style.subTotal}>
            <p>Sub Total</p>
            <span>
              <p>Rs</p>
              <h3>{subTotal}</h3>
            </span>
          </div>
          <p>Your Order Description </p>
          <div className={Style.orderItems}>
            {cartItems &&
              cartItems.map((item, index) => {
                return (
                  <CartProductCard
                    key={index}
                    item={item}
                    removeItem={removeItem}
                  />
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
