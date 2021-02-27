import React, {useContext} from "react";
import {NotesContext} from "../contexts/NotesContexts";
import styles from "../styles/components/Notes.module.css";

export function Notes(){
    
    const {newNote} = useContext(NotesContext);
    
    return (
        <>
            { newNote != "" && (
            <div className={styles.notesContainer}>
                 { newNote.map( (m, index) => (
                    <div className={styles.note} key={index} id={index}>
                        <p>{m}</p>
                        <strong>Lucas Sacheto</strong>
                    </div>
                    )
                )} 
            </div>
            )}
        </>
    )
}