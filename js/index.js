const url = 'http://localhost:3000/monsters'


function getMonsters(){
    fetch(url)
    .then(response => response.json())
    .then(results => {
        results.slice(50)
        .forEach(createListing)
    })
}


createListing = (monsterObj) => {
    const monsterListContainer = document.querySelector("#monster-container")
    const monsterDiv = document.createElement("div")

    const monsterName = document.createElement("h2")
    monsterName.textContent = monsterObj.name
    
    const monsterAge = document.createElement("h4")
    monsterAge.textContent = monsterObj.age
    
    const monsterBio = document.createElement("p")
    monsterBio.textContent = monsterObj.description

    monsterDiv.append(monsterName, monsterAge, monsterBio)
    monsterListContainer.append(monsterDiv)
}











getMonsters()