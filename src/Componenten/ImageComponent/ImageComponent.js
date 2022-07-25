function ImageComponent({fileName, url, key}) {





    return (

        <>

            <div>

                <div>

                    <img
                    alt={fileName}
                    src={url}
                    key={key}
                    />


                </div>


            </div>


        </>


    )


}

export default ImageComponent;