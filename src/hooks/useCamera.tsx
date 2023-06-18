import { useEffect } from "react";

export function useCamera() {
    useEffect(() => {
        const openMediaDevice = async (constraints: {}) => {
            return await navigator.mediaDevices.getUserMedia(constraints)
        }
        try {
        const stream = openMediaDevice({
                'video': true, 
                'audio': false
            });
            console.log('Got MediaStream', stream);
        } catch(error) {
            console.error('Error accessing media devices.', error);
        }
        return () => {

        };
    },[]);
}

export default useCamera;