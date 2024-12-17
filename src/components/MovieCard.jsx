export default function MovieCards({ production }) {

    const formatLanguage = () => {
      if (production.original_language === 'es') return 'ES';  
      if (production.original_language === 'en') return 'GB';  
      if (production.original_language === 'it') return 'IT';  
      return 'US';  
    }
  
    console.log(formatLanguage());
  
    return (
      <ul key={production.id}>
        <li>titolo: {production.title}</li>
        <li>Titolo originale: {production.original_title}</li>
        <li>
          lingua: {production.original_language}
          <img src={`https://flagsapi.com/${formatLanguage()}/flat/64.png`} alt={`Flag for ${production.original_language}`} />
        </li>
        <li>Voto: {production.vote_average}</li>
      </ul>
    );
  }
  