import React, {useState} from 'react';
import './login-button.css'

function LogInButton() {

    const [validName, setValidName] = useState(false);
    const [validPwd, setValidPwd] = useState(false);

    return(

        <button className="login-button"
                type="submit">

            Inloggen!

        </button>

    )

}

export default LogInButton;