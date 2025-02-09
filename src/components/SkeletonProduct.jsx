import Style from "./ProductCard.module.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonProduct = () => {
  return (
    <SkeletonTheme baseColor="	#DCDCDC" highlightColor="	#D0D0D0">
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <div className={Style.cardWrapper} key={i}>
            <div className={Style.productImg}>
              <Skeleton width={180} height={180} />
            </div>
            <div className={Style.description}>
              <Skeleton count={4} />
            </div>
          </div>
        ))}
    </SkeletonTheme>
  );
};
