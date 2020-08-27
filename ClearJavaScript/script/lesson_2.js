function showMessage() {
    console.log('Hello', this)
}
function sum() {
    console.log('Summa of the nubmers')
}
const person = {
    name: 'David',
    age: 26,
    sayHello: showMessage,
    sayHelloWindow: showMessage.bind(this),
    logInfo: function(job,phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is a ${phone}`)
        console.groupEnd()
    }
}

const lena  = {
    name: 'Elena',
    age: 23,   
}
person.logInfo.bind(lena,'FrontEnd', '8-999-123-12-23')() // <--- Передает первый аргумент контекст объекта Лена последующие параметры.Нужно вызивать ее
person.logInfo.call(lena,'Frondend','8-999-221-32-13') // <--- Сразу вызывает по-сравнению байнд
person.logInfo.apply(lena,['Frondend','8-999-221-32-13']) // <--- Передача параметров в массиве 

//=========================================

const arr = [1, 2, 3, 4, 5]
// function myltBy(arr,n) {
//     return arr.map(function(i) {
//         return n * i
//     })
// }
Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}
function infoAboutPerson(name,secondName,age,skills,height,width) {
    this.name = name
    this.secondName = secondName
    this.age = age
    this.skills = skills
    this.height = height
    this.width = width
    
    this.showInfo = function() {
        console.group(`Info about ${this.name}`)
        console.log(`Name is a ${this.name}`)
        console.log(`Second name is ${this.secondName}`)
        console.log(`Age is a ${this.age}`)
        console.log(`Skills is a ${this.skill}`)
        console.log(`Height is a ${this.height}`)
        console.log(`Width is a ${this.width}`)
        console.groupEnd()
    }
}   
console.log(arr.multBy(10))