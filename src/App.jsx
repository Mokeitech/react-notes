import { BrowserRouter, Routes, Route } from "react-router-dom"
import Notes from "./pages/Notes"
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
//import dummyNotes from './dummy_notes'
import { useEffect, useState } from "react";

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])  //saving the typed article to local file
  useEffect(() => {

  }, [notes])
      localStorage.setItem('notes', JSON.stringify(notes))      //saving the typed article to local file
  return (
    <main className="" id="app">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Notes notes={notes}/>} />
                <Route path="/create-note" element={<CreateNote setNotes={setNotes}/>} />
                <Route path="/edit-note/:id" element={<EditNote notes={notes} setNotes={setNotes}/>} />
            </Routes>
        </BrowserRouter>
    </main>
  )
}

export default App