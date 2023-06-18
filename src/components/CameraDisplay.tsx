import React, { useEffect } from "react";

function CameraDisplay() {
    
    // let [connectedUM, setConnectedUM] = useState();
    
    useEffect(() => {
        const getConnectedUserMedia = navigator.mediaDevices.enumerateDevices();
        getConnectedUserMedia.then((response) => {
            console.log(response[0].kind, response[1].kind);
            
        })
        // console.log(getConnectedUserMedia);
    }
        ,[]);
    return (
        <div>
            <p>This is where I'm going to return my MediaDevices list:</p>
            {/* {`<p>${response}<p/>`} */}
        </div>
    );
}

export default CameraDisplay;