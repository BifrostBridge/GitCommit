const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight
canvas.style.display = 'block'
canvas.onclick = function(event) {
    console.log(`X:`,event.clientX)
    console.log(`Y:`,event.clientY)
}
console.log(1)
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
// for(let i = 0; i < 100; i++) {
//     let x = Math.random() * width
//     let y = Math.random() * height
//     ctx.beginPath()
//     ctx.lineWidth = 1
//     ctx.arc(x,y,50,0,Math.PI * 2,true)
//     ctx.stroke()
// }

const mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener('mousemove',
    function(event){
        mouse.x = event.x
        mouse.y = event.y
        console.log(mouse)
})
console.log(canvas)
console.log('Canvas')
function Circle(x,y,dx,dy,radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius    
    this.draw = function() {
        ctx.beginPath()
        ctx.lineWidth = 2
        ctx.strokeStyle = 'blue'
        ctx.fillStyle = 'black'
        ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2,true)
        ctx.stroke()
        ctx.fill()
    }
    this.update = function() {
        if(this.x + this.radius > width || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if(this.y + this.radius > height || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy
        

            if(mouse.x - this.x < 50 && mouse.x - this.x > -50) {
                this.radius += 1
        }


        this.draw()

        //interactivyty
    }
}
var circleArray = []
for(let i = 0; i < 50; i++) {
    var x = Math.random() * (width - radius * 2) + radius
    var y = Math.random() * (height - radius * 2) + radius
    var dx = (Math.random() - 0.5) * 10
    var dy = (Math.random() - 0.5) * 10
    var radius = 50
    circleArray.push(new Circle(x,y,dx,dy,radius))
}
console.log(circleArray)
function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,width,height)
    for(let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
}
animate()
