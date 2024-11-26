import { Link } from "react-router-dom";

const SecondaryBanner = ({ image, buttonImage, bottom }) => {
  return (
    <div className={`${buttonImage && "relative"}`}>
      <img src={image} alt="" />
      {buttonImage && (
        <Link to="/register">
          <img
            className={`absolute ${
              bottom ? "-bottom-20" : "bottom-20"
            } left-1/2 transform -translate-x-1/2`}
            src={buttonImage}
            alt=""
          />
        </Link>
      )}
    </div>
  );
};

export default SecondaryBanner;
