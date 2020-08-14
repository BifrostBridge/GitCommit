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
Person.prototype.greeting = function() {
    console.log('Hi!', this.name.first)
}


var person1 = new Person('David','Davids',24,'Male',['Footbool','BasketBoll'])
var person2 = new Person('Igant','Davidos',23,'Female',['Doctor','ReadBook'])

console.log(person1)
///////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////
Person.prototype.firewall = function() {
    console.log(this.name + 'has left the building.Bye for now!')
}

//////////////////////////////////////////////////////////////////////////////////////////
Object.prototype.pow2 = function(x){
    return `Квадрат 2 в степени ${x} = ${Math.pow(2,x)}`
}
Object.prototype.z = function(x) {
    return document.body.innerHTML = x
}
Object.prototype.sqrt = function(n) {
    return Math.sqrt(n)
}
