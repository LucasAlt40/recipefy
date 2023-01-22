import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import imgBG from "../../assets/signBG.jpg";
import googleIcon from "../../assets/googleIcon.png";
import appleIcon from "../../assets/appleIcon.png";

import CommonButton from "../../components/CommonButton";

import "./index.css";
import { Link } from "react-router-dom";
import CommonInput from "../../components/CommonInput";

const Sign = () => {
  return (
    <>
      <main>
        <div className="sign-content">
          <div className="img-content">
            <img src={imgBG} alt="background" />
            <h1>
              It's not just food, it's an <span>experience</span>.
            </h1>
          </div>
          <form>
            <div className="form-title">
              <div className="logo">
                <Link to={"/"}>
                  <h1>
                    Recipe<span>fy</span>
                  </h1>
                </Link>
              </div>
              <h1>
                Welcome back <FontAwesomeIcon className="icon" icon={faHeart} />
              </h1>
              <p>Welcome back! Please enter your details</p>
            </div>
            <div className="fields">
                <CommonInput
                  type={"email"}
                  label={"Email"}
                  placeholder={"email@example.com"}
                  htmlFor="email"
                />
                <CommonInput
                  type={"password"}
                  label={"Password"}
                  placeholder={"a secret word"}
                  htmlFor="password"
                />
                <p>Forgot password?</p>
            </div>
            <div className="buttons">
              <CommonButton
                label={"Sign In"}
                shadow={false}
                bgColor={"#eb1d36"}
                fontColor={"#FFF"}
                fontSize={"16px"}
                width={250}
                height={50}
                type="button"
              />

              <div className="alternatives">
                <hr />
                <p>or</p>
                <hr />
              </div>

              <div className="sign-externals-account">
                <CommonButton
                  label={"Sign In with Google"}
                  icon={<img src={googleIcon} alt="google icon" />}
                  shadow={false}
                  bgColor={"#FFF"}
                  border={"#eb1d36"}
                  fontColor={"#000"}
                  fontSize={"16px"}
                  width={250}
                  height={50}
                  type="button"
                />
                <CommonButton
                  label={"Sign In with Apple"}
                  icon={
                    <img
                      src={appleIcon}
                      className="custom-icon-style"
                      alt="apple icon"
                    />
                  }
                  shadow={false}
                  bgColor={"#FFF"}
                  border={"#eb1d36"}
                  fontColor={"#000"}
                  fontSize={"16px"}
                  width={250}
                  height={50}
                  type="button"
                />
              </div>
            </div>
            <div className="dont-have-account">
              <p>
                Don't have a account yet? <span>Sign Up</span>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Sign;
