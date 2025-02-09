import { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";
import axios from "axios";
export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
