import Style from "./ImageCard.module.css";

export const ImageCard = ({ product }) => {
  return (
    <div className={Style.productImg}>
      <img src={product.image} />
    </div>
  );
};
