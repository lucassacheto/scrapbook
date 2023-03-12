import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {post}  from '../redux/scrapSlice'
import {onSnapshot} from 'firebase/firestore'
import {firebaseConnection} from '../connection'

import {fetchData} from '../redux/loginSlice'

//const login = useSelector((state) => state.login.value)

const Scrapbook = () => {
    const userLocalStorage = fetchData("userName")
    const colRef = firebaseConnection(userLocalStorage);
    const [scraps, setListScraps] = useState([])

    // FIREBASE Load data
    useEffect( () => {
        const getScrapsList = async () => {
            try {
                onSnapshot(colRef, (snapshot) => {
                let scraps = []
                snapshot.docs.forEach(element => {
                    scraps.push({ ...element.data(), id: element.id})
                })
                //console.log(scraps)
                setListScraps(scraps)
                })
            } catch (err){
                console.log(err)
            }
        }
        getScrapsList()
    }, [])

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
                scraps.length == 0 ? <p>You have no messages</p>
                :
                scraps.map( (item, index) => {
                    return (
                        <div className="note" id={item.id} key={index}>
                            {item.message}
                        </div>
                    )
                })
            }
        </div>
        {/* {console.log(scraps)} */}

        </>
    )
}

export default Scrapbook;