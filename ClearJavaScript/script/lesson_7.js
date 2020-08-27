class Animal {
    static type = 'ANIMAL'
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('Im animal')
    }
}

const animal = new Animal({
    name: 'Animal',
    age: 5,
    hasTail: true
})

class Cat extends Animal {
    static type = 'Cat'
    constructor(options) {
        super(options)
        this.color = options.color
    }
    voice() { // methods
        super.voice()
        console.log('Im a cat!')
    }

    get ageInfo() {     
        return this.age * 7
    }
    set ageInfo(newAge) {
        this.age = newAge
    }

}
const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'Black'
})

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        window.alert('Hide')
        return this.$el.style.display = 'none'
    }
    show() {
        window.alert('Show')
        return this.$el.style.display = 'block'
    }
}
class Box extends Component {
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}
const box1 = new Box({ 
    selector: '#box1',
    size: 100,
    color: 'red'
})
const box2 = new Box({
    selector: '#box2',
    size: 140,
    color: 'black'
})
class Circle extends Box {
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
}
const ci = new Circle({
    selector: "#circle",
    size: 100,
    color: 'green'
})


class Man {
    constructor(parameters) {
        this.name = parameters.name
        this.age = parameters.age
        this.height = parameters.height
    }

}
const person = new Man({
    name: 'David',
    age: 30,
    height: '190cm'
})
console.log(person)
class Woman extends Man {
    constructor(parameters) {
        super(parameters)
    }
    get getAge() {
        return this.age * 7
    }
    set getAge(newAge) {
        this.age = newAge
    }
}
const time = document.getElementById('time')
const date = new Date()
setInterval(() => {
    const date = new Date()
    time.innerHTML = date.toLocaleTimeString()
},1000) 
