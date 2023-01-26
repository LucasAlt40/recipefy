import CategoryCard from "../../components/CategoryCard";
import LateralMenu from "../../components/LateralMenu";
import MenuHeader from "../../components/MenuHeader";

import "./index.css";

const Menu = () => {
  return (
    <>
      <MenuHeader />
      <main
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
        }}
      >
        <LateralMenu />
        <div className="category-container">
          <CategoryCard label={"Pizza"} />
          <CategoryCard label={"Pizza"} />
          <CategoryCard label={"Pizza"} />
        </div>
      </main>
    </>
  );
};

export default Menu;
