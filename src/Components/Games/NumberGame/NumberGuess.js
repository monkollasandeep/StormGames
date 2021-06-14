import React, { useState } from "react";
import { Fragment } from "react";
import "./NumberGuess.css";

let randomNumber = Math.ceil(Math.random() * 10);

const NumberGuess = () => {
  const [userInput, setuserInput] = useState();
  const onChange = (e) => setuserInput(e.target.value);
  const [gameResult, setgameResult] = useState("");
  const [win, setWin] = useState(false);

  const checkGuess = () => {
    const guessedNumber = parseInt(userInput, setuserInput);
    if (guessedNumber === randomNumber) {
      setgameResult("Congratulations! You got it right.");
      setWin(true);
    }
    if (guessedNumber > randomNumber) {
      setgameResult("Too High! Try Again.");
    }
    if (guessedNumber < randomNumber) {
      setgameResult("Too Low! Try Again.");
    }
    if (guessedNumber === null) {
      setgameResult("Please provide a valid input.");
    }
  };

  const resetHandler = () => {
    randomNumber = Math.ceil(Math.random() * 10);
    setgameResult("");
    setuserInput();
    setWin(false);
    
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
            <input
              type="number"
              className="userinput"
              id="userInput"
              value={userInput}
              onChange={onChange}
            />
            <button type="submit" className="checkguess" onClick={checkGuess}>
              Check
            </button>
            <p className="gameresult">{gameResult}</p>
            <button type="reset" className="checkguess" onClick={resetHandler} disabled={!win}>Play Again</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NumberGuess;
