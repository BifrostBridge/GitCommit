// function createCalcFunction(n) {
//     return function() {
//         console.log(1000 * n)
//     }
// }
// const calc = createCalcFunction(42)
// calc()
// function createIncrementor(n) {
//     return (num) => { //arrow function  
//         return n + num
//     }
// }
// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)
// console.log(addTen(10))
// console.log(addOne(10))
// console.log(addOne(12))
// console.log(addOne(13))
// console.log(addOne(14))
function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const ru  = urlGenerator('ru')
const org = urlGenerator('org')
const com = urlGenerator('com')
console.log(ru('google'))
console.log(ru('yandex'))
console.log(ru('yahoo'))
console.log(ru('gmail'))
console.log(org('tor'))
function logPerson() {
    console.log(`Person ${this.name} ${this.age} ${this.job}`)
}
const person1 = {name: 'David', age: 23, job: 'FrontEnd'}
const person2 = {name: 'Ignat', age: 24, job: 'Desing'}

function bind(contex,fn) {
    return function(...args) {
        fn.apply(contex,args)
    }
}
bind(person1,logPerson)
bind(person2,logPerson)