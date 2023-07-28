import { useState, useEffect } from 'react'
import { List } from './PodcastList.style'

import PodcastItem from '../podcast-item/PodcastItem'
import PodcastSearch from '../podcast-search/PodcastSearch'

const PodcastList = ({ items }) => {
  const [SearchPodcast, setSearchPodcast] = useState('')
  const [filteredPodcast, setFilteredPodcast] = useState([])

  useEffect(() => {
    if (items) {
      const filteredPodcast = items.filter((item) =>
        item.name.toLowerCase().includes(SearchPodcast.toLowerCase())
      )
      setFilteredPodcast(filteredPodcast)
    }
  }, [SearchPodcast, items])

  const handleChange = (event) => {
    setSearchPodcast(event.target.value)
  }

  if (!items) {
    return <div>Loading...</div>
  }

  return (
    <>
      <List.SearchRegion role='search'>
        <PodcastSearch
          label={'Buscar'}
          placeholder={'Busca tu podcast favorito'}
          value={SearchPodcast}
          type={'search'}
          onChange={handleChange}
        />
        <List.SearchResultLength aria-label="Total search result:">
          {filteredPodcast.length}
        </List.SearchResultLength>
      </List.SearchRegion>
      {filteredPodcast.length === 0 ? (
        <p>Results not found.</p>
      ) : (
        <List.Container aria-label="Podcast List">
          {filteredPodcast.map((item) => (
            <List.Item key={item.id}>
              <PodcastItem
                title={item.name}
                imgSrc={item.img}
                imgAlt={item.name}
                author={item.author}
                callToAction={'Ver detalle'}
                url={`/podcast/${item.id}`}
              />
            </List.Item>
          ))}
        </List.Container>
      )}
    </>
  )
}

export default PodcastList
