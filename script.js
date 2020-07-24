const info = document.getElementById('info')
setTimeout(() => {
    document.body.style.background = 'red'
},2000)
setTimeout(() => {
    document.body.style.background = 'black'
},4000)
setTimeout(() => {
    document.body.style.background = 'white'
},6000)
const srv = {
    server: 'Apache',
    browser: 'Tor',
    dataBase: 'MySql',
    programingLanguage: ['HTML5','CSS3','JavaScript','PHP'],
    port: 2000,
    status: 'connect'
}
info.onclick = function() {
    console.log(srv)
}
