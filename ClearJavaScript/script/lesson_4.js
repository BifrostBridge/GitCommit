const code = document.querySelector('code')
const h2 = document.querySelector('h2')
const server = {
    name: 'Apache2',
    port: 2000,
    domain: 'ru',
    programingLanguage: ['html','css','js','php']
}
setTimeout(() => {
    console.log('Preparing data...')
    setTimeout(() => {
        console.log('Wait a few second')
        setTimeout(() => {
            if(server.name === 'Apache2') {
                console.log('Accses complited')
                const json = JSON.stringify(server,null,4)
                console.log(json)
            }
            else {
                console.log('Uncorrcet server names!')
            }   
        },2000)
    },2000)
},3000)
function delay(ms) {
    return ms
}
function showMessage(name,age) {
    return `Name is a ${name} age is a ${age}`
}
function greetings() {
    console.log('Greet frined!')
}
setTimeout(greetings,delay(1000))
setTimeout(() => {
    console.log(showMessage('David',23))
},delay(2000))
let count = 0;
setInterval(() => {
    count++
    console.log(`This is a number ${count}`)
},delay(1000))