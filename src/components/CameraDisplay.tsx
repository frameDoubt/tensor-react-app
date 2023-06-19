import React, { useEffect, useState } from "react";

function CameraDisplay() {
    
    let [connectedUserMedia, setConnectedUserMedia] = useState("");
    
    useEffect(() => {
        const getConnectedUserMedia = navigator.mediaDevices.enumerateDevices();
        getConnectedUserMedia.then((response) => { 
            console.log(response["1"]["label"]);
            setConnectedUserMedia(currentUM => currentUM = response["1"]["label"]);
        });
    }
        ,[]);
    return (
        <div>
            <p>This is where I'm going to return my MediaDevices list:</p>
            {`<p>${connectedUserMedia}<p/>`}
        </div>
    );
}

export default CameraDisplay;