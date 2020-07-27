import React from "react";

export const Note = ({notes}, {deleteNote}) => {
    console.log("notes",notes)
    return (
    <div className="notes">
        <h2>Past Notes</h2>
    <ul>
        {notes && notes.map((note) => {
            console.log("note", note)
            return(<li key={note.title}><h4>{note.title}: {note.subtitle}</h4>  {note.text} 
            <button onClick={() => deleteNote(note)}>Remove</button><hr/></li>)
        })}


    </ul>
    </div>

    )
}