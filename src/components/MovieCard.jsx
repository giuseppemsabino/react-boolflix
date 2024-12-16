import React from 'react';

const getFlag = (languageCode) => {
  const flags = {
    en: '🇬🇧',
    it: '🇮🇹',
    fr: '🇫🇷',
    es: '🇪🇸',
    de: '🇩🇪',
  };
  return flags[languageCode] || '🏳️';
};

const MovieCard = ({ movie }) => {
  const { title, original_title, original_language, vote_average, poster_path } = movie;

  return (
    <div className="movie-card">
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : '/no-image.png'}
        alt={title}
      />
      <h3>{title}</h3>
      <p>Titolo originale: {original_title}</p>
      <p>
        Lingua: {getFlag(original_language)} {original_language}
      </p>
      <p>Voto: {vote_average}</p>
    </div>
  );
};

export default MovieCard;