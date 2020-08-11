const btn = document.getElementById('btn')
const hide = document.getElementById('hide')
hide.style.display = 'none'
function toggle(selector) {
    if(selector.style.display === 'none') {
        selector.style.display = 'inline-block'
    }
    else {
        selector.style.display = 'none'
    }
}

btn.addEventListener('click',function() {
    toggle(hide)
})