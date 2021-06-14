import React from "react";
import Footer from "../UI/Footer";
import HomepageLayout from "../UI/HomepageLayout";

const Home = (props) => {
  return (
    <div>
      <HomepageLayout isLoggedin={props.isLoggedin} setisLoggedin={props.setisLoggedin} />
      <Footer/>
    </div>
  );
};

export default Home;
