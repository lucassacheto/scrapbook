import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContexts";

import styles from "../styles/components/InputNote.module.css";


export function InputNote(){
    
    React.useEffect(() => {
        // window is accessible here.
        window.onload = function() {document.getElementById("inputNote").focus();}
    }, []);

    const {note, addNote, addNewNote} = useContext(NotesContext);
    
    return (
        <div className={styles.inputNoteContainer}>
            
            <form onSubmit={addNewNote}>
                <input type="text" id="inputNote" onChange={addNote} value={note} placeholder="add your message" />
                <button 
                    type="submit"
                    className={styles.inputNote}
                >
                    Send
                </button>
            </form>
        </div>
    )
}