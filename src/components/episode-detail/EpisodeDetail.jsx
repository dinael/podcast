import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePodcastDetailContext } from '../../context/podcast-detail-context/PodcastDetailContext'

import { Detail } from './EpisodeDetail.style.js'

const EpisodeDetail = () => {
  const { trackId, podcastId } = useParams()
  const { error, podcastItem, fetchData } = usePodcastDetailContext()
  const [ detail, setDetail] = useState()

  useEffect(() => {
    fetchData(podcastId)
  }, [podcastId, fetchData])

  if (error) {
    return <p>Error: {error}</p>
  }

  if (!podcastItem || podcastItem.length === 0) {
    return <p>Loading...</p>
  }

  const episodeDetails = {
    title: podcastItem[1].collectionName,
    trackName: podcastItem[1].trackName,
    artWork: podcastItem[1].artworkUrl600,
    description: podcastItem[1].collectionDescription,
    audioUrl: podcastItem[1].audioUrl,
  }

  const episode = ()=> {
    const details = podcastItem.map((episode) => ({
      title: episode.collectionName,
      trackName: episode.trackName,
      artWork: episode.artworkUrl600,
      description: episode.collectionDescription,
      audioUrl: episode.audioUrl,
    }))
  }

  return (
    <>
      <Detail.Breadcrumb>
        <Detail.GoBack to={`/podcast/${podcastId}`}>
          Volver
        </Detail.GoBack>
      </Detail.Breadcrumb>
      <Detail.Container>
        <Detail.Header>
          <Detail.Title>
            {episodeDetails.title}
          </Detail.Title>
          <p>
            {episodeDetails.trackName}
          </p>
          <Detail.Cover
            src={episodeDetails.artWork}
            alt={`${episodeDetails.title} cover`}
          />
        </Detail.Header>
        <article>
          <Detail.player controls>
            <source
              src={`${podcastItem[1].episodeUrl}`}
              type="audio/mpeg" />
            Your browser does not support the audio tag.
          </Detail.player>
          <h3>Description</h3>
          <p>{podcastItem[1].description}</p>
        </article>
      </Detail.Container>
    </>
  )
}

export default EpisodeDetail