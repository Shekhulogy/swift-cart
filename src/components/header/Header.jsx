import { Logo } from "./Logo";
import { Categories } from "./Categories";
import Style from "./Header.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { LoginSignupContext } from "../../context/LoginSignupContext";

export const Header = ({ setShowCart, setStatus, setShowLogout }) => {
  const { cartItems } = useContext(CartContext);
  const { auth } = useContext(LoginSignupContext);

  const cartButtonClickHandler = () => {
    setShowCart(true);
  };

  const loginClickHandler = () => {
    setStatus({ loginContainer: true, logIn: true });
  };
  return (
    <div className={Style.header}>
      <Logo />
      <Categories />
      <div className={Style.buttons}>
        {auth ? (
          <div className={Style.user}>
            <span>Hello, {auth.name}</span>
            <div
              className={Style.userAccount}
              onClick={() => setShowLogout((pre) => (pre ? false : true))}
            >
              <span className="material-symbols-outlined">account_circle</span>
            </div>
          </div>
        ) : (
          <button className={Style.loginButton} onClick={loginClickHandler}>
            Log In
          </button>
        )}
        <div className={Style.cartButton} onClick={cartButtonClickHandler}>
          <span className="material-symbols-outlined">shopping_cart</span>
          {cartItems.length != 0 && (
            <span className={Style.totalItems}>
              <p>{cartItems.length}</p>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
