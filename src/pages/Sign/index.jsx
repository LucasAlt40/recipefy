import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CommonButton from "../../components/CommonButton";
import Header from "../../components/Header";

import "./index.css";

const Sign = () => {
  return (
    <>
      <main>
        <Header />
        <div>
          <form>
            <div className="form-title">
              <h1>
                Welcome back <FontAwesomeIcon className="icon" icon={faHeart} />
              </h1>
              <p>Welcome back! Please enter your details</p>
            </div>
            <div className="fields">
              <div>
                <label htmlFor="email">
                  <p>Email</p>
                  <input type="email" name="email" id="email" placeholder="email@example.com" />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  <p>Password</p>
                  <input type="password" name="password" id="password" placeholder="a secret word" />
                </label>
              </div>
            </div>
            <div className="buttons">
              <CommonButton
                label={"Sign in"}
                shadow={false}
                bgColor={"#eb1d36"}
                fontColor={"#FFF"}
                fontSize={"16px"}
                width={250}
                height={45}
                type="button"
              />
              <p>Don't have an account yet?</p>
              <CommonButton
                label={"Sign up"}
                shadow={false}
                bgColor={"#FFF"}
                border={"#eb1d36"}
                fontColor={"#000"}
                fontSize={"16px"}
                width={250}
                height={45}
                type="button"
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Sign;
