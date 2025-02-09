import Skeleton from "react-loading-skeleton";
import Style from "./ImageCard.module.css";

export const ImageSkeleton = () => {
  return (
    <div className={Style.productImg}>
      <Skeleton width={120} height={120} />
    </div>
  );
};
