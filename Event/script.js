const body = document.body
body.onclick = function(event) {
    console.log(`X:`,event.clientX)
    console.log(`Y:`, event.clientY)
}
const btn = document.getElementById('btn')
const p = document.getElementById('Paragraph')
