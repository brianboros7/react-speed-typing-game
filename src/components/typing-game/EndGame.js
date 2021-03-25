import React, {useState, useEffect} from 'react'

function EndGame(finalWordCount) {
    const [isTimeRemaining, setIsTimeRemaining] = useState(false)

     /* eslint-disable */
     function endGame() {
        setIsTimeRunning(false)
        finalWordCount()
    }

    useEffect((endGame) => {
        if (isTimeRunning && props.timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000) 
        } else if(timeRemaining === 0) { 
            endGame()
        }
    }, [timeRemaining, isTimeRunning])

    return(
        <div>
            {endGame}
        </div>
    )
}

export default EndGame 