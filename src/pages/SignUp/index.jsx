import { Link } from "react-router-dom"
import CommonInput from "../../components/CommonInput"
import CommonButton from "../../components/CommonButton"
import { useForm } from "react-hook-form"

import imgBG from "../../assets/signBG.jpg"
import googleIcon from "../../assets/googleIcon.png"
import appleIcon from "../../assets/appleIcon.png"
import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const SignUp = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-title">
              <div className="logo">
                <Link to={"/"}>
                  <h1>
                    Recipe<span>fy</span>
                  </h1>
                </Link>
              </div>
              <h1>
                Be Welcome! <FontAwesomeIcon className="icon" icon={faHeart} />
              </h1>
              <p>Please fill the fields to complete your registration</p>
            </div>
            <div className="fields">
              <CommonInput
                type={"text"}
                field={"name"}
                label={"Name"}
                placeholder={"Auguste Gusteau"}
                register={register}
                required
              />
              <CommonInput
                type={"email"}
                field={"email"}
                label={"Email"}
                placeholder={"email@example.com"}
                register={register}
                required
              />
              <CommonInput
                type={"email"}
                field={"emailConfirm"}
                label={"Confirm your email"}
                placeholder={"email@example.com"}
                preventPaste={true}
                register={register}
                required
              />
              <CommonInput
                type={"password"}
                field={"password"}
                label={"Password"}
                placeholder={"a secret word"}
                register={register}
                required
              />
            </div>
            <div className="buttons">
              <CommonButton
                label={"Sign Up"}
                shadow={false}
                bgColor={"#eb1d36"}
                fontColor={"#FFF"}
                fontSize={"16px"}
                width={250}
                height={50}
                type="submit"
              />

              <div className="alternatives">
                <hr />
                <p>or</p>
                <hr />
              </div>

              <div className="sign-externals-account">
                <CommonButton
                  label={"Sign Up with Google"}
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
                  label={"Sign Up with Apple"}
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
                Already have an account? So{" "}
                <Link to={"/sign"}>
                  <span>Sign In</span>
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default SignUp
