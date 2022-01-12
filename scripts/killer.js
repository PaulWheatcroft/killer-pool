console.log("script is running");

let players = [];
let localPlayersArray = (JSON.parse(localStorage.getItem("playersArray")));

console.log(localPlayersArray)

function addPlayer() {
    console.log(`**** ${players}`);
    if (localPlayersArray > players) {
        players = localPlayersArray
    }        
    let playerName = document.getElementById('id_playername').value;
    if (playerName.length < 1) {
        return
    }        
    players.push({
        "name": playerName,
        "score": 5
    });
    document.getElementById('id_playername').value = "";
    console.log(players);
    return players;
}

// Taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function randomizeOrder(players) {
    let currentIndex = players.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [players[currentIndex], players[randomIndex]] = [
            players[randomIndex], players[currentIndex]
        ];
    }
    localStorage.setItem("playersArray", JSON.stringify(players));
}