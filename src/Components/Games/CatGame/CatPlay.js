import { Fragment } from "react";
import "./CatPlay.css";
const CatPlay = () => {
  const SwitchOn = () => {
    document.getElementById("bulbImage").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switched On";
    document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
  };

  const SwitchOff = () => {
    document.getElementById("bulbImage").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("onSwitch").style.backgroundColor = "#22c55e";
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";
  };

  return (
    <Fragment>
      <div className="darkbackground">
        <div>
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
            className="bulbimage"
            id="bulbImage"
            alt="bulb on"
          />
        </div>
        <div>
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
            className="catimage"
            id="catImage"
            alt="bulb off"
          />
        </div>
        <div className="switchcard">
          <div className="switchboard">
            <h1 className="switch-status" id="switchStatus">
              Switched On
            </h1>
            <button className="offswitch" id="offSwitch" onClick={SwitchOff}>
              OFF
            </button>
            <button className="onswitch" id="onSwitch" onClick={SwitchOn}>
              ON
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CatPlay;
