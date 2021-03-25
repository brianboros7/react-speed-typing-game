import React from 'react'; 
import './style.css'; 
import StartGameBtn from '../buttons/StartGameBtn'

function TypingGame(textBox, timeRemaining, startWordCount) {

    return (
        <div className="speed-typing-section container mx-auto p-10"> 
            <div className="game-container px-10"> 
                <h2 className="p-3 text-pink-500 text-bold">Good morning, how fast can you type today?</h2>

                <div className="text-box">
                    {textBox}
                </div>

                <h3 className="text-pink-500 text-bold my-2 p-2">
                    Time remaining: {timeRemaining}
                </h3> 
                
                <StartGameBtn /> 

                <h1 className="my-3 p-2 text-pink-500 text-bold">Word count: {startWordCount}</h1>
            </div> 
        </div>
    )
}

export default TypingGame