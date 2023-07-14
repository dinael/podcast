import styled from 'styled-components'
import { useState, useEffect } from 'react'


import PodcastSearch from '../podcast-search/PodcastSearch'
import PodcastItem from '../podcast-item/PodcastItem'

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  gap: 3rem 1rem;
  width: 100%;
  padding: 3.5rem 0;
  margin: 0;
  border-block-start: 1px solid hsl(0, 0%, 90%);
`
const ListItem = styled.li`
  display: flex;
`

const SearchRegion = styled.div`
  padding-block-end: 1rem;
`

const PodcastInput = styled(PodcastSearch)`
  margin-block: 0.75rem;
`

const SearchResultLength= styled.p`
  display: grid;
  place-items: center;
  font-size: 0.75rem;
  block-size: 1.25rem;
  inline-size: fit-content;
  min-inline-size: 1.25rem;
  padding: 0 0.75ch;
  margin-left: auto;
  border-radius: 10ch;
  color: white;
  background: var(--color-main);
`

const PodcastList = ({url}) => {
  const [items, setItems] = useState([])
  const [images, setImages] = useState([])
  const [SearchPodcast, setSearchPodcast] = useState('')
  const [filteredPodcast, setFilteredPodcast] = useState([])

  const UrlApi = url

  useEffect(() => {
    const fetchData = async () => {
      const storedData = localStorage.getItem('podcastData');
      const storedTime = localStorage.getItem('podcastTime');
      const currentTime = new Date().getTime();

      const shouldFetchData = !(storedData && storedTime && currentTime - parseInt(storedTime) < 24 * 60 * 60 * 1000);

      if (shouldFetchData) {
        try {
          const response = await fetch(UrlApi);
          const data = await response.json();
          const PodcastItems = data.feed.entry;
          setItems(PodcastItems);
          const PodcastImages = PodcastItems.map((item) => item['im:image'][0].label);
          setImages(PodcastImages);

          localStorage.setItem('podcastData', JSON.stringify(PodcastItems));
          localStorage.setItem('podcastImages', JSON.stringify(PodcastImages));
          localStorage.setItem('podcastTime', currentTime.toString());
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      } else {
        setItems(JSON.parse(storedData));
      }
    };

    fetchData();
  }, [UrlApi, images])

  useEffect(() => {
    const filteredPodcast = items.filter((item) =>
      item['im:name'].label.toLowerCase().includes(SearchPodcast.toLowerCase())
    );
    setFilteredPodcast(filteredPodcast);
  }, [SearchPodcast, items])

  const podcastSearch = (event) => {
    setSearchPodcast(event.target.value)
  };

  if (!url) {
    return <p>No se encontraron resultados.</p>;
  }

  if (!items) {
     return <div>Loading...</div>
  }

  console.log(items)

  return (
    <>
      <SearchRegion role='search'>
        <PodcastInput
          label={'Buscar'}
          placeholder={'Busca tu podcast favorito'}
          value={SearchPodcast}
          type={'search'}
          onChange={podcastSearch} />
        <SearchResultLength>
          {filteredPodcast.length}
        </SearchResultLength>
      </SearchRegion>
      {filteredPodcast.length === 0
        ? <p>No se encontraron resultados.</p>
        : <List aria-label="Podcast List">
          {filteredPodcast.map((item) => (
            <ListItem
              key={item.id.attributes['im:id']}>
              <PodcastItem
                title={item['im:name'].label}
                imgSrc={item['im:image'][0].label}
                imgAlt={item['im:name'].label}
                author={item['im:artist'].label}
                callToAction={'Ver detalle'}
                url={`/podcast/${item.id.attributes['im:id']}`}
                />
            </ListItem>
          ))}
        </List>
      }
    </>
  )
}

export default PodcastList
