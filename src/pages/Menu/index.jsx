import CategoryCard from "../../components/CategoryCard";
import LateralMenu from "../../components/LateralMenu";
import MenuHeader from "../../components/MenuHeader";

import "./index.css";

const Menu = () => {
  return (
    <>
      <MenuHeader />
      <LateralMenu />
      <main className="menu-container">
        <div className="category-container">
          <CategoryCard label={"Pizza"} />
          <CategoryCard label={"Pizza"} />
          <CategoryCard label={"Pizza"} />
        </div>
        <div className="recipes-container">
          <h1>Daily best recipes</h1>
        </div>
      </main>
    </>
  );
};

export default Menu;
