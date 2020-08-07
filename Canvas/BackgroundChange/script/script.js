const btn = document.querySelector('button')
function randome(number) {
    return Math.floor(Math.random()*(number + 1))
}
function changeColor() {
    var color = 'rgb(' + randome(255) + ',' + randome(225) + ',' + randome(225) + ')';
    document.body.style.backgroundColor = color
    return color
}
btn.addEventListener('click', changeColor)