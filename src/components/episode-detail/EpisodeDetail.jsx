import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePodcastDetailContext } from '../podcast-detail-context/PodcastDetailContext';

import styled from 'styled-components'

export const EpisodePlayer = styled.audio`
  accent-color: red;
`

const EpisodeDetail = () => {
  const { trackId, podcastId } = useParams();
  const { error, podcastItem, fetchData } = usePodcastDetailContext();

  useEffect(() => {
    fetchData(podcastId);
  }, [podcastId, fetchData]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!podcastItem || podcastItem.length === 0) {
    return <p>Loading...</p>;
  }

    return (
      <>
        {podcastItem && console.log(podcastItem)}
        <p>1{podcastItem[1]?.trackName}</p>
        <p>pepe {`${trackId}`}</p>
        <div>
          <EpisodePlayer controls>
            <source
              src={`${podcastItem[1]?.episodeUrl}`}
              type="audio/mpeg" />
            Your browser does not support the audio tag.
          </EpisodePlayer>
        </div>
      </>
    )
}

export default EpisodeDetail;