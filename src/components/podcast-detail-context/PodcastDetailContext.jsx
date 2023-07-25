import { createContext, useContext, useState } from 'react'

const PodcastDetailContext = createContext()

const PodcastDetailProvider = ({ children }) => {
    const [error, setError] = useState(null)
    const [podcastItem, setPodcastItem] = useState(null)

    const fetchData = async (podcastId) => {
        try {
            const response = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=10`)
            const data = await response.json()

            data.results && data.results.length > 0
                ? setPodcastItem(data.results)
                : setError('No se encontraron resultados')
        } catch (error) {
            setError('No se encuentran los detalles del episodio')
        }
    };

    const detail = {
        title: podcastItem ? podcastItem[0]?.collectionName : null,
        imgSrc: podcastItem ? podcastItem[0]?.artworkUrl100 : null,
        imgAlt: podcastItem ? podcastItem[0]?.collectionName : null,
        author: podcastItem ? podcastItem[0]?.artistName : null,
        genre: podcastItem ? podcastItem[0]?.primaryGenreName : null,
        description: podcastItem ? podcastItem[1]?.description : null,
        date: podcastItem ? podcastItem[0]?.releaseDate : null,
    };

    return (
        <PodcastDetailContext.Provider
            value={{ fetchData, error, podcastItem, detail }}>
            {children}
        </PodcastDetailContext.Provider>
    );
};

export const usePodcastDetailContext = () => useContext(PodcastDetailContext)

export default PodcastDetailProvider
