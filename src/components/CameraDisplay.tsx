import React, { useEffect, useRef, useState } from "react";
import { useCamera } from "../hooks/useCamera";

const CAPTURE_OPTIONS = {
    video: {
        width: 120, height: 240,
        facingMode: "front" ? "environment" : "user",
    }, audio: false,
};

function CameraDisplay() {
    // const [playing, setPlaying] = useState(false);
    // const [stream, setStream]: any = useState(null);
    
    const videoRef: any = useRef();
    const mediaStream = useCamera(CAPTURE_OPTIONS);
    if (mediaStream && videoRef.current && !videoRef.current.srcObject) {
        videoRef.current.srcObject = mediaStream;
      }
    
      function handleCanPlay() {
        videoRef.current.play();
      }
    return (
        (videoRef ? <video ref={videoRef} onCanPlay={handleCanPlay} autoPlay playsInline muted></video> : <p>Oops something went wrong.</p>)
    );
}

export default CameraDisplay;