console.log('Requests data...')
// setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = {
//         server: 'AWS',
//         port: 2000,
//         status: 'working'
//     }
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data received', backendData)
//     },2000)
// },2000)
let x = 1;
if(x == 1) {
    x = -x
    console.log(x)
}
const p = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log('Preparing data...')
        const backendData = {
            server: 'AWS',
            port: 2000,
            status: 'working'
         }
         resolve(backendData)   
    },2000)
})
p.then(data => {
    const p2 = new Promise(function(resolve,reject) {
        setTimeout(() => {
            data.modify = true
            resolve(data)
        },2000)
    })
    p2.then(clietData => {
        console.log('Data recived', clietData)
    })
 })