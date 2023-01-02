import CommonButton from "../CommonButton";

import "./index.css";

const ItemPopular = ({ label, imgItem }) => {
  return (
    <div className="card-item-popular">
      <img src={imgItem} alt="item" />
      <h2>{label}</h2>
      <CommonButton
        label={"View recipe"}
        bgColor={"#eb1d36"}
        fontColor={"#FFF"}
        fontSize={"14px"}
        shadow={true}
      />
    </div>
  );
};

export default ItemPopular;
