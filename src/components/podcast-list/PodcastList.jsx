import styled from 'styled-components'
import { useState, useEffect } from 'react'

import { usePodcastContext } from '../podcast-context/PodcastContext'

import PodcastSearch from '../podcast-search/PodcastSearch'
import PodcastItem from '../podcast-item/PodcastItem'

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
  gap: 3rem 1rem;
  width: 100%;
  padding: 3.5rem 0;
  margin: 0;
  border-block-start: 0.0625rem solid hsl(0, 0%, 90%);
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

const PodcastList = () => {
  const { items } = usePodcastContext()
  const [SearchPodcast, setSearchPodcast] = useState('')
  const [filteredPodcast, setFilteredPodcast] = useState([])

  useEffect(() => {
    const filteredPodcast = items.filter((item) =>
      item['im:name'].label.toLowerCase().includes(SearchPodcast.toLowerCase())
    );
    setFilteredPodcast(filteredPodcast);
  }, [SearchPodcast, items])

  const podcastSearch = (event) => {
    setSearchPodcast(event.target.value)
  };

  if (!items) {
     return <div>Loading...</div>
  }

  return (
    <>
      <SearchRegion role='search'>
        <PodcastInput
          label={'Buscar'}
          placeholder={'Busca tu podcast favorito'}
          value={SearchPodcast}
          type={'search'}
          onChange={podcastSearch} />
        <SearchResultLength aria-label="Resultado de total de búsqueda:">
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
