// Renders gameboard

const gameboard = (()=> {
    
    let tiles = [];
    
    const addTilesToArray = () => {
        let tile = 0;
        for(let i = 0; i < 9; i++) {
            tiles.push(tile)
            tile++;
        }
    }

    const renderBoard = () => {
        addTilesToArray();
        
        let board = document.querySelector('.board');

        for(let i = 0; i < tiles.length; i++) {
           
            let newTile = board.appendChild(document.createElement('div'));
            newTile.classList.add(i);
        }
    }
    
    return {
        renderBoard,
        tiles,
    };
})();

// Creates players, select tiles and picks winner
let Players = () => {

    const playerX = "X";
    const playerO = "O";
    let currentTurn = true;
    let counter = 0;
    let pickTile = document.querySelectorAll(".board > div");
    let tileArray = gameboard.tiles;
    
    // Toggles turns
    pickTile.forEach(function (e) {
        e.addEventListener('click', function () {
            
            if (e.textContent !== "") {
                return console.log("Spot taken");
            }

            if(currentTurn == true) {
                
                e.textContent = playerX;
                currentTurn = false;
                tileArray[e.className] = 'x';
                counter++;
                checkWinner(playerX, counter);  
            }
            else if (currentTurn == false) {
               
                e.textContent = playerO;
                currentTurn = true;
                tileArray[e.className] = 'o';
                counter++;
                checkWinner(playerO, counter);
            }
        }, true)
    })

    // Checks for winner
    function checkWinner (name, counter) {
        const winMessage = `${name} is the winner!`
        const draw = "It's a draw!";
        const winner = document.getElementById('winner');
            
        if( // Rows
            tileArray[0] == tileArray[1] && tileArray[1] == tileArray[2] || 
            tileArray[3] == tileArray[4] && tileArray[4] == tileArray[5] ||
            tileArray[6] == tileArray[7] && tileArray[7] == tileArray[8] ||
            
            // Columns
            tileArray[0] == tileArray[3] && tileArray[3] == tileArray[6] || 
            tileArray[1] == tileArray[4] && tileArray[4] == tileArray[7] ||
            tileArray[2] == tileArray[5] && tileArray[5] == tileArray[8] ||
            
            // Diagonal
            tileArray[0] == tileArray[4] && tileArray[4] == tileArray[8] || 
            tileArray[2] == tileArray[4] && tileArray[4] == tileArray[6]){
            
            
           return document.getElementById('winner').textContent = winMessage;
                
        } 
        else if (counter == 9 ) {
            return document.getElementById('winner').textContent = draw;
        }
    }
}   

gameboard.renderBoard();
Players();
