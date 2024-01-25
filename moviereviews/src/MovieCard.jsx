import React from 'react';

const MovieCard = ({ title, imageUrl, reviewUrl, description }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl} alt={title} />
      <div className="container">
        <h4>{title}</h4>
        <p className="movie-genre">{description}</p> 
        <a href={reviewUrl} target="_blank" rel="noopener noreferrer">Reviews</a>
      </div>
    </div>
  );
}

export default MovieCard;
