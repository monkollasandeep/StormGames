import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Segment } from "semantic-ui-react";

const Signup = () => {
  let history = useHistory();

  const [register, setRegister] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    reenterpassword: "",
  });

  const nameChangeHandler = (event) => {
    setRegister({ ...register, name: event.target.value });
  };
  const ageChangeHandler = (event) => {
    setRegister({ ...register, age: event.target.value });
  };
  const emailChangeHandler = (event) => {
    setRegister({ ...register, email: event.target.value });
  };
  const passwordChangeHandler = (event) => {
    setRegister({ ...register, password: event.target.value });
  };
  const reenterpasswordChangeHandler = (event) => {
    setRegister({ ...register, reenterpassword: event.target.value });
  };

  const signupSubmitHandler = (event) => {
    event.preventDefault();

    if (
      register.password === register.reenterpassword &&
      register.password.trim().length > 6 &&
      register.email.includes("@") &&
      register.email.includes(".com") &&
      register.age > 8
    ) {
      const player = {
        name: register.name,
        age: register.age,
        email: register.email,
        password: register.password,
      };

      localStorage.setItem("name", player.name);
      localStorage.setItem("age", player.age);
      localStorage.setItem("email", player.email);
      localStorage.setItem("password", player.password);
      // alert("successfull");
      history.push("/login");
      alert("successfull");
    } else {
      alert(`Please check the following :- 
      1) Email is valid 
      2) Passwords at both fields should match
      3) Age should above 8 Years`);
    }
  };

  return (
    <Container>
      <form onSubmit={signupSubmitHandler}>
        <Segment inverted style={{ marginTop: "20px" }}>
          <h1 style={{ textAlign: "center", color: "white" }}>REGISTER</h1>
        </Segment>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={register.name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Age"
            value={register.age}
            onChange={ageChangeHandler}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={register.email}
            onChange={emailChangeHandler}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={register.password}
            onChange={passwordChangeHandler}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Re-Enter password"
            value={register.reenterpassword}
            onChange={reenterpasswordChangeHandler}
          />
        </div>
        <Segment inverted>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            style={{ textAlign: "center", marginLeft: "485px" }}
          >
            Sign Up
          </button>
          <p
            className="forgot-password text-right"
            style={{ color: "white", textAlign: "center" }}
          >
            Already registered <Link to="/login">sign in?</Link>
          </p>
        </Segment>
      </form>
    </Container>
  );
};

export default Signup;
