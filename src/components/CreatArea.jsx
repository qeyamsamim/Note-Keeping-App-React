import React, { useState } from "react";

const CreateArea = ({data, setData}) => {

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleInputChange = (event) => {
    setNewTitle(event.target.value);
  }

  const handleTextareaChange = (event) => {
    setNewContent(event.target.value);
  }

  const onAddNote = (event) => {
    event.preventDefault();
    const newInput = {
      title: newTitle,
      content: newContent,
      id: data.length + 0
    }
    setData(data.concat(newInput));
    setNewTitle("");
    setNewContent("");
  }

  return (
    <div>
      <form onSubmit={onAddNote}>
        <input onChange={handleInputChange} value={newTitle} placeholder="Title" />
        <textarea onChange={handleTextareaChange} value={newContent} placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
