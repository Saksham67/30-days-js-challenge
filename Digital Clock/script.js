function Clock(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById("clock").textContent = timeString;
}
setInterval(Clock, 1000); // it'll take one sec to update
Clock();  //so i called the func once 1 sec v delay nhi hone dega after every reload.
