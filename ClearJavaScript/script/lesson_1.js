const person = {
    name: 'David',
    age: '25',
    showMessage: function() {
       console.log('Hello, world!')
    }
}

const person1 = new Object({
    name: 'David',
    age: '25',
    showMessage: function() {
        console.log('Hello, world!')
    }
})
Object.prototype.sayHello = function() {
    console.log('Hello, world!')
}
const srv = {
    serverName: 'Apache',
    port: 2220,
    browser: 'FireFox',
    href: '192.168.0.1',
}
function showName(name,secondName) {
    return '* ' + name + ' : ' + secondName + ' *'
}
const newServer = Object.create(srv)
newServer.name = 'phpMyAdmin'
newServer.port = 1111
newServer.browser = 'Chrome'
newServer.href = 'https://google.com'
const lena = Object.create(person)
lena.name = 'Elena'
console.log(lena)
const str = new String('I am string')
const num =  new Number(42)
const array = new Array(3,1,2)
console.log(str)
console.log(num)
console.log(array)
