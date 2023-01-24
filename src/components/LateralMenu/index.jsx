import {
  faHatCowboy,
  faHeart,
  faHome,
  faPlateWheat,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

const LateralMenu = () => {
  return (
    <div className="lateral-menu-container">
      <div className="lateral-menu-content">
        <h2>Discover</h2>
        <p>
          <FontAwesomeIcon className="icon" icon={faHome} /> Home
        </p>
        <p>
          <FontAwesomeIcon className="icon" icon={faSearch} /> Browse
        </p>
        <p>
          <FontAwesomeIcon className="icon" icon={faHeart} /> For You
        </p>
      </div>
      <div className="lateral-menu-content">
        <h2>Library</h2>
        <p>
          <FontAwesomeIcon className="icon" icon={faHatCowboy} /> Chefs
        </p>
        <p>
          <FontAwesomeIcon className="icon" icon={faStar} /> Favorites
        </p>
        <p>
          <FontAwesomeIcon className="icon" icon={faPlateWheat} /> My Recipes
        </p>
      </div>
    </div>
  );
};

export default LateralMenu;
