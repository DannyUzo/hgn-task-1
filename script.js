function UTCinMiliseconds() {
    const currentTime = new Date().getTime();
    const utcTimeElement = document.getElementById("UTCtime");
    utcTimeElement.innerHTML = currentTime;
} 

setInterval(UTCinMiliseconds, 100)