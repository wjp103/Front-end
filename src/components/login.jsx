import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form>
      <h3>Sign In</h3>

      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Type your email"
          value={email || ""}
          onChange={onEmailHandler}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Type your password"
          value={password || ""}
          onChange={onPasswordHandler}
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        onSubmit={onSubmit}
      >
        Submit
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="!#">password?</a>
      </p>
    </form>
  );
};

export default Login;
