const btn = document.querySelector('button')
const div = document.querySelector('div')
let a = 0
function showMessage() {
    a++
    div.innerHTML += `${a})Hello, world!<br>`
}
btn.addEventListener('click',showMessage)
