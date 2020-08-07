function delay(ms) {
    return ms
}
const browserName = 'Firefox'
for(let i = 0; i < browserName.length; i++) {
    console.log(browserName[i])
    document.write(browserName[i])
}
var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var myArr = myData.split(',')
var dogsName = ["Rocket","Flash","Bella","Slugger"]
const parsetoString = dogsName.toString()
console.log(parsetoString)
try {
    console.log(myArr.join('') )
}
catch(e) {
    console.log(`That is a ${e}`)
}
console.log(myArr)
