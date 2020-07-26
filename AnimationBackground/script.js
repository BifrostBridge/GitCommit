const body = document.body
body.onclick = function(event) {
    console.log(`X:`,event.clientX)
    console.log(`Y:`, event.clientY)
}