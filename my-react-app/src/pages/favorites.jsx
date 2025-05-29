import React, { useEffect, useState } from "react";
import "../favorites.css";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemove = (id) => {
    const updatedFavorites = favorites.filter(song => song.id !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorites-title">
      <h1>Your Favorite Tracks</h1>
      <p>All the songs you've saved while exploring different moods.</p>

      <div className="song-list">
        {favorites.length > 0 ? (
          favorites.map((song) => (
            <div key={song.id} className="song-card">
              <h3>{song.title} by {song.artist}</h3>
              <a href={song.youtube_url} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
              </a>
              <button className="remove-button" onClick={() => handleRemove(song.id)}>
                Remove from Favorites
              </button>
            </div>
          ))
        ) : (
          <p>You haven't added any favorites yet.</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
