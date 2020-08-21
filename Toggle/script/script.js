const btn = document.getElementById('btn')
const toggle = document.getElementById('toggle')
const innerDiv = document.getElementById('innerDiv')
const uls = document.getElementById('uls')
toggle.style.display = 'none'
function showAndHide($selector) {
    if($selector.style.display === 'none') {
        $selector.style.display = 'block'
    }
    else {
        $selector.style.display = 'none'
    }
}
innerDiv.addEventListener('click', () => {
    showAndHide(uls)
})
btn.addEventListener('click',() => {
    showAndHide(toggle)
})