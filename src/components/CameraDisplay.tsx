import React, { useEffect, useRef } from "react";
// import useCamera from "../hooks/useCamera";

function CameraDisplay() {
    const userMediaRef = useRef('');

    const strClnr = (str: string): string => str.split(' ').slice(0, -1).join(" ");
    
    // useCamera;
    useEffect(() => {
        const getConnectedUserMedia = navigator.mediaDevices.enumerateDevices();
        getConnectedUserMedia.then((response) => { 
            userMediaRef.current = strClnr(response["1"]["label"]);
        });
    }
        ,[]);
    return (
        <div>
            <canvas><video></video></canvas>
            <p>This is where I'm going to return my MediaDevices list:</p>
            <p>{userMediaRef.current}</p>
        </div>
    );
}

export default CameraDisplay;