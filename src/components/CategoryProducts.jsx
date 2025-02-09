import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Style from "./CategoryProducts.module.css";
import axios from "axios";
import { SkeletonProduct } from "./SkeletonProduct";
export const CategoryProducts = ({ category }) => {
  const [categoryProducts, setCategoryProducts] = useState();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => setCategoryProducts(response.data))
      .catch((error) => console.log(error));
  }, [category]);

  return (
    <div className={Style.categoryProducts}>
      {categoryProducts ? (
        categoryProducts.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })
      ) : (
        <SkeletonProduct />
      )}
    </div>
  );
};
