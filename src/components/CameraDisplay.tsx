import React, { useEffect, useState } from "react";

function CameraDisplay() {
    
    let [connectedUM, setConnectedUM] = useState();

    useEffect(() => {
        const getConnectedUserMedia = async () => {
            const response = await navigator.mediaDevices;
            console.log(response);
        }
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