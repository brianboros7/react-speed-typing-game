import React from 'react'

function StartGame(timer, startWordCount) { 
    const [isTimeRunning, setIsTimeRunning] = useState(false)

    function startGame() {
        setIsTimeRunning(true)
        {timer}
        {startWordCount}

        textBoxRef.current.disabled = false 
        textBoxRef.current.focus()
    }

    return(
        <div>
            {startGame}
        </div>
    )
}

export default StartGame 