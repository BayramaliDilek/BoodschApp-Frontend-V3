import {useContext} from "react";
import {AuthContext} from "../../../context/AuthContext";
import './log-out-button.css'

function LogOutButton() {

    const {logout} = useContext(AuthContext);

    return(

        <button className="logout-button"
                type="button"
                onClick={logout} >

            Uitloggen

        </button>

    )

}

export default LogOutButton;