const addTime = document.getElementById('time')
function displayDate() {
    let date = new Date()
    let time = date.toLocaleString()
    addTime.innerHTML = time
}
setInterval(displayDate,1000)