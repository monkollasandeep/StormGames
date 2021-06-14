import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ProtectedRoute extends Component {
  render() {
    const Component = this.props.component;
    return this.props.isLoggedin ? (
      <div>
        <Component isLoggedin={this.props.isLoggedin} setisLoggedin={this.props.setisLoggedin}/>
      </div>
    ) : (
      <Redirect to={{ pathname: "/home" }} />
    );
  }
}

export default ProtectedRoute;
