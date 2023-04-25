import LateralMenu from "../../components/LateralMenu";
import MenuHeader from "../../components/MenuHeader";
import CommonButton from "../../components/CommonButton";

const Recipe = () => {
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
          <h3>1 Porção</h3>
          <h3>30 Minutos</h3>

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
          <h1>Macarrão ao molho pesto</h1>
          <hr />

          <div className="ingredients-list">
            <h2>Ingredients List</h2>
            <ul>
              <li>
                <input type="checkbox" name="ingredient" id="ingredient" />{" "}
                <label htmlFor="ingredient">100g de macarrão</label>
              </li>
              <li>
                <input type="checkbox" name="ingredient" id="ingredient" />
                <label htmlFor="ingredient">100g de macarrão</label>
              </li>
              <li>
                <input type="checkbox" name="ingredient" id="ingredient" />
                <label htmlFor="ingredient">100g de macarrão</label>
              </li>
              <li>
                <input type="checkbox" name="ingredient" id="ingredient" />
                <label htmlFor="ingredient">100g de macarrão</label>
              </li>
              <li>
                <input type="checkbox" name="ingredient" id="ingredient" />
                <label htmlFor="ingredient">100g de macarrão</label>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Recipe;
