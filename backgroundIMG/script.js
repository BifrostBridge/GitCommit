const btn = document.getElementById('button')
function changeBackGround() {
    return document.body.style.background = 'red'
}
btn.onclick = function() {
    changeBackGround()
} 