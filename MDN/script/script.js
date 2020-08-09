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

function Person(first,last,age,gender,interest) {
    this.name = {
        first: first,
        last: last
    }
    this.age = age
    this.gender = gender
    this.interest = interest
    this.bio = function() {
        console.log('Age must be a possitive')
        console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interess[0] + ' and ' + this.interest[1] + '.') 
    }
    this.showMessage = function() {
        console.log('Hi my name is a' + this.name.first)
    }
}
var person1 = new Person('David','Shevchenko',0,'Male',['Footbool','BasketBoll'])
var person2 = new Person('Larisa','Ovsienko','47','Female',['Doctor','ReadBook'])
Person.prototype.firewall = function() {
    console.log(this.name + 'has left the building.Bye for now!')
}
Object.prototype.pow2 = function(x){
    return `Квадрат 2 в степени ${x} = ${Math.pow(2,x)}`
}
function showMessage() {
    
}
function InfoAboutMe(name,age,prof) {
    this.name = name
    this.age = age
    this.prof = prof

    this.group = function() {
        console.log('This method about you')
        console.log(this.name,this.age,this.prof)
    }
}