// import React, { useEffect, useState } from "react";
// import '../happy.css';
// import { useNavigate } from "react-router-dom";

// function HappySongs() {
//   const navigate = useNavigate();

//   const [songs, setSongs] = useState([]);
//   const [startIndex, setStartIndex] = useState(0);
//   const ITEMS_PER_PAGE = 4;

//   useEffect(() => {
//     fetch('http://localhost:5050/moods')
//       .then(res => res.json())
//       .then(data => {
//         const happySongs = data.filter(song => song.mood === "happy");
//         setSongs(happySongs);
//       })
//       .catch(err => console.error("Error fetching songs:", err));
//   }, []);

// const handleShowMore = () => {
//   setStartIndex((prevIndex) => {
//       const nextIndex = prevIndex + ITEMS_PER_PAGE;
//       return nextIndex >= songs.length ? 0 : nextIndex;
//     });
//   };

//   const visibleSongs = songs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   const handleAddToFavorites = (song) => {
//     const existingFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     const isAlreadyFavorite = existingFavorites.some(fav => fav.id === song.id);
//     if (!isAlreadyFavorite) {
//       const updatedFavorites = [...existingFavorites, song];
//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//     }
//   };

//   return (
//     <div className="happy-page">
//       <h1>Music for Your Happy Mood</h1>
//       <p>
//         Here are some tracks that match how you're feeling.<br />
//         Click on a track to preview it or add it to your favorites.
//       </p>

      

//       <div className="song-list">
//         {visibleSongs.map(song => (
//           <div key={song.id} className="song-card">
//             <h3>{song.title} by {song.artist}</h3>
//             <a href={song.youtube_url} target="_blank" rel="noopener noreferrer">
//               Watch on YouTube
//             </a>
//             <button className="fav-button" onClick={() => handleAddToFavorites(song)}>
//               Add to Favorites
//             </button>
//           </div>
//         ))}
//       </div>

//       <button className="back-button" onClick={() => navigate('/moods')}>
//         <span className="arrow">←</span> Go Back
//       </button>

//       {songs.length > ITEMS_PER_PAGE && (
//         <button className="refresh-button" onClick={handleShowMore}>Refresh Songs</button>
//       )}
//     </div>
//   );
// }

// export default HappySongs;



import React, { useEffect, useState } from "react";
import '../happy.css';
import { useNavigate } from "react-router-dom";

function HappySongs() {
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
        const happySongs = data.filter(song => song.mood?.toLowerCase() === "happy");
        setSongs(happySongs);
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
    <div className="happy-page">
      <h1>Music for Your Happy Mood</h1>
      <p>
        Enjoy these happy songs.<br />
        Click a link to watch or add it to your favorites.
      </p>

      <div className="song-list">
        {visibleSongs.map(song => (
          <div key={song.id} className="song-card">
            <h3>{song.title} by {song.artist}</h3>
            <a href={song.youtube_url} target="_blank" rel="noopener noreferrer"> Watch on YouTube</a>
            <button onClick={() => handleAddToFavorites(song)}>Add to Favorites
            </button>
          </div>
        ))}
      </div>

      <div className="bottom-buttons">
      {/* Go back to moods page */}
      <button className="go-back" onClick={() => navigate('/moods')}>← Go Back</button>

      {/* Show More button if there are more than 4 songs */}
      {songs.length > ITEMS_PER_PAGE && (
        <button className="refresh-songs" onClick={handleShowMore}>Refresh Songs</button>
      )}

      </div>
    </div>
  );
}

export default HappySongs;
