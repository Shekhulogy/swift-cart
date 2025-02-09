import { useContext } from "react";
import Style from "./CartProductCard.module.css";
import { CartContext } from "../context/CartContext";

export const CartProductCard = ({ item, removeItem }) => {
  const clickHandler = () => {
    removeItem(item);
  };

  return (
    <div className={Style.productDescription}>
      <img src={item.image} alt="item image" />
      <div>
        <p className={Style.title}>{item.title}</p>
        <span className={Style.price}>
          <p>Rs</p>
          <p className={Style.amount}>{parseInt(item.price * 87)}</p>
        </span>
      </div>
      <div className={Style.deleteButton}>
        <span className="material-symbols-outlined" onClick={clickHandler}>
          delete
        </span>
      </div>
    </div>
  );
};
