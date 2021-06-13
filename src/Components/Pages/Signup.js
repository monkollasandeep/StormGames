import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Signup = () => {
  let history = useHistory();

  const[register, setRegister] = useState(
    {name : "",age : "",email: "",password: "", reenterpassword: ""}
  );

  const nameChangeHandler = (event) => {
    setRegister({...register, name : event.target.value});
  };
  const ageChangeHandler = (event) => {
    setRegister({...register, age : event.target.value});
  };
  const emailChangeHandler = (event) => {
    setRegister({...register, email : event.target.value});
  };
  const passwordChangeHandler = (event) => {
    setRegister({...register, password : event.target.value});
  };
  const reenterpasswordChangeHandler = (event) => {
    setRegister({...register, reenterpassword : event.target.value});
  };


  const signupSubmitHandler = (event) => {
    event.preventDefault();

    if (register.password === register.reenterpassword && register.password.trim().length > 6) {
      const player = {
        name : register.name,
        age : register.age,
        email : register.email,
        password : register.password,
      };
      console.log(player);

      localStorage.setItem("name" , player.name);
      localStorage.setItem("age" , player.age);
      localStorage.setItem("email" , player.email);
      localStorage.setItem("password" , player.password);
      // alert("successfull");
      history.push("/login");
    } else {
      // alert("oops,check");
    }
  };



  return (
    <form onSubmit={signupSubmitHandler}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" placeholder="Name" value = {register.name} onChange={nameChangeHandler} />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input type="number" className="form-control" placeholder="Age" value = {register.age} onChange={ageChangeHandler} />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value = {register.email} 
          onChange={emailChangeHandler}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value = {register.password} 
          onChange={passwordChangeHandler}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Re-Enter password"
          value = {register.reenterpassword} 
          onChange={reenterpasswordChangeHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <Link to="/login">sign in?</Link>
      </p>
    </form>
  );
};

export default Signup;
