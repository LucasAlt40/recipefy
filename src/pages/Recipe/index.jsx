import LateralMenu from "../../components/LateralMenu";
import MenuHeader from "../../components/MenuHeader";
import CommonButton from "../../components/CommonButton";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <main
        className="recipe-container"
        style={{ marginLeft: "240px", width: "87%" }}
      >
        <div className="recipe-content">
          <img src="" alt="recipe-photo" />
          <h3>{recipe?.amount} Porção</h3>
          <h3>{recipe?.timeToDo}</h3>

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

        <div className="recipe-content">
          <h1>{recipe?.title}</h1>
          <hr />

          <div className="ingredients-list">
            <h2>Ingredients</h2>
            <ul>
              <div
                dangerouslySetInnerHTML={{ __html: recipe?.ingredients }}
              ></div>
            </ul>
          </div>
        </div>
        <div className="recipe-content">
          <div className="how-to-do">
            <h2>How to do</h2>
            <div dangerouslySetInnerHTML={{ __html: recipe?.howToDo }}></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Recipe;
