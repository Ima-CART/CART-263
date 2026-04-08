
window.onload = getLiveVideo;


/**
 * Async and await need to go hand in hand together. Without one it would not work.
 * Javascript usually runs without waiting for anything. But for this media stream,
 * the code is telling the function to wait for something to happen.
 */
async function getLiveVideo() {
    console.log("loaded");
    let video = document.getElementById("video");
    console.log(video.srcObject);
    /**
     * We use the try catch clause in order to catch the error method
     */
    try {
        let stream = await navigator.mediaDevices.getUserMedia({
            video: {
                /**Inside the code you can change the dimension of the video */
                // width: 320,
                // height: 240,
            },
        }); //the yellow curly brackets is an object and the only thing in there is the video()
        video.srcObject = stream;
        console.log(video.srcObject) //here there is something
        /**If there is an error it goes inside the catch error method
         * It's called catch because it throws an error in the function.
         */
    } catch (err) {
        /* handle the error */
        console.log("had an error getting the camera");
    }
}
