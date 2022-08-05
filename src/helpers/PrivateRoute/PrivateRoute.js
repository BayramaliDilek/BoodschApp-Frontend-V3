import React, {useContext} from 'react';
import {Redirect, Route} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";


function PrivateRoute({children, path}) {

    const {isAuth} = useContext(AuthContext);

    return (

        <Route exact path={path}>

            {isAuth ? children

                :

                <Redirect to={{pathname: '/login'}}/>
            }

        </Route>
    );
}

export default PrivateRoute;