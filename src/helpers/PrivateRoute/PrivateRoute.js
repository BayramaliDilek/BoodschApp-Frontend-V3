import React, {useContext} from 'react';
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

function PrivateRoute({children}) {
    const {auth} = useContext(AuthContext);

    return (
        auth === true ? children
            :


            <p>Om deze content te mogen zien moet u zijn ingelogd<br/>
                u wordt doorgestuurd..</p>


            &&


            <Redirect to={{pathname: '/login'}}/>
    );
}

export default PrivateRoute;