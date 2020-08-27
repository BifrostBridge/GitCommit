const url = 'https://jsonplaceholder.typicode.com/todos'
const delay = ms => {
    return new Promise(r => setTimeout(() => r(),ms))

}
// function feachTodos() {
//     console.log("Feath todo started")
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }

// feachTodos().then(data => {
//     console.log("Data", data)
// }).catch(e => {
//     console.error(e)
// }) 
async function featchAsyncTodos() {
    try { 
    console.log("Featch todos data....")
    await delay(2000)
    const response = await fetch(url)
    const data = await response.json()
    console.log("Data: ", data)
    }
    catch(err) {
        console.error(err)
    }
    finally {
        console.log("End program")
    }
}
featchAsyncTodos()
