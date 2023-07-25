import { createContext, useContext, useState, useEffect } from 'react';

const EpisodeContext = createContext();

const EpisodeProvider = ({ id, children }) => {
  const [error, setError] = useState(null);
  const [EpisodeItem, setEpisodeItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=10`);
        const data = await response.json();

        data.results && data.results.length > 0
          ? setEpisodeItem(data.results)
          : setError('No se encontraron resultados');

      } catch (error) {
        setError('No se encuentran los detalles del episodio');
      }
    };

    fetchData();
  }, [id]);

  if (!id) {
      return <p>No se encontraron resultados.</p>;
  }

  return (
    <EpisodeContext.Provider value={{ id, EpisodeItem }}>
      {children}
    </EpisodeContext.Provider>
  );
};

export const useEpisodeContext = () => useContext(EpisodeContext);

export default EpisodeProvider;