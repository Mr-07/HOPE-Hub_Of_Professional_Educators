import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { useAuth } from 'auth/AuthContext.js';

function AuthenticateRoute({component: Component, ...rest}) {
    const { currentUser } = useAuth();
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}
        ></Route>

    )
}

export default AuthenticateRoute
