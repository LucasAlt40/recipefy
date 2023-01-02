import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import CommonButton from "../CommonButton";

import { Link } from "react-router-dom";

import "./index.css";

const Header = () => {
  return (
    <header>
      <h1>
        Recipe<span>fy</span>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"} id="active">
              Home
            </Link>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="sign-login">
        <Link to="/sign">
          <CommonButton
            label={"Sign in"}
            bgColor={"#eb1d36"}
            fontColor={"#FFF"}
            fontSize={"14px"}
            icon={<FontAwesomeIcon className="icon" icon={faUser} />}
          />
        </Link>
        <h3>
          BR <span> | </span> EN
        </h3>
      </div>
    </header>
  );
};

export default Header;
