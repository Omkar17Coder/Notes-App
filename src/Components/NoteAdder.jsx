import React,{useState,useEffect} from 'react'

import "./NoteAdder.css";
import codingDSAObjects from "./NotesList";

function NoteAdder() {

  
  
  const [Note,setNote]=useState([]);
  
  const [note,setnote]=useState({
    title:"",
    content:""
  });

  useEffect(() => {
    console.log(Note);
  }, [Note]);

  function handleDelete(index) {
    setNote(prevNote => prevNote.filter((_, i) => i !== index));
  }
  function handleChange(element){
   const {name,value}=element.target;
    setnote({
      ...note,
      [name]:value
    
    })
  }
  
  function handleClick(event){
    event.preventDefault();
    setNote(prevNote => [...prevNote, note]);
    setnote({
      title:"",
      content:""
    })
  
  }
  return (
    <>
    <div className="aligner">
    <form>
      <input name="title" placeholder="Title" value={note.title} onChange={handleChange} />
      <textarea name="content" placeholder="Take a note..." 
        value= {note.content} rows="3"  onChange={handleChange}/>
      <div className="adder-1">
   <button onClick={handleClick}>Add</button>
      </div>
    </form>
     
  </div>
      <div className='note-container'>
        {

        Note.slice().reverse().map((element,index)=>{
          return(
            <div key={index+1} className="note">
            <h2>{element.title}</h2>
            <p>{element.content}</p>
             <button  onClick={() => handleDelete(index)}>Delete</button>
            </div>
          );
        })



        }



      </div>
    </>
  
  )
}

export default NoteAdder