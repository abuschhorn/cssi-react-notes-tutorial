import React, {useState} from 'react'


export const NoteForm = ({addNote}) => {
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [text, setText] = useState("")


    const handleSubmit= (event) => {
        event.preventDefault();
        addNote({title: title, subtitle: subtitle, text: text})


    }
    
    return (
        <div>
            <h1>Create a new note</h1>
            <hr />
           <form onSubmit={handleSubmit}>
            <label value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Place title here..." />
            <label value={subtitle} onChange={(event) => setSubtitle(event.target.value)} placeholder="Place subtitle here..." />
            <label value={text} onChange={(event) => setText(event.target.value)} placeholder="Place text here..." />
           
            <button>Add Note</button>
           
           </form> 
        </div>
    )
}
