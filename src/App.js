import React, {useState} from 'react';
import './App.css';
import { NoteForm } from "./components/NoteForm"
import {Note} from "./components/Note"

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

  // const handleNotes = (notes) => {
  //   const tempArr = [...notes];
  //   tempArr.push(notes)
  //   setNotes(tempArr);
  // }
  const addNote = (title, subtitle, text) => {
    const newNotes = [...notes, {title, subtitle, text}];
    setNotes(newNotes);
  }
  
  
  
  return (
    <div className="App">
      <h1>Notes</h1>
      <Note notes={notes}/>
      <NoteForm addNote={addNote}/>
    </div>
  );
}

export default App;


