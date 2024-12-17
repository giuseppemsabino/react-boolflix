// import React from 'react';

// const getFlag = (languageCode) => {
//   const flags = {
//     en: '🇬🇧',
//     it: '🇮🇹',
//     fr: '🇫🇷',
//     es: '🇪🇸',
//     de: '🇩🇪',
//   };
//   return flags[languageCode] || '🏳️';
// };

// const MovieCard = ({ movie }) => {
//   const { title, original_title, original_language, vote_average, poster_path } = movie;

//   return (
//     <div className="movie-card">
//       <ul>
//         <li>titolo: {title}</li>
//         <li>titolo originale: {original_title}</li>
//         <li>lingua: {getFlag(original_language)}{original_language}</li>
//         <li>voto: {vote_average}</li>
//       </ul>
//     </div>
//   );
// };

// export default MovieCard;