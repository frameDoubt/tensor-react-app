import { useEffect, useState } from "react";

export function useCamera() {
    const [useStream, setStream] = useState();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then((stream) => {
            })
            .catch((err) => {
                console.log("error with video media stream: ",err);
            });
    },[]);
    
    return (
        <div>
            <canvas></canvas>
        </div>
    );
}

export default useCamera;