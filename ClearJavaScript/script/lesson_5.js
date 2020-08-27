console.log('Requests data...')

const p = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('Preparign Data')   
        const backendData = {
            server: 'AWS',
            port: 2000,
            status: "working"
        }
        resolve(backendData)
    },2000)
})
p.then(data => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            data.modify = true
            reject(data)
        },2000)
    })
    .catch(err => console.log('Error',err))
}).then(clientData => {
    clientData.fromPromise = true
    return clientData
}).then(data => {
    console.log('modify data', data)
})

const sleep = (ms) => { 
    return new Promise(resolve => {
        setTimeout(() => resolve(),ms)
    })
}
sleep(2000).then(() => {
    console.log('After 2 seconds!')
})
sleep(3000).then(()=> {
    console.log('After 3 seconds!')
})
Promise.all([sleep(2000),sleep(5000)])
.then(() => {
    console.log('All promises')
})
Promise.race([sleep(2000),sleep(5000)])
.then(() => {
    console.log('Race promises')
})
