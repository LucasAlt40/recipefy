import CommonButton from "../../components/CommonButton";
import Header from "../../components/Header";
import ItemPopular from "../../components/ItemPopular";

import backgroundImage from "../../assets/homePageBG.jpg";
import burgerImg from "../../assets/burger.png";

import "./index.css";

const HomePage = () => {
  return (
    <>
      <img src={backgroundImage} className="bgImg" alt="background" />
      <main>
        <Header />
        <div className="content">
          <div className="info-text">
            <h1>Millions of recipes in one place. Try it now.</h1>
            <div className="info-buttons">
              <CommonButton
                label={"View recipes"}
                bgColor={"#eb1d36"}
                fontColor={"#FFF"}
                fontSize={"16px"}
                shadow={true}
                width={160}
              />
              <CommonButton
                label={"Add a recipe"}
                bgColor={"#FFFFFF"}
                fontColor={"#000"}
                fontSize={"16px"}
                shadow={true}
                width={160}
              />
            </div>
          </div>
          <div className="recipes-popular">
            <ItemPopular label={"Hamburger"} imgItem={burgerImg} />
            <ItemPopular label={"Hamburger"} imgItem={burgerImg} />
            <ItemPopular label={"Hamburger"} imgItem={burgerImg} />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
