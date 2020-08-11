const header = document.querySelector('header')
const section = document.querySelector('section')
var requestsUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
var request = new XMLHttpRequest()
request.open('GET',requestsUrl)
request.responseType = 'json'
request.send()
request.onload = function () {
    var superHeroes = request.response;
    popularHeader(superHeroes)
    showHeroes(superHeroes)
}

function popularHeader(jsonObj) {
    var h1 = document.createElement('h1')
    h1.textContent = jsonObj['squadName']
    header.appendChild(h1)

    var myPara = document.createElement('p')
    myPara.textContent = 'Hometown' + jsonObj['homeTown'] + '// Formed ' + jsonObj['formed']
    header.appendChild(myPara)
}
function showHeroes(jsonObj) {
    var heroes = jsonObj['members']

    for(let i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';
        var superPowers = heroes[i].powers;

        for (var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem); 
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
    }
}