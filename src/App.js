import React, {useState} from 'react';
import './App.css';
import { NoteForm } from "./components/NoteForm"
import {Note} from "./components/Note"
import {ClearAll} from "./components/ClearAll"

function App() {
  const [notes, setNotes] = useState([
    {
      title: "Make dinner",
      subtitle: "4 servings",
      text: "Might be a good night for chicken piccata."
    },
    {
      title: "Class",
      subtitle: "Math",
      text:"finish derivative homework"
    }
  ])
  const addNote = (note) => {
    const newNotes = [...notes, note];
    console.log("this is new notes", newNotes);
    setNotes(newNotes);
  }
  const deleteNote = index => {
    const newNotes = [...notes]
    newNotes.splice(index, 1);
    setNotes(newNotes)
  }
  const clear = () => {
    setNotes([])
  }
  
  
  
  return (
    <div className="App">
      <h1>Notes</h1>
      <Note notes={notes} deleteNote={deleteNote}/>
      <NoteForm addNote={addNote}/>
      <ClearAll clear={clear}/>
    </div>
  );
}

export default App;


