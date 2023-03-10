import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {user}  from '../redux/loginSlice'

function Login() {
    
    const dispatch = useDispatch()

    const [name, setName] = useState(" ")

    function handleUser(e){
        setName(e.target.value)
    }

    return (
        <div className="content-box">
            <input type="text" onChange={handleUser} name="userName" value={name} id="userName" placeholder="Choose your name" />
            <button 
                onClick={() => { 
                    dispatch(user(name));
                }}
            >
                enter
            </button>
        </div>
        
    )
}

export default Login
