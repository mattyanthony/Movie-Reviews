import React from 'react';

const MovieCard = ({ title, imageUrl, reviewUrl }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} />
      <div className="container">
        <h4>{title}</h4>
        <a href={reviewUrl} target="_blank" rel="noopener noreferrer">Rotten Tomatoes</a>
      </div>
    </div>
  );
}

export default MovieCard;
