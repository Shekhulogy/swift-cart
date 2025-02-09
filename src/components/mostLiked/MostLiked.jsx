import Style from "./MostLiked.module.css";
import { ImageCard } from "../ImageCard";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { ImageSkeleton } from "../ImageSkeleton";

export const MostLiked = () => {
  const products = useContext(ProductsContext);
  return (
    <div className={Style.mostLiked}>
      <h3>Most Liked</h3>
      <Marquee speed={30}>
        <div className={Style.products}>
          {products
            ? products.map((product) => (
                <ImageCard product={product} key={product.id} />
              ))
            : Array(8)
                .fill(0)
                .map((_, i) => <ImageSkeleton />)}
        </div>
      </Marquee>
      <Marquee direction={"right"} speed={30}>
        <div className={Style.products}>
          {products
            ? products.map((product) => (
                <ImageCard product={product} key={product.id} />
              ))
            : Array(8)
                .fill(0)
                .map((_, i) => <ImageSkeleton />)}
        </div>
      </Marquee>
    </div>
  );
};
