for(let i = 1; i < 17; i++) {
    const myDiv = document.createElement('div')
    document.body.appendChild(myDiv)
}
function randome(number) {
    return Math.floor(Math.random()* number)
}
for(let i = 1; i < 40; i++) {
    const btn = document.createElement('button')
    document.body.appendChild(btn)
    btn.innerHTML = 'Click clack'
}
function changeBackgroundColor() {
    const rndColor = 'rgb(' + randome(225) + ',' + randome(225) + ',' + randome(225) + ')'
    return rndColor
}
function showMessage(number) {
    return Math.floor(Math.random() * (number - 1))
}
const divs = document.querySelectorAll('div')
for(let i = 0; i < divs.length; i++) {
    divs[i].onclick = function(e) {
        e.target.style.backgroundColor = changeBackgroundColor()
    }
}