const person = Object.create(
    {
        calculateAge() {
            console.log('Age', new Date().getFullYear() - this.birdthYear)
        }
    },
    {
    name: {
        value: 'David',
        enumerable: true, //
        writable: true, // 
        configurable: true //
    },
    birdthYear: {
        value: 1993,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birdthYear
        },
        set(value) {
            window.document.body.style.backgroundColor = 'red'
            console.log('set age', value)
        }
    }
})
person.birthday = 2000
for(let key in person) {
    if(person.hasOwnProperty(key)) {
        console.log(key, person[key])
    }
}
console.log(person)