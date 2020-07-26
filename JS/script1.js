class Box {
    constructor(name) {
        this.name = name
    }
    hello() {
        console.log('Hello, world!', this.name)
    }
}
const box = new Box('David')
box.hello()