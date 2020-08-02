// const person = {
//     name: 'David',
//     age: '25',
//     showMessage: function() {
//         console.log('Hello, world!')
//     }
// }

const person = new Object({
    name: 'David',
    age: '25',
    showMessage: function() {
        console.log('Hello, world!')
    }
})
Object.prototype.sayHello = function() {
    console.log('Hello, world!')
}
Object.prototype.sumNumber = function(a,b) {
    console.log(a + b)
}
const srv = {
    serverName: 'Apache',
    port: 2220,
    browser: 'FireFox',
    href: '192.168.0.1',
}
const newServer = Object.create(srv)
newServer.name = 'phpMyAdmin'
newServer.port = 1111
newServer.browser = 'Chrome'
newServer.href = 'https://google.com'
console.group(`Server name is: ${newServer.name}`)
console.log(newServer)
console.groupEnd()
console.log('_________')
console.group(`Server is a name ${srv.serverName}`)
console.log(srv)
console.groupEnd()
const lena = Object.create(person)
lena.name = 'Elena'

const str = new String('I am string')
const num =  new Number(42)
const array = new Array(3,1,2)
console.log(str)
console.log(num)
console.log(array)