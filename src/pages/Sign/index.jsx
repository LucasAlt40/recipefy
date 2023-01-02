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
              <h1>Welcome back</h1>
              <p>Welcome back! Please enter your details</p>
            </div>
            <div className="fields">
              <div>
                <label htmlFor="password">
                  <p>Email</p>
                  <input type="email" name="email" id="email" />
                </label>
              </div>
              <div>
                <label htmlFor="password">
                  <p>Password</p>
                  <input type="password" name="password" id="password" />
                </label>
              </div>
            </div>
            <CommonButton
              label={"Sign in"}
              shadow={true}
              bgColor={"#eb1d36"}
              fontColor={"#FFF"}
              fontSize={"16px"}
            />
          </form>
        </div>
      </main>
    </>
  );
};

export default Sign;
