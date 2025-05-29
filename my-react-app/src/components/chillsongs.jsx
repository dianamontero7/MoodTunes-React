import React, { useEffect, useState } from "react";
import '../chill.css';
import { useNavigate } from "react-router-dom";

function ChillSongs() {
  const navigate = useNavigate(); // lets you go to a different page
  const [songs, setSongs] = useState([]); // list of all happy songs
  const [startIndex, setStartIndex] = useState(0); // where to start showing songs
  const ITEMS_PER_PAGE = 4; // how many songs to show at once

  // Load songs from the backend when the page loads
  useEffect(() => {
    fetch('http://localhost:5050/moods')
      .then(res => res.json())
      .then(data => {
        // only keep songs with mood "happy" (case-insensitive)
        const chillSongs = data.filter(song => song.mood?.toLowerCase() === "chill");
        setSongs(chillSongs);
      })
      .catch(error => console.log("Error fetching songs:", error));
  }, []);

  // Show 4 songs at a time, then reset when reaching the end
  const handleShowMore = () => {
    const nextIndex = startIndex + ITEMS_PER_PAGE;
    setStartIndex(nextIndex >= songs.length ? 0 : nextIndex);
  };

  // Only show a part of the songs list
  const visibleSongs = songs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Add song to favorites in localStorage
  const handleAddToFavorites = (song) => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    const alreadySaved = saved.some(item => item.id === song.id);
    if (!alreadySaved) {
      saved.push(song);
      localStorage.setItem("favorites", JSON.stringify(saved));
    }
  };

  return (
    <div className="chill-page">
      <h1>Music for Your Chill Mood</h1>
      <p>
        Enjoy these chill songs!<br />
        Click a link to watch or add it to your favorites.
      </p>

      <div className="song-list">
        {visibleSongs.map(song => (
          <div key={song.id} className="song-card">
            <h3>{song.title} by {song.artist}</h3>
            <a href={song.youtube_url} target="_blank" rel="noopener noreferrer">
              🎵 Watch on YouTube
            </a>
            <button onClick={() => handleAddToFavorites(song)}>
              ❤️ Add to Favorites
            </button>
          </div>
        ))}
      </div>

      {/* Go back to moods page */}
      <button onClick={() => navigate('/moods')}>← Go Back</button>

      {/* Show More button if there are more than 4 songs */}
      {songs.length > ITEMS_PER_PAGE && (
        <button onClick={handleShowMore}>Show More</button>
      )}
    </div>
  );
}

export default ChillSongs;



