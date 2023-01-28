import "./index.css";

import plate from "../../assets/plate.png";

const RecipeCard = () => {
  return (
    <div className="recipe-card-container">
      <img src={plate} alt="recipe image" />
      <p>
        Spaghetti wih tomato sauce and onion
      </p>
    </div>
  );
};

export default RecipeCard;