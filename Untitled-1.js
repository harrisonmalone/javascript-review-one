const fetch = require('node-fetch')

const res2 = fetch("https://swapi.co/api/films/1/")


res2.then(

    resp => resp.json()
).then(data => data.characters).then(charactersArr => charactersArr.forEach(element =>

    fetch(element).then(elemresp => elemresp.json).then()

) )