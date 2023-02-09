function solve(steps, stepLength, speed){

    let distanceInMeters = steps * stepLength;
    let speedInMetersPerSecond = speed / 3.6;
    let rest = Math.floor(distanceInMeters / 500) * 60;
    let time = distanceInMeters / speedInMetersPerSecond + rest;
    let hours = Math.floor(time / 3600);
    let min = Math.floor(time / 60);
    let sec = Math.round(time % 60);
    
    console.log(`${hours < 10 ? "0" : ""}${hours}:${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`);
}
solve(4000, 0.6, 5);