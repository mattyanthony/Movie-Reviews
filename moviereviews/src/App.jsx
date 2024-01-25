import React from 'react';
import MovieCard from '/src/MovieCard.jsx';
import '/src/App.css'

const App = () => {
  const movies = [
    {
      title: "Django Unchained",
      imageUrl: "https://resizing.flixster.com/6_9WVndz2aGcjCvQM_oyRo0aO9U=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VkMjk3ZGNhLThhOTUtNGQ5YS1iNWYwLTczMWEzNDBiZjQwZC53ZWJw",
      reviewUrl: "https://www.rottentomatoes.com/m/django_unchained_2012"
    },
    {
      title: "Dirty Dancing",
      imageUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/NowShowing/2027/2027_aa.jpg",
      reviewUrl: "https://www.rottentomatoes.com/m/dirty_dancing"
    },
    {
      title: "Interstellar",
      imageUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v12_ar.jpg",
      reviewUrl: "https://www.rottentomatoes.com/m/interstellar_2014"
    },
    {
      title: "The Dark Knight",
      imageUrl: "https://resizing.flixster.com/Wg25mLoPWxjcxXzNyaSF4VGgGE4=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2ZiNjZiNWFkLWVhNzEtNDRhMC1iNGIwLTFmY2FkNzllNTJlMi5qcGc=",
      reviewUrl: "https://www.rottentomatoes.com/m/the_dark_knight"
    },
    {
      title: "Pulp Fiction",
      imageUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15684_p_v8_af.jpg",
      reviewUrl: "https://www.rottentomatoes.com/m/pulp_fiction"
    },
    {
      title: "Fight Club",
      imageUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23069_p_v8_aa.jpg",
      reviewUrl: "https://www.rottentomatoes.com/m/fight_club"
    },
    {
      title: "American Sniper",
      imageUrl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10991238_p_v8_ay.jpg",
      reviewUrl: "https://www.rottentomatoes.com/m/american_sniper"
    },
    {
      title: "Oppenheimer",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
      reviewUrl: "https://www.rottentomatoes.com/m/oppenheimer_2023"
    },
    {
      title: "Star Wars: Episode 3 - Revenge of the Sith",
      imageUrl: "https://resizing.flixster.com/-Mjmf-8IzcGhEpF81dEbL7xUoCM=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzg1MmZlZWZjLWVkYjgtNGM2Zi1iOGZhLWI1ZTdhYTVkZjgyYi53ZWJw",
      reviewUrl: "https://www.rottentomatoes.com/m/star_wars_episode_iii_revenge_of_the_sith"
    },
    {
      title: "Kingdom of Heaven",
      imageUrl: "https://m.media-amazon.com/images/I/71y3iJWWjHL._AC_UF894,1000_QL80_.jpg",
      reviewUrl: "https://www.rottentomatoes.com/m/kingdom_of_heaven"
    }
  ];
  

  return (
    <div>
    <header className="app-header">
      <h1>🎞️ Movie Reviews 🎞️</h1>
    </header>
    <div className="movie-container">
      {movies.map(movie => (
        <MovieCard key={movie.title} {...movie} />
      ))}
    </div>
    </div>
  );
}

export default App;
