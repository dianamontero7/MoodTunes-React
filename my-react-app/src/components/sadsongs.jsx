import React, { useEffect, useState } from "react";
import '../sad.css';
import { useNavigate } from "react-router-dom";

function SadSongs() {
  const navigate = useNavigate(); 
  const [songs, setSongs] = useState([]); 
  const [startIndex, setStartIndex] = useState(0); 
  const ITEMS_PER_PAGE = 4; 


  useEffect(() => {
    fetch('http://localhost:5050/moods')
      .then(res => res.json())
      .then(data => {
     
        const sadSongs = data.filter(song => song.mood?.toLowerCase() === "sad");
        setSongs(sadSongs);
      })
      .catch(error => console.log("Error fetching songs:", error));
  }, []);

 
  const handleShowMore = () => {
    const nextIndex = startIndex + ITEMS_PER_PAGE;
    setStartIndex(nextIndex >= songs.length ? 0 : nextIndex);
  };

  
  const visibleSongs = songs.slice(startIndex, startIndex + ITEMS_PER_PAGE);


  const handleAddToFavorites = (song) => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    const alreadySaved = saved.some(item => item.id === song.id);
    if (!alreadySaved) {
      saved.push(song);
      localStorage.setItem("favorites", JSON.stringify(saved));
    }
  };

  return (
    <div className="sad-page">
      <h1>Music for Your Sad Mood</h1>
      <p>
        Enjoy these sad songs.<br />
        Click "Watch on YouTube" or add it to your favorites.
      </p>

      <div className="song-list">
        {visibleSongs.map(song => (
          <div key={song.id} className="song-card">
            <h3>{song.title} by {song.artist}</h3>
            <a href={song.youtube_url} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
            <button onClick={() => handleAddToFavorites(song)}>Add to Favorites</button>
          </div>
        ))}
      </div>

      <div className="bottom-buttons">
 
      <button className="go-back" onClick={() => navigate('/moods')}>← Go Back</button>

   
      {songs.length > ITEMS_PER_PAGE && (
        <button className="refresh-songs" onClick={handleShowMore}>Refresh Songs</button>
      )}

      </div>
    </div>
  );
}

export default SadSongs;


