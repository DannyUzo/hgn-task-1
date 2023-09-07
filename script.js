function UTCinMiliseconds() {
    const currentTime = new Date().getTime();
    const utcTimeElement = document.getElementById("UTCtime");
    utcTimeElement.innerHTML = currentTime;
} 
window.onload = UTCinMiliseconds;
setInterval(UTCinMiliseconds, 1000)