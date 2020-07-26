const body = document.body
body.onclick = function(event) {
    console.log(`X:`,event.clientX)
    console.log(`Y:`, event.clientY)
}
const btn = document.getElementById('btn')
const p = document.getElementById('Paragraph')
btn.onclick = function() {
    p.style.background = 'red'
    p.style.color = 'blue'
    p.style.fontSize = '30px'
    p.style.transition = 'all 1s linear'
    p.style.textAlign = 'center'
    p.style.scale = '3'
}
