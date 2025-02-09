import Style from "./Hero.module.css";
import girlImage from "../../assets/girl.png";

export const Hero = () => {
  return (
    <div className={Style.hero}>
      <div className={Style.heroTitle}>
        <h1>Your One-Stop</h1>
        <h3>Shop for Everything You Love</h3>
        <p> – Fast, Easy, Reliable!</p>
      </div>
      <img src={girlImage} alt="" />
    </div>
  );
};
