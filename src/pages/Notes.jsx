import {CiSearch} from 'react-icons/ci'
import {MdClose} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {BsPlusLg} from 'react-icons/bs'

import NoteItem from '../components/NoteItem'
import { useState } from 'react';
import { useEffect } from 'react';

const Notes = ({notes}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState('')
  const [filteredNotes, setFilteredNotes] =useState(notes)


  //HANDLESEARCH BEGINS
  const handleSearch = () => {
        // eslint-disable-next-line array-callback-return
        setFilteredNotes(notes.filter(note => {
          if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
            return note;
          }
        }))
  }

  useEffect(handleSearch, [text])
  //HANDLESEARCH ENDS

  //LINE 38 SHOWS NO NOTE FOUND
  return (
    <section>
        <header className="notes__header">
            {!showSearch && <h2>My Notes</h2>}
        {showSearch && <input type="text" value={text} onChange={(e) => {setText(e.target.value); handleSearch();}} autoFocus placeholder='keyword...' />
        }
        <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}> {showSearch ? <MdClose/> : <CiSearch/>}</button>
        </header>
        <div className="notes__container">
            {filteredNotes.length == 0 && <p className='empty__notes'>No notes found.</p>}  
            {
                filteredNotes.map(note => <NoteItem key={note.id} note={note} />)
            }
        </div>
        <Link to="/create-note" className='btn add__btn'><BsPlusLg/></Link>
    </section>
  )
}

export default Notes