import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends Component {
    render() {
        const Component = this.props.component;
        return this.props.isLoggedin ? ( 
          <div>
            <Component />  
          </div>
        )  : (<Redirect to={{pathname:'/login'}} />) 
    }
}

export default ProtectedRoute;
