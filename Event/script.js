const btn_1 = document.getElementById('btn_1')
const box1 = document.getElementById('box1')

btn_1.onclick = function() {
    box1.style.background = 'red'
    box1.style.transition = 'all .5s linear'
    box1.style.lineHeight = '5.5'
}
console.log(1)