let x = Math.floor(Math.random() * 4) + 1
const input = document.getElementById('input')
let enter = +prompt('Enter number')
if(x === enter) {
    console.log('its right number is a', x)
    input.innerHTML += "number is a", x

}
else {
    console.log('no number is a ', x)
}