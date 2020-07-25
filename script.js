// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }
// console.log(an)
// class Animal {
//     static type = 'Animal' // Ключевое доступное только в классе Animal
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//     voice() {
//         console.log('I am Animal')
//     }

// }
// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }) 
// class Cat extends Animal {
//     static type = 'CAT'
//     constructor (options) {
//         super(options)
//         this.color = options.color
//     }
//     voice() {
//         super.voice() //Вызивает метод родительского класса
//         console.log('Im am cat')
//     }
//     get ageInfo() {
//         return this.age * 7
//     }
//     set ageInfo(newAge) {
//         this.age = newAge
//     }
// }
// const cat =  new Cat({
//     name:'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'Black'
// })
// console.log(cat.ageInfo)

class Componetnt {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    hide() {
        this.$el.style.display = 'none'
    }
    show() {
        this.$el.style.display = 'block'
    }
}
class Box extends Componetnt {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.color = options.color
    }
}
const box = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})
