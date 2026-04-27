function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = time;
}
setInterval(getTime, 1000);