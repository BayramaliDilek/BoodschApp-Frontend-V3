import React, {useContext} from 'react';
import {Route, Redirect} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import LogIn from "../../pages/login/LogIn";


function AdminRoute({children}) {
    const {user} = useContext(AuthContext);

    return (
        {user} === true  ? children
            :


            <p>Om deze content te mogen zien moet u zijn ingelogd<br/>
                u wordt doorgestuurd..</p>


            &&


            <Redirect to={{pathname: '/login'}}/>
    );
}

export default AdminRoute;