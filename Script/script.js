const select = document.querySelector('select')
select.addEventListener('change',changeColor)

function changeColor() {
    let change = select.value
    if(change === 'Blue') {
        document.body.style.background = 'Blue'
    }
    else if(change === 'Green') {
        document.body.style.background = 'Green'
    }
    else {
        document.body.style.background = ''
    }
}