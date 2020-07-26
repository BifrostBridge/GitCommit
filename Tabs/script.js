function openCity(evt,cityName) {
    let tabcontent = document.querySelectorAll('.tabcontent')
    let tablinks = document.querySelectorAll(".tablinks");
    for(let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'
    }
    for(let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    }
    document.getElementById(cityName).style.display = "block"
    evt.currentTarget.className += " active";
}