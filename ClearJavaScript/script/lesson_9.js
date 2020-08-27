//Object
const person = {
    name: "David",
    age: 25,
    job: "Fullstack"
}
const op = new Proxy(person,{
    get(target,prop) {
        console.log(`getting prop ${prop}`)
        // console.log('Target' , target)
        // console.log('Prop', prop)
        return target[prop]
    },
    set(target,prop,value) {
        if(prop in target) {
            target[prop] = value
        }
        else {
            throw new Error(`No ${prop} field in target`)
        }
    },
    has(target,prop) {
        return ['age','name','job'].includes(prop)
    }
})
