import React from 'react'


function StartGameBtn(startGame) {
    
    return(
        <button 
                className="bg-pink-500 hover:bg-pink-50 text-white hover:text-pink-500 border-2 border-pink-500 font-bold py-2 px-4 rounded"
                onClick={startGame}
                >
                Start Game
            </button>
    )
}

export default StartGameBtn