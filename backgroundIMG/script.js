const container__item = document.querySelector('.container__item')
container__item.onclick = function() {
    console.log('this is a container')
    this.style.background = 'cyan'
}