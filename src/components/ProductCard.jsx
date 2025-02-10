import Style from "./ProductCard.module.css";
import RatingIcon from "../assets/rating-icon.png";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
const ProductCard = ({ product }) => {
  const { cartItems, dispatch } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const cartItemsSet = new Set(cartItems.map((item) => item.id));
    const missingItem = !cartItemsSet.has(product.id);
    if (missingItem) {
      setAdded(false);
    }
  }, [cartItems]);

  const clickHandler = () => {
    if (!added) {
      setAdded(true);
      dispatch({
        type: "SUBMIT",
        payload: {
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
        },
      });
    } else {
      setAdded(false);
      const updatedCartItems = cartItems.filter(
        (curItem) => curItem.id != product.id
      );
      dispatch({ type: "UPDATE", payload: updatedCartItems });
    }
  };
  return (
    <div className={Style.cardWrapper}>
      <div className={Style.productImg}>
        <img src={product.image} />
      </div>
      <div className={Style.description}>
        <h5>{product.title}</h5>
        <div className={Style.rating}>
          <img src={RatingIcon} alt="rating icon" />
          <p>{product.rating.rate}</p>
        </div>
        <div className={Style.priceAddCartContainer}>
          <div>
            <p>Rs</p>
            <p className={Style.price}>{parseInt(product.price * 87)} </p>
          </div>

          {added ? (
            <button onClick={clickHandler}>
              <span class="material-symbols-outlined">check</span>
              <p>Added</p>
            </button>
          ) : (
            <button onClick={clickHandler}>
              <span className="material-symbols-outlined">
                add_shopping_cart
              </span>
              <p>Add to Cart</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
