import LateralMenu from "../../components/LateralMenu";
import MenuHeader from "../../components/MenuHeader";
import CommonButton from "../../components/CommonButton";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import plate from "../../assets/plate.png";

import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlateWheat,
  faClock,
  faStarHalf,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      url: `http://localhost:8080/recipe/${id}`,
    };

    axios
      .request(options)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <MenuHeader />
      <LateralMenu />
      <main className="recipe-container">
        <div className="recipe-content basic-info">
          <img src={plate} alt="recipe-photo" />
          <h1 className="title">{recipe?.title} </h1>{" "}
          <div className="rate">
            <FontAwesomeIcon className="icon-rate" icon={faStar} />{" "}
            <h3>4,9</h3>
          </div>
          <hr />
          <div className="infos">
            <div className="info">
              <FontAwesomeIcon className="icon" icon={faPlateWheat} />{" "}
              <h3>{recipe?.amount} Porção</h3>
            </div>
            <div className="info">
              <FontAwesomeIcon className="icon" icon={faClock} />{" "}
              <h3>{recipe?.timeToDo}</h3>
            </div>
          </div>
          <div className="buttons">
            <CommonButton
              label={"Save Recipe"}
              bgColor={"#eb1d36"}
              fontColor={"white"}
              fontSize={16}
              shadow={true}
            />

            <CommonButton
              label={"I made it"}
              bgColor={"#eb1d36"}
              fontColor={"white"}
              fontSize={16}
              shadow={true}
            />
          </div>
          <p>Made by <strong>Diana</strong></p>
        </div>

        <div className="recipe-content ingredients">
          <div className="ingredients-list">
            <h1>Ingredients list</h1>
            <hr />
            <ul>
              <div dangerouslySetInnerHTML={{ __html: recipe?.ingredients }} />
            </ul>
          </div>
        </div>
        <hr className="separator" />
        <div className="recipe-content">
          <div className="how-to-do">
            <h1>How to do</h1>
            <hr />
            <div
              className="how-to-do-content"
              dangerouslySetInnerHTML={{ __html: recipe?.howToDo }}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Recipe;
