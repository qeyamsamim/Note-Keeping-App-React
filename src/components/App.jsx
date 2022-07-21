import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreatArea";

const App = () => {

    const [notes, setNotes] = useState([]);
    
    const handleClick = (id) => {
        setNotes(prevNote => {
            return prevNote.filter(note => note.id !== id);  
        });
    }

    return <div>
        <Header />
        <CreateArea data={notes} setData={setNotes} />
        <Note data={notes} handleClick={handleClick}/>
        <Footer />
    </div>
}

export default App;