import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//PrivateRoute has to have the same API as <Route />
const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        // It renders a <Route /> and passes all th props through to it.
        <Route {...rest} 
            render={props => {

                // Check if user is authenticated, if so, it will render the 'Component' prop, if not, will be redirected to user login.
                if (localStorage.getItem('token')){
                    return <Component {...props} />;
                }
                return <Redirect to ='/login'/>
            }}
        />
    );
};

export default PrivateRoute;