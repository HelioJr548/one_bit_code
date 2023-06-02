function addPlayer() {
    const playerPosition = document.getElementById('position').value
    const playerName = document.getElementById('name').value
    const playerNumber = document.getElementById('number').value

    const teamList = document.getElementById('team-list');
    const existingPlayer = document.getElementById(`player-${playerNumber}`);

    // Verificar se a lista está vazia
    if (teamList.children.length === 0) {
        const confirmation = confirm(`Deseja adicionar ${playerName} como ${playerPosition}?`);
        if (confirmation) {
            const playerItem = document.createElement('li');
            playerItem.id = `player-${playerNumber}`;
            playerItem.innerText = `${playerPosition}: ${playerName} (${playerNumber})`;
            teamList.appendChild(playerItem);
        }
    }
    // Verificar se o número do jogador já existe na lista
    else if (existingPlayer) {
        const confirmation = confirm(`Um jogador com o mesmo numero de camisa, já existe na lista: ${existingPlayer.innerText}. Deseja substituí-lo?`);
        if (confirmation) {
            // Substituir o jogador existente com os novos valores
            existingPlayer.innerText = `${playerPosition}: ${playerName} (${playerNumber})`;
        }
    } else {
        const confirmation = confirm(`Escalar ${playerName} como ${playerPosition}?`);
        if (confirmation) {
            const playerItem = document.createElement('li');
            playerItem.id = `player-${playerNumber}`;
            playerItem.innerText = `${playerPosition}: ${playerName} (${playerNumber})`;
            teamList.appendChild(playerItem);
        }
    }

    document.getElementById('position').value = ""
    document.getElementById('name').value = ""
    document.getElementById('number').value = ""
}

function removePlayer() {
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById(`player-${number}`)

    const confirmation = confirm(`Tem certeza que deseja remover:(${playerToRemove.innerText})`)

    if (confirmation) {
        // document.getElementById("team-list").removeChild(playerToRemove)
        playerToRemove.remove()
        document.getElementById('numberToRemove').value = ""
    }
}