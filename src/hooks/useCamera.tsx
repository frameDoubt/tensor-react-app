import { useRef, useEffect } from "react";

export function useCamera() {
    // const [useStream, setStream] = useState({});
    const videoStreamRef = useRef({});

    useEffect(()  => {
        const constraints = {
            video: {
                width: 320, height: 0,
                facingMode: "front" ? "environment" : "user",
            }, audio: false,
        };
        navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                console.log(stream);
                // setStream(curStrm => curStrm = stream);
                // streamTrack = useStream.getVideoTracks()[0];
                videoStreamRef.current = stream;
                
            })
            .catch((err) => {
                console.log("error with video media stream: ",err);
            });
            // console.log(streamTrack);
        return
            // setStream(curStrm => curStrm.removeTrack(streamTrack)
    },[]);

    return videoStreamRef;
}

export default useCamera;