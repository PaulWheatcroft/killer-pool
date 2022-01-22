console.log("View")

function showPlayers() {
    const gameArray = JSON.parse(localStorage.getItem("playersArray"));
    console.log(gameArray);
    let containerHTML = document.getElementById('player-list');
    for (player in gameArray) {
        console.log(player);
        let playerHTML = `
        <div id="id-${player}" class="col-12">
                <div class="row">
                    <p class="col-12 playernamelabel">${gameArray[player].name}</p>
                </div>
                <div class="row justify-content-center" id="lives-${player}">
                    <div class="col-2 player-life"></div>
                    <div class="col-2 player-life"></div>
                    <div class="col-2 player-life"></div>
                    <div class="col-2 player-life"></div>
                    <div class="col-2 player-life"></div>
                    <div class="col-2 player-life life-add-remove" onclick="removeSinglePlayer(${player})"><i class="fas fa-trash-alt"></i></div>
                </div>
            </div>
        `
        containerHTML.innerHTML += playerHTML
    }
}

function startGame() {
    const gameArray = JSON.parse(localStorage.getItem("playersArray"));
    let containerHTML = document.getElementById('player-list');
    containerHTML.innerHTML = ""
    for (player in gameArray) {
        console.log(player);
        let playerHTML = `
        <div id="id-${(player)}" class="col-12">
                <div class="row">
                    <p class="col-12 playernamelabel">${gameArray[player].name}</p>
                </div>
                <div class="row justify-content-center" id="lives-${player}">
                    <div id="life-${(player)}-1" class="col-2 player-life life-1"></div>
                    <div id="life-${(player)}-2" class="col-2 player-life life-2"></div>
                    <div id="life-${(player)}-3" class="col-2 player-life life-3"></div>
                    <div id="life-${(player)}-4" class="col-2 player-life life-4"></div>
                    <div id="life-${(player)}-5" class="col-2 player-life life-5" onclick="removeLife(${(player)}, 5)"></div>
                    <div class="col-2 player-life life-add-remove" onclick="addLife(${player})"><i class="fas fa-plus-circle"></i></div>
                </div>
            </div>
        `
        containerHTML.innerHTML += playerHTML
    }
}

function removeSinglePlayer(id) {
    console.log(id)
    let gameArray = JSON.parse(localStorage.getItem("playersArray"));
    console.log(gameArray)
    gameArray.splice(id, 1);
    localStorage.setItem("playersArray", JSON.stringify(gameArray));
    deleteHTML = document.getElementById(`id-${id}`);
    deleteHTML.remove();
}

function removeLife(playerId, lifeId) {
    console.log(playerId, lifeId)
    nextLifeId = lifeId - 1;
    console.log(nextLifeId)
    let clickedLife = document.getElementById(`life-${playerId}-${lifeId}`);
    let nextLife = document.getElementById(`life-${playerId}-${nextLifeId}`);
    if (lifeId > 1) {
        console.log(clickedLife);
        console.log(nextLife);
        clickedLife.classList.remove(`life-${lifeId}`);
        clickedLife.classList.add("life-down");
        clickedLife.removeAttribute("onclick");
        nextLife.setAttribute("onclick", `removeLife(${(playerId)}, ${nextLifeId})`);
    } else {
        console.log("You're a gonna!");
        let noMoreLivesHTML = document.getElementById(`lives-${playerId}`);
        noMoreLivesHTML.innerHTML = `
                    <div id="life-${(player)}-0" class="col-2 player-life life-done"><i class="fas fa-skull"></i></div>
                    <div id="life-${(player)}-1" class="col-2 player-life life-done"><i class="fas fa-skull"></i></div>
                    <div id="life-${(player)}-2" class="col-2 player-life life-done"><i class="fas fa-skull"></i></div>
                    <div id="life-${(player)}-3" class="col-2 player-life life-done"><i class="fas fa-skull"></i></div>
                    <div id="life-${(player)}-4" class="col-2 player-life life-done"><i class="fas fa-skull"></i></div>
                    <div class="col-2 player-life life-done"><i class="fas fa-skull"></i></div>
                    `
    } 
}

function clearLocalStorage() {
    localStorage.clear();
}