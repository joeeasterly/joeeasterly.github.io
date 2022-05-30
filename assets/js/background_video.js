let videoSource = new Array();
videoSource[0] = '/assets/mp4/drone_20210729_02.mp4';
videoSource[1] = '/assets/mp4/drone_20210729_02.mp4';
videoSource[2] = '/assets/mp4/drone_0286.mp4';
videoSource[3] = '/assets/mp4/drone_0460.mp4';
videoSource[4] = '/assets/mp4/drone_0562.mp4';
videoSource[5] = '/assets/mp4/gracie.mp4';
let i = 0; // global
const videoCount = videoSource.length;
const element = document.getElementById("background-video");
 
function videoPlay(videoNum) {
    element.setAttribute("src", videoSource[videoNum]);
    element.autoplay = true;
    element.load();
}
document.getElementById('background-video').addEventListener('ended', myHandler, false);
 
videoPlay(0); // load the first video
ensureVideoPlays(); // play the video automatically
 
function myHandler() {
    i++;
    if (i == videoCount) {
        i = 0;
        videoPlay(i);
    } else {
        videoPlay(i);
    }
}
 
function ensureVideoPlays() {
    const video = document.getElementById('background-video');
 
    if(!video) return;
    
    const promise = video.play();
    if(promise !== undefined){
        promise.then(() => {
            // Autoplay started
        }).catch(error => {
            // Autoplay was prevented.
            video.muted = true;
            video.play();
        });
    }
}