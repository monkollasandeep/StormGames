import React, { useState } from "react";
import { Fragment } from "react";
import "./NumberGuess.css";

const NumberGuess = (props) => {
  const [gameResult , setgameResult] = useState(); 
  const [userInput , setuserInput] = useState(0); 
  const randomNumber = Math.ceil(Math.random() * 100);
  console.log(`${randomNumber} - randomnumber`);

  const CheckGuess = (props) => {
    let guessedNumber = props.userInput;
    console.log(`${guessedNumber} - guessednumber`);
    if (guessedNumber > randomNumber) {
      setgameResult("Too High! Try Again.");
      //gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber < randomNumber) {
      setgameResult("Too Low! Try Again.");
      //gameResult.style.backgroundColor = "#1e217c";
    } else if (guessedNumber === randomNumber) {
      setgameResult("Congratulations! You got it right.");
      //gameResult.style.backgroundColor = "green";
    } else {
      setgameResult("Please provide a valid input.");
      //gameResult.style.backgroundColor = "#1e217c";
    }
  };

  const userInputHandler = (event) => {
    setuserInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setuserInput(event.target.value);
    CheckGuess(props);
  }; 

  return (
    <Fragment>
      <div className="bgcontainer">
        <div className="bgwhite">
          <div className="col-12 col-md-6 m-auto bgwhite pt-5 pb-5">
            <img
              className="guessgameimg"
              src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/guess-game-img.png"
              alt="guess game"
            />
            <p className="gamedescription">
              Find out the right number between 1 to 100
            </p>
          </div>
        </div>
        <div>
          <div className="guessbgcontainer">
            <h1 className="guessheading">
              Guess The Number
              <img
                className="guessnumberimage"
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/guess-number-img.png"
                alt="guess number"
              />
            </h1>
            <form onSubmit={submitHandler}>
              <input type="number" className="userinput" id="userInput" value={userInput} onChange={userInputHandler}/>
              <button type="submit" className="checkguess">
                Check
              </button>
            </form>
            <p className="gameresult">{gameResult}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NumberGuess;
