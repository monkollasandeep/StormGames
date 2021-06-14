import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./Components/Pages/Home";
import Signup from "./Components/Pages/Signup";
import Login from "./Components/Pages/Login/Login";
import Profile from "./Components/Pages/Profile";
import MainNavigation from './Components/UI/MainNav/MainNavigation';
import Games from "./Components/Games/Games";
import CatPlay from "./Components/Games/CatGame/CatPlay";
import NumberGuess from "./Components/Games/NumberGame/NumberGuess";
import TimeBomb from "./Components/Games/TimeBomb/TimeBomb";
import Pokeman from "./Components/Games/PokemanApiGame/Pokeman";
import UserApi from "./Components/Games/UserApiGame/UserApi";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



const App = () => {
  const [isLoggedin, setisLoggedin] = useState(false);

  const loginHandler = (event) => {
    if (event) {
      setisLoggedin(true);
    } else {
      setisLoggedin(false);
    }
  };
  return (
    <Router>
      <MainNavigation isLoggedin = {isLoggedin} setisLoggedin={loginHandler}/>
      <Switch>
        <Route path="/" exact>
          <Home isLoggedin={isLoggedin} setisLoggedin={loginHandler} />
        </Route>
        <Route path="/home">
          <Home isLoggedin={isLoggedin} setisLoggedin={loginHandler} />
        </Route>
        <Route path="/login">
          <Login isLoggedin={isLoggedin} setisLoggedin={loginHandler} />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>

        <ProtectedRoute
          exact
          path="/profile"
          component={Profile}
          isLoggedin={isLoggedin}
          setisLoggedin={loginHandler}
        />
        <ProtectedRoute
          exact
          path="/games"
          component={Games}
          isLoggedin={isLoggedin}
          setisLoggedin={loginHandler}
        />
        <ProtectedRoute
          exact
          path="/games/catplay"
          component={CatPlay}
          isLoggedin={isLoggedin}
          setisLoggedin={loginHandler}
        />
        <ProtectedRoute
          exact
          path="/games/numberguess"
          component={NumberGuess}
          isLoggedin={isLoggedin}
          setisLoggedin={loginHandler}
        />
        <ProtectedRoute
          exact
          path="/games/timebomb"
          component={TimeBomb}
          isLoggedin={isLoggedin}
          setisLoggedin={loginHandler}
        />
        <ProtectedRoute
          exact
          path="/games/pokemanapi"
          component={Pokeman}
          isLoggedin={isLoggedin}
          setisLoggedin={loginHandler}
        />
        <ProtectedRoute
          exact
          path="/games/usersapi"
          component={UserApi}
          isLoggedin={isLoggedin}
          setisLoggedin={loginHandler}
        />
        <Route path="*" exact>
          <Home isLoggedin={isLoggedin} setisLoggedin={loginHandler} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
