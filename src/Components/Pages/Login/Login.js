import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Login.module.css";

const Login = (props) => {
  let history = useHistory();
  const [enteredEmail, setenteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setenteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes("@") &&
          enteredEmail.includes(".com") &&
          enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const validateEmailHandler = () => {
    setEmailIsValid(
      enteredEmail.includes("@") && enteredEmail.includes(".com")
    );
    // alert("Please Enter a correct Email Address");
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
    // alert("Please Make a password of Minimum length 6");
  };

  const enteredEmailChangeHandler = (event) => {
    setenteredEmail(event.target.value);
  };
  const enteredPasswordChangeHandler = (event) => {
    setenteredPassword(event.target.value);
  };

  const loginSubmitHandler = (event) => {
    event.preventDefault();

    const registeredemail = localStorage.getItem("email");
    const registeredpassword = localStorage.getItem("password");
    if (enteredEmail === registeredemail && enteredPassword === registeredpassword) {
      props.setisLoggedin(true);
      // alert("logged in");
      history.push("/home");
    } else {
      // alert("check login data ");
    }
    // console.log(enteredEmail);
    // console.log(enteredPassword);
    setenteredEmail("");
    setenteredPassword("");
  };
  return (
    <form onSubmit={loginSubmitHandler}>
      <h3>Sign In</h3>

      <div
        className={`${styles.control} ${
          emailIsValid === false ? styles.invalid : ""
        }`}
      >
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={enteredEmail}
          onChange={enteredEmailChangeHandler}
          onBlur={validateEmailHandler}
        />
      </div>

      <div
        className={`${styles.control} ${
          passwordIsValid === false ? styles.invalid : ""
        }`}
      >
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={enteredPassword}
          onChange={enteredPasswordChangeHandler}
          onBlur={validatePasswordHandler}
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

      <button type="submit" className="btn btn-primary btn-block" disabled={!formIsValid}>
        Submit
      </button>
      <p className="forgot-password text-right">
        Forgot <Link to="/signup">password?</Link>
      </p>
    </form>
  );
};

export default Login;
