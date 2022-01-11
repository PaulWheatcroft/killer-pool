console.log("View")

function showPlayers() {
    const gameArray = JSON.parse(localStorage.getItem("playersArray"));
    console.log(gameArray);
    containerHTML = document.getElementById('player-list');
    for (const player in gameArray) {
        console.log(gameArray[player].name);
        playerHTML = `
        <div id="id-${gameArray[player]}" class="col-12">
                <div class="row">
                    <p class="col-12 playernamelabel">${gameArray[player].name}</p>
                </div>
                <div class="row justify-content-center" id="player0">
                    <div class="col-2 player-life"></div>
                    <div class="col-2 player-life"></div>
                    <div class="col-2 player-life"></div>
                    <div class="col-2 player-life"></div>
                    <div class="col-2 player-life"></div>
                    <div class="col-2 player-life life-add-remove"><i class="fas fa-trash-alt"></i></div>
                </div>
            </div>
        `
        containerHTML.innerHTML += playerHTML
    }
}

function clearLocalStorage () {
    localStorage.clear();
}