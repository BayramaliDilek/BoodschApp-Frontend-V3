import {ReactComponent as SvgPencil} from '../../../assets/svg-account/pencil.svg';
import './edit-button.css'
import {useHistory} from "react-router-dom";


function EditButton() {

    const history = useHistory()


    function redirect() {
        history.push(`/users/:user_id`)
    }

    return (



        <button className="edit-button"
        onClick={redirect}>
            <div className="pencil">

                <SvgPencil/>
            </div>



        </button>

    )

}

export default EditButton;