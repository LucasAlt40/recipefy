import "./index.css";
import profileIcon from "../../assets/profile.jpg";

const MenuHeader = () => {
  return (
    <header className="header-menu">
      <h1>
        Recipe<span>fy</span>
      </h1>

      <div className="search-input">
        <input type="text" placeholder="Search recipe by name, chef and etc..."/>
      </div>

      <div className="avatar">
        <img src={profileIcon} alt="profile icon" />
        <p>Diana Prince</p>
      </div>
    </header>
  );
};

export default MenuHeader;
