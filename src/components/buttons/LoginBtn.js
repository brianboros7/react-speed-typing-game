import React from 'react'
import { Link } from 'react-router-dom'


function LoginBtn() {

    return(
        <Link to="/dashboard">
            <button class="bg-white hover:bg-pink-100  text-pink-500 font-bold py-2 px-4 rounded-full">
                Login
            </button>
        </Link>
    )
}

export default LoginBtn