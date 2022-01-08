console.log("script is running")

const players = [];

function addPlayer() {
    playerName = document.getElementById('id_playername').value;
    players.push({
        "name": playerName,
        "score": 5
    })
    document.getElementById('id_playername').value = ""
    window.alert(`Player ${playerName} added to the game`);
    console.log(players)
    return players
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
    console.log(players)
    return players;
}