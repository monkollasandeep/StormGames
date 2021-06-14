import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Login.module.css";
import { Container, Segment } from "semantic-ui-react";

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
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
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
    if (
      enteredEmail === registeredemail &&
      enteredPassword === registeredpassword
    ) {
      props.setisLoggedin(true);
      history.push("/home");
    } else {
      alert(`check login data 
      OR 
      New User-Please signup first`);
    }
    setenteredEmail("");
    setenteredPassword("");
  };
  return (
    <Container>
      <form onSubmit={loginSubmitHandler}>
        <Segment inverted style={{ marginTop: "20px" }}>
          <h1 style={{ textAlign: "center", color: "white" }}>LOGIN</h1>
        </Segment>
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
        <Segment inverted>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={!formIsValid}
            style={{ textAlign: "center", marginLeft: "500px" }}
          >
            Submit
          </button>
          <p
            className="forgot-password text-right"
            style={{ color: "white", textAlign: "center" }}
          >
            Forgot <Link to="/signup">password?</Link>
          </p>
        </Segment>
      </form>
    </Container>
  );
};

export default Login;
