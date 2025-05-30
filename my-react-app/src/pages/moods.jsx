import { Link } from "react-router-dom";
import React from "react";
import "../moods.css"; 

function Moods() {

const moods= [
  { 
    emoji: "😊",
    title: "Happy",
    description: "Feeling good? Turn it up!",
    className: "happy",
  },

  {
    emoji: "😢",
    title: "Sad",
    description: "Feeling down? Let's lift up!",
    className: "sad",
  },
  {
    emoji: "😌",
    title: "Chill",
    description: "Need to chill? Let's vibe.",
    className: "chill",
  },
  {
    emoji: "😠",
    title: "Angry",
    description: "Frustrated? Let's blast it!",
    className: "angry"
  }
]


  return (
    <div className="moods-page">

    <div className="moods-title">
    <h1>How are you feeling today?</h1>

    <div style={{ height: '10px' }} />

    <p>Select a mood and we'll recommend music that 
      <br></br>matches your current emotional state. </p>
    </div>


    <section className="mood-cards">
      {moods.map ((mood, index) =>(
          <Link to={`/moods/${mood.title.toLowerCase()}`} key={index} className={`card ${mood.className}`}>
            <div className="emoji">{mood.emoji}</div>
            <div className="title">{mood.title}</div>
            <div className="desc">{mood.description}</div>
          </Link>
        ))}
    </section>
    </div>

    )
  }
  
  export default Moods;