import {useState} from "react";
import { createContext } from "react";

export const NotesContext = createContext({});

export function NotesProvider({ children }){
    
    const [note, setNote] = useState("");
    const [newNote, setNewNote] = useState([]);

    function addNote(e){
        setNote(e.target.value)
    }

    function addNewNote(e){
        
       if(e.target.value !== "") {
            setNewNote((prevItems) => {
                return [...prevItems, note];
            });
            setNote("");
        }     
        e.preventDefault();
    }
   

    return (
        <NotesContext.Provider value={{note, newNote, addNote, addNewNote}}>
            {children}
        </NotesContext.Provider>
    )
}