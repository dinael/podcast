import { createContext, useContext, useState } from 'react'

const PodcastDetailContext = createContext()

const PodcastDetailProvider = ({ children }) => {
  const [error, setError] = useState(null)
  const [podcastItem, setPodcastItem] = useState(null)

  const fetchData = async (podcastId) => {
    try {
      const cachedData = localStorage.getItem(`podcast-${podcastId}`)
      if (cachedData) {
        const data = JSON.parse(cachedData)
        setPodcastItem(data)
      } else {
        const response = await fetch(
          `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=10`
        )
        const data = await response.json()

        if (data.results && data.results.length > 0) {
          setPodcastItem(data.results)
          localStorage.setItem(`podcast-${podcastId}`, JSON.stringify(data.results))
        } else {
          setError('Results not found')
        }
      }
    } catch (error) {
      setError('No se encuentran los detalles del episodio')
    }
  }

  const podcastDetail = podcastItem && {
    title: podcastItem[1].collectionName,
    imgSrc: podcastItem[0].artworkUrl600,
    imgAlt: podcastItem[0].collectionName,
    author: podcastItem[0].artistName,
    genre: podcastItem[0].primaryGenreName,
    description: podcastItem[1].description,
    date: podcastItem[0].releaseDate,
  }

  return (
    <PodcastDetailContext.Provider
      value={{
        fetchData,
        error,
        podcastItem,
        detail: podcastDetail,
      }}>
      {children}
    </PodcastDetailContext.Provider>
  )
}

export const usePodcastDetailContext = () => useContext(PodcastDetailContext)

export default PodcastDetailProvider
