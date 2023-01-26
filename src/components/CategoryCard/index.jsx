import background from "../../assets/pizzaBG.jpg";
import "./index.css";


const CategoryCard = ({ label }) => {
  return (
    <div className="category-card">
      <img src={background} alt="category image" />
      <h1>{label}</h1>
    </div>
  );
};

export default CategoryCard;
