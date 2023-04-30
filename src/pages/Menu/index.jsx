import { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard";
import LateralMenu from "../../components/LateralMenu";
import MenuHeader from "../../components/MenuHeader";
import RecipeCard from "../../components/RecipeCard";

import "./index.css";
import axios from "axios";

const Menu = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const options = { method: "GET", url: "http://localhost:8080/recipe" };

    axios
      .request(options)
      .then((response) => {
        setRecipes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
          <div className="recipes-list">
            {recipes.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe?.id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Menu;
