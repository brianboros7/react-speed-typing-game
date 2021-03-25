import React, {useState, useEffect} from 'react'

function EndGame() {
    const [isTimeRemaining, setIsTimeRemaining] = useState(false)

     /* eslint-disable */
     function endGame() {
        props.setIsTimeRunning(false)
        props.setWordCount(calculateWordCount(text)) 
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