import { useEffect, useState } from "react";

export function useCamera(requestedMedia: any) {
  const [mediaStream, setMediaStream]: any = useState(null);

  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(requestedMedia);
        setMediaStream(stream);
      } catch(err) {
        console.error('getUserMedia is not supported in this browser.: ', err);
      }
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach((track: any) => {
          track.stop();
        });
      }
    }
  }, []);

  return mediaStream;
}