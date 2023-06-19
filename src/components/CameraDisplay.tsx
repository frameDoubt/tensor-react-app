import React, { useEffect, useState } from "react";

function CameraDisplay() {
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        console.log("Let's get this party started")
      }
    const strClnr = (str: string): string => str.split(' ').slice(0, -1).join(" ");
    
    // try useRef instead
    let [connectedUserMedia, setConnectedUserMedia] = useState("");
    
    useEffect(() => {
        const getConnectedUserMedia = navigator.mediaDevices.enumerateDevices();
        getConnectedUserMedia.then((response) => { 
            let retStr = response["1"]["label"]; 
            setConnectedUserMedia(currentUM => currentUM = strClnr(retStr));
        });
    }
        ,[]);
    return (
        <div>
            <p>This is where I'm going to return my MediaDevices list:</p>
            <p>{connectedUserMedia}</p>
        </div>
    );
}

export default CameraDisplay;