import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePodcastDetailContext } from '../../context/podcast-detail-context/PodcastDetailContext'

import { Detail } from './PodcastDetail.style'

import PodcastDetailHeader from '../podcast-detail-header/PodcastDetailHeader'
import EpisodesList from '../episodes-list/EpisodesList'

const PodcastDetail = () => {
  const { podcastId } = useParams()
  const { fetchData, error, podcastItem, detail } = usePodcastDetailContext()

  useEffect(() => {
    fetchData(podcastId)
  }, [podcastId, fetchData])

  if (error) {
    return <p>Error: {error}</p>
  }

  if (!podcastItem || podcastItem.length === 0) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Detail.GoBack to='/'>
        Volver
      </Detail.GoBack>
      <Detail.Container>
        <PodcastDetailHeader
          title={detail.title}
          imgSrc={detail.imgSrc}
          imgAlt={detail.imgAlt}
          author={detail.author}
          genre={detail.genre}
          description={detail.description}
          date={detail.date}
        />
        <EpisodesList episodes={podcastItem} />
      </Detail.Container>
    </>
  )
}

export default PodcastDetail
