import React from "react";
import './ImageComponent.css';



function ImageComponent({fileName, url}) {





    return (

        <>

            <div>

                <div className="profile-picture">

                    <img
                    alt={fileName}
                    src={url}
                    />


                </div>


            </div>


        </>


    )


}

export default ImageComponent;