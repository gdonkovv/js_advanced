function timeToWalk(stepsToUni, footprintInMeters, speedInKMPH) {

    let distanceInMeters = stepsToUni * footprintInMeters;
    let rest = Math.floor(distanceInMeters / 500);
    let distanceInKM = distanceInMeters / 1000;

    let timeInMin = (distanceInKM / speedInKMPH)*60 + rest;
    let h = Math.floor(timeInMin / 60);
    let m = Math.floor(timeInMin - 60 * h);
    let s = Math.round(((timeInMin - 60 * h) - m)*60);

    h = (h < 10 ? "0" : "") + h;
    m = (m < 10 ? "0" : "") + m; 
    s = (s < 10 ? "0" : "") + s; 

    console.log(`${h}:${m}:${s}`);
    
}
timeToWalk(2564, 0.70, 5.5);