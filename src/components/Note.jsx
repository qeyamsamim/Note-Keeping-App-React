import React from "react";

const Note = ({ data, handleClick }) => {

    return data.map((note) => 
        <div key={note.id} className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={() => handleClick(note.id)}>DELETE</button>
        </div> 
    );
}

export default Note;