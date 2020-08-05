const text = document.getElementById('text')
const  ul = document.querySelector('ul')
const result = document.getElementById('result')
text.addEventListener('click', toggle)
function toggle() {
    if(ul.style.display === 'none') {
        ul.style.display = 'block'
    }
    else {
        ul.style.display = 'none'
    }
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