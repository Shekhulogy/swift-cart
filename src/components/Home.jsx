import { Hero } from "./hero/Hero.jsx";
import { MostLiked } from "./mostLiked/MostLiked.jsx";
import { AllProducts } from "./allProducts/AllProducts.jsx";
import { ProductsContextProvider } from "../context/ProductsContextProvider.jsx";
import Style from "./Home.module.css";

export const Home = () => {
  return (
    <div className={Style.home}>
      <ProductsContextProvider>
        <Hero />
        <MostLiked />
        <AllProducts />
      </ProductsContextProvider>
    </div>
  );
};
