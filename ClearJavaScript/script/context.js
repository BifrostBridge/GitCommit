function showMessage() {
    console.log('Hello', this)
}
const person = {
    name: 'David',
    age: 26,
    sayHello: showMessage,
    sayHelloWindow: showMessage.bind(window)
}