import './account-button.css'
import {useHistory} from "react-router-dom";
import { ReactComponent as SvgAccount} from '../../../assets/svg-account/svg-account-smallV2.svg';

function AccountButton() {


    const history = useHistory();

    function redirect() {
        history.push('/persoonsgegevens')
    }


    return(

        <div className="account-button"
                type="button"
                onClick={redirect} >

            <SvgAccount/>

        </div>

    )

}

export default AccountButton;