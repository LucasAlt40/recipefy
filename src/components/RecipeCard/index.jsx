import "./index.css";

import plate from "../../assets/plate.png";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, ...rest }) => {
  return (
    <Link to={`/recipe/${recipe?.id}`} className="recipe-card-container">
      <img src={plate} alt="recipe image" />
      <p>{recipe?.title}</p>
    </Link>
  );
};

export default RecipeCard;
