const canvas = document.createElement('canvas')
canvas.width = 700
canvas.height = 400
document.body.appendChild(canvas)
const ctx = canvas.getContext('2d')
let alertBtn = document.querySelector('.alert')
let fillBtn = document.querySelector('.fill')
function degToRad(degress) {
    return degress * Math.PI / 180
}
function random(min,max) {
    let num = Math.floor(Math.random()* (max - min) ) + min
    return num
}
function expensiveOperator() {
    for(let i = 0; i < 100; i++) {
        ctx.fillStyle = 'rgba(0,0,225,0.2)'
        ctx.beginPath()
        ctx.arc(random(0,canvas.width),random(0,canvas.height),10,degToRad(0),degToRad(360),false)
        ctx.fill()
    }
}
fillBtn.addEventListener('click',expensiveOperator)
alertBtn.addEventListener('click', () => {
    alert('You clicked me')
})

const btn = document.getElementById('btn')
btn.addEventListener('click',() => {
    alert('Hello, it`s a asyncAwait')
    window.alert('Hello, after 2 second')
    const p = document.createElement('p')
    p.textContent = 'after btnClickde'
    document.body.appendChild(p)
})
fetch('product.json').then(function(response) {
    return response.json()
}).then(function() {
    product = json
    initialize();
}).catch(function(err) {
    console.log('Error onload', + err.message)
})
function facotrial(n) {
    let result = 1
    for(let i = 1; i <= n; i++) {
        result = result * i
    }
    return result
}
function Person(name,age,prof) {
    this.name = name;
    this.age = age;
    this.prof = prof

    this.greet = function(job,numbers) {
        console.group(`Info about ${this.name}`)
        console.log(`Name is a ${this.name}`)
        console.log(`Age is a ${this.age}`)
        console.log(`Prof is a ${this.prof}`)
        console.log(`Job is a ${job}`)
        console.log(`Number is a ${numbers}`)
        console.groupEnd()
    }
}
