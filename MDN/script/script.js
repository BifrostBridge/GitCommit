const h2 = document.querySelector('.title')
function myFunction() {
    let btn = document.createElement('button')
    btn.innerHTML = 'Click Me'
    document.body.appendChild(btn)
}
const button = document.querySelector('button')
button.addEventListener('click', myFunction)
function perCentCalculate(x,y) {
    if(y < 1) {
        console.log(x * y)
    }
    else if(isNaN(y)) {
        console.log('Not number')
    }
    else {
        console.log('Error')
    }
}
perCentCalculate(100,'213')

function showMessage() {
    console.log('Hello, world!')
}
function HowManyIterationNeedToYou(start,end) {
    for(let i = start; i <= end; i++) {
        console.log(i,'Hello, world!')
    }
}
HowManyIterationNeedToYou(10,20)
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'Male',
    interess: ['music', 'skiing'],
    bio: function() {
        console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old.He likes ' + this.interess[0] + ' and ' + this.interess[1] + '.')
    },
    greetings: function () {
        console.log(`Hi! I'm ${this.name[0]}.` )
    },
    works: {
        webDev: {
            f: 'frontEnd',
            b: 'BackEnd'
        },
    }
}
const computer = {
    processor: 'intel-7788',
    GPU: 'Nvideo 1080TI',
}
for(let key in person.works) {
    console.log(key)
}
function mathRandome() {
    return Math.floor(Math.random() * 255)
}
function randomeColoder() {
    let color = `rgb(${mathRandome()},${mathRandome()},${mathRandome()};)`
    document.body.style.backgroundColor = color
}
const changeColor = document.getElementById('knopka')
changeColor.addEventListener('click', randomeColoder)
button.addEventListener('click',randomeColoder)
var person1 = {
    name: 'Cris',
    greetings: function () {
        console.log(`Hello my name is a ${this.name}`)
    }
}
const groun =  {
    name: 'John',
    secondName: 'Ripper',
    prof: 'Programer',
    showMessage: function(job,phone) {
        console.group(`Info about ${this.name}`)
        console.log(`Name is a ${this.name}`)
        console.log(`SecondName is a ${this.secondName}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.log(`Prof is a, ${this.prof}`)
        console.groupEnd()
    },
}


//* */
function Person(first,last,age,gender,interest) {
    this.name = {
        first: first,
        last: last
    }
    this.age = age
    this.gender = gender
    this.interest = interest
    this.bio = function() {
        if(this.age < 0) {
            console.log('Age must be a possitive')
        }
        else {
            console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interess[0] + ' and ' + this.interest[1] + '.') 
        }
    }
    this.showMessage = function() {
        console.log('Hi my name is a' + this.name.first)
    }
}
var person1 = new Person('David','Shevchenko','0','Male',['Footbool','BasketBoll'])
var person2 = new Person('Larisa','Ovsienko','47','Female',['Doctor','ReadBook'])

console.log(Math.sin())
function showMessage(name,age) {
    if(name === 'Ignat') {
        console.log(name)
        if(age > 18) {
            console.log(age)
            console.log('Console.log()')
        }
        else {
            console.log('Malo age')
        }
    }
    else {
        console.log('Names is errors')
    }
}
showMessage('Ignat',30)

const select = document.querySelector('select')
function switchColorSelect() {
    if(select.value === 'Blue') {
        document.body.style.backgroundColor = 'blue'
    }
}
select.addEventListener('change', switchColorSelect)