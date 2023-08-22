import { useParams } from 'react-router-dom'
import { usePodcastDetailContext } from '../../context/podcast-detail-context/PodcastDetailContext'

import { Detail } from './EpisodeDetail.style.js'

const EpisodeDetail = () => {
  const { podcastId, trackId } = useParams()
  const { error, podcastItem } = usePodcastDetailContext()

  if (error) {
    return <p>Error: {error}</p>
  }

  if (!podcastItem || podcastItem.length === 0) {
    return <p>Loading...</p>
  }

  const episodeRaw = podcastItem.slice(1)

  function getPodcastById(trackId) {
    return episodeRaw.find(item => {
      return item.trackId === trackId
    })
  }

  const episode = getPodcastById(parseInt(trackId));

  return (
    <>
      <Detail.Breadcrumb>
        <Detail.GoBack to={ '/' }>Home</Detail.GoBack>
        <span>{ '>' }</span>
        <Detail.GoBack to={`/podcast/${podcastId}`}>
          { podcastItem[1].collectionName }
        </Detail.GoBack>
        <span>{ '>' }</span>
        <Detail.BreadcrumbCurrent>
          {episode.trackName}
        </Detail.BreadcrumbCurrent>
      </Detail.Breadcrumb>
      <Detail.Container>
        <Detail.Header>
          <Detail.Title>
            {episode.trackName}
          </Detail.Title>
          <Detail.SubTitle>
            by: {podcastItem[1].collectionName}
          </Detail.SubTitle>
          <Detail.Cover
            src={episode.artworkUrl600}
            alt={`${podcastItem[1].collectionName} cover`}
          />
          <p></p>
        </Detail.Header>
        <article>
          <Detail.Player controls>
            <source
              src={`${episode.episodeUrl}`}
              type="audio/mpeg" />
            Your browser does not support the audio tag.
          </Detail.Player>
          <h3>Description</h3>
          <p>{episode.description}</p>
        </article>
      </Detail.Container>
    </>
  )
}

export default EpisodeDetail