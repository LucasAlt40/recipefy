import Header from "../../components/Header";
import LateralMenu from "../../components/LateralMenu";
import MenuHeader from "../../components/MenuHeader";

const Menu = () => {
  return (
    <>
      <MenuHeader />
      <main style={{ width: "100%", height: "100%" }}>
        <LateralMenu />
      </main>
    </>
  );
};

export default Menu;
