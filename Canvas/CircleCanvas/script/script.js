const canvas = document.getElementById('canvas')
const btn = document.getElementById('btn')
const context = canvas.getContext('2d')
const width = document.documentElement.clientWidth
const height = document.documentElement.clientHeight

canvas.width = width
canvas.height = height
function draw() {
    context.clearRect(0,0,width,height)
    for(let i = 0; i < 100; i++) {
        context.beginPath()
        context.fillStyle = 'rgba(225,123,32,0.5)'
        context.arc(randome(width),randome(height), randome(50),0,Math.PI * 2)
        context.fill()
    }
}
btn.addEventListener('click',draw)
function randome(number) {
    return Math.floor(Math.random()*number)
}
