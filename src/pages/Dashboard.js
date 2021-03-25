import React from 'react'
import './style.css'

import TypingGame from '../components/typing-game/TypingGame'
function Dashboard() {

    return(
        <div className="Dashboard p-10">
            <div className="Dashboard-container container mx-auto px-10">
                <div className="app-header"> 
                    <h4 className="text-pink-500">Dashboard Home</h4>
                </div>
                <div className="px-10 text-center">
                    <div className="px-10">
                        <TypingGame /> 
                    </div>
                </div>

                



            </div>
        </div>
    )
}

export default Dashboard 