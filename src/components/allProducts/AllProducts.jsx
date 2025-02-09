import { ProductsContext } from "../../context/ProductsContext";
import ProductCard from "../ProductCard";
import { useContext } from "react";
import Style from "./AllProducts.module.css";
import { SkeletonProduct } from "../SkeletonProduct";

export const AllProducts = () => {
  const products = useContext(ProductsContext);

  return (
    <div className={Style.allProducts}>
      {products ? (
        products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))
      ) : (
        <SkeletonProduct />
      )}
    </div>
  );
};
