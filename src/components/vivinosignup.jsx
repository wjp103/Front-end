import React, { useState } from "react";
import "../scss/signupTypeEmail.scss";
import "../scss/typeEmailForm.scss";
import "../scss/checkbox.scss";

const Vivinosignup = (props) => {
  const [isCheck, setCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkHandler = (isChecked) => {
    if (isChecked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    // event.preventDefault();
    console.log(isCheck, password, confirmPassword + "");
    if (!isCheck) {
      return alert("Check our Terms and policy");
    }

    if (password !== confirmPassword) {
      return alert("Password and ConfirmPW are different");
    }
  };

  return (
    <div className="signupTypeEmail__signupTypeEmail--TUY94">
      <h2 className="signupTypeEmail__title--1CwHj">
        <span className="signupTypeEmail__titleJoin--kHN9v">Join Vivino</span>
        <span className="signupTypeEmail__titleSeparator--3QPY-"> | </span>
        <a
          className="anchor__anchor--2QZvA signupTypeEmail__titleLogIn--YCVsh"
          href="/sign-in"
        >
          Log in
        </a>
      </h2>
      <p className="signupTypeEmail__info--36yb7">
        Create a profile to save, rate and discover the right wine for you!
      </p>
      <div className="signupTypeEmail__tosInfo--3rf-K">
        <div className="checkbox__checkboxContainer--3Y6qo">
          <input
            className="checkbox__checkbox--16ShN"
            type="checkbox"
            checked={isCheck}
            onChange={checkHandler}
          ></input>
          <div className="checkbox__styledCheckbox--1rqtr">
            <svg
              enableBackground="new 0 0 16 16"
              viewBox="0 0 16 16"
              xmlns="http://www.w2.org/2000/svg"
              className="checkMark__checkMark--WLAOw checkbox__checkIcon--2x-TC"
            >
              <path
                d="m2.4 9.9 3.7 3.7 7.5-11.2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </div>
        </div>
        <div>
          "I accet "
          <a
            className="anchor__anchor--2QZvA signupTypeEmail__link--2Dwv8"
            href="/terms"
            target="_blank"
          >
            Terms of Use
          </a>
          " and "
          <a
            className="anchor__anchor--2QZvA signupTypeEmail__link--2Dwv8"
            href="/privacy"
            target="_blank"
          >
            Privacy Policy
          </a>
          "."
        </div>
      </div>

      <form noValidate className="signupTypeEmail__emailForm--1v6Xo">
        <label className="typeEmailForm__fieldContainer--c8BJR">
          <input
            className="Input__input--p7Rzo typeEmailForm__textField--9rRIq Input__sizeMedium--1-1ZA"
            placeholder="Type your email"
            value={email}
            onChange={onEmailHandler}
          ></input>
        </label>
        <label className="typeEmailForm__fieldContainer--c8BJR">
          <input
            className="Input__input--p7Rzo typeEmailForm__textField--9rRIq Input__sizeMedium--1-1ZA"
            placeholder="Type your password"
            value={password}
            onChange={onPasswordHandler}
          ></input>
        </label>
        <label className="typeEmailForm__fieldContainer--c8BJR">
          <input
            className="Input__input--p7Rzo typeEmailForm__textField--9rRIq Input__sizeMedium--1-1ZA"
            placeholder="Retype your password"
            value={confirmPassword}
            onChange={onConfirmPasswordHandler}
          ></input>
        </label>
        <button
          className="MuiButtonBase-root MuiButton-root jss1 MuiButton-contained typeEmailForm__modalButton--dS5pj MuiButton-containedPrimary jss2 MuiButton-disableElevation MuiButton-fullWidth"
          tabIndex="0"
          type="submit"
          onSubmit={onSubmit}
        >
          <span className="MuiButton-label jss7">
            <span className="jss11">Submit</span>
          </span>
        </button>
      </form>
      <div className="signupTypeEmail__footer--28-jC">
        "Already have a profile?"
        <br />
        <a
          className="anchor__anchor--2QZvA signupTypeEmail__link--2Dwv8"
          href="/sign-in"
        >
          Log in
        </a>
      </div>
    </div>
  );
};
export default Vivinosignup;
