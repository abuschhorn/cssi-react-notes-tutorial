import React from "react";

export const Note = ({notes}) => {
    console.log("notes",notes)
    return (
    <div className="notes">
        <h2>Past Notes</h2>
    <ul>
        {notes && notes.map((notes) => {
            return(<li>{notes.title} : {notes.subtitle}  {notes.text} <hr/></li>)
        })}


    </ul>
    </div>

    )
}