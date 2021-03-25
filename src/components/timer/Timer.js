import React from 'react'

function Timer() {
    const [timeRemaining, setTimeRemaining] = useState(30)

    const timer = () => {
        setTimeRemaining(30)
    }

    return(
        <div>{timer}</div>
    )
}

export default Timer 