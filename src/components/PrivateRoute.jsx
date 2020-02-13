import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { fakeAuth } from '../common';

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Router>
                <Route
                    {...rest}
                    render={props =>
                        fakeAuth.isAuthenticated ? (
                            <Component {...props} />
                        ) : (
                                <Redirect
                                    to={{
                                        pathname: "/login",
                                        // state: { from: props.location }
                                    }}
                                />
                            )
                    }
                />
        </Router>
    )
}
export default PrivateRoute
