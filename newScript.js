function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}
const ru = urlGenerator('ru')
const com = urlGenerator('com')

function argument(...args) {
    for(let arg of args) {
        console.log(arg)
    }
}
const btn = document.getElementById('btn')
const pi = document.getElementById('pi')
a = 1

const srv = {
    server: 'Apache',
    port: 2000,
    protocol: 'HTTPS',
    browser: 'Tor',
    name: {
        firstName: 'Illya',
        secondName: 'Shevchenko',
        age: 35,
        hasWife: null,
        isProgrammer: true,
        languages: ['Russian','English','Ukraine'],
        son: {
            name: 'David',
            age: 9,
            nationality: 'Russian'
        },
        dauther: {
            name:'Elena',
            age: 18,
            nationality: 'Ukraine'
        }
    }
}
