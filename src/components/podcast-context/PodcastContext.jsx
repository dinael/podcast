import { createContext, useContext, useState, useEffect } from 'react';

const PodcastContext = createContext();

const PodcastProvider = ({url, children }) => {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);

  const UrlApi = url
  const ItemImgPrefix = 'im:image'

  useEffect(() => {
    const fetchData = async () => {
      const storedData = localStorage.getItem('podcastData');
      const storedTime = localStorage.getItem('podcastTime')
      const currentTime = new Date().getTime()

      const shouldFetchData = !(storedData && storedTime && currentTime - parseInt(storedTime) < 24 * 60 * 60 * 1000)

      if (shouldFetchData) {
        try {
          const response = await fetch(UrlApi)
          const data = await response.json()
          const PodcastItems = data.feed.entry
          const PodcastImages = PodcastItems.map((item) => item[ItemImgPrefix][0].label)
          setItems(PodcastItems)
          setImages(PodcastImages)

          localStorage.setItem('podcastData', JSON.stringify(PodcastItems))
          localStorage.setItem('podcastImages', JSON.stringify(PodcastImages))
          localStorage.setItem('podcastTime', currentTime.toString())
        } catch (error) {
          console.log('Error fetching data:', error)
        }
      } else {
        setItems(JSON.parse(storedData))
      }
    };

    fetchData();
  }, [UrlApi]);

  if (!url) {
    return <p>No se encontraron resultados.</p>
  }

  return (
    <PodcastContext.Provider value={{ items, images }}>
        {children}
    </PodcastContext.Provider>
  );
};

export const usePodcastContext = () => useContext(PodcastContext)

export default PodcastProvider;