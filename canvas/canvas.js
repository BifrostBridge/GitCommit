const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight
canvas.style.display = 'block'
canvas.onclick = function(event) {
    console.log(`X:`,event.clientX)
    console.log(`Y:`,event.clientY)
}
// ctx.fillStyle = 'rgba(22,11,120,0.9)'
// ctx.fillRect(100,100,100,100)
// ctx.fillStyle = 'rgba(255,0,0,0.8)'
// ctx.fillRect(400,300,100,100)
// ctx.fillStyle = 'rgba(221,33,12,0.5)'
// ctx.fillRect(400,50,100,100)
// ctx.fillStyle = 'rgba(204, 102, 255,0.9)'
// ctx.fillRect(1114,284,100,100)

// ctx.beginPath()
// ctx.moveTo(100,600)
// ctx.lineTo(600,600)
// ctx.lineTo(310,823)
// ctx.lineTo(100,600)
// ctx.strokeStyle = 'red'
// ctx.lineWidth = 3
// ctx.stroke()
for(let i = 0; i < 3; i++) {
    let x = Math.random() * innerWidth
    let y = Math.random() * innerHeight
    let radius = Math.floor(Math.random()*100) + 1
    ctx.beginPath()
    ctx.lineWidth = 1
    ctx.arc(x,y,radius,0,Math.PI * 2,true)
    ctx.stroke()
}