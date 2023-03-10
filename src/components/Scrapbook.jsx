import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {post}  from '../redux/scrapSlice'

const Scrapbook = () => {
    
    const scrap = useSelector((state) => state.scrap)
    const dispatch = useDispatch()
    
    const [text, setText] = useState(" ");

    function handleMessage(e){
        setText(e.target.value)
    }

    return (
        <>
        <div className="content-box">
            
            <input type="text" onChange={handleMessage} value={text} />
            <button
                onClick={() => { 
                    dispatch(post([text]));
                }}
            >
                add
            </button>
            
            
        </div>
        
        <div className="notesContainer">
            {
                scrap.map( (item, index) => {
                    return (
                        <div className="note" key={index}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
        {/* {console.log(scrap)} */}

        </>
    )
}

export default Scrapbook;