const text = document.getElementById('text')
const result = document.getElementById('result')
text.oninput = function() {
    result.innerHTML = this.value
}
text.onblur = function () {
    this.style.borderColor = ''
}

// text.onkeypress = function(event) {
//     console.log('This is a onkeypress')
//     console.log(event)
//     console.log(event.key)
//     console.log(event.type)
//     console.log(event.keyCode)
// }
// text.onkeydown = function(event) {
//     console.log('This is a onkeydown')
//     console.log(event)
//     console.log(event.key)
//     console.log(event.type)
//     console.log(event.keyCode)
// }
// text.onkeyup = function(event) {
//     console.log('This is a onkeyup')
//     console.log(event)
//     console.log(event.key)
//     console.log(event.type)
//     console.log(event.keyCode)
// }