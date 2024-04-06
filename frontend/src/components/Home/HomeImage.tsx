import homeImage from "../../img/home.png";
import logo from "../../img/logo.png";

import "./styles.css";

const HomeImage: React.FC = () => {
  return (
    <div className="img-container">
      <img
        className="inner-img"
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      />
      <img className="outer-img" src={logo} />
    </div>
  );
};

export default HomeImage;
