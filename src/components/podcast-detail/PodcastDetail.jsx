import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePodcastDetailContext } from '../podcast-detail-context/PodcastDetailContext';

import styled from 'styled-components';

import PodcastDetailHeader from './PodcastDetailHeader';
import EpisodesList from '../episodes-list/EpisodesList';

const PodcastDetailContainer = styled.article`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PodcastDetail = () => {
  const { podcastId } = useParams();
  const { fetchData, error, podcastItem, detail } = usePodcastDetailContext();

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
    <PodcastDetailContainer>
      <PodcastDetailHeader
        title={ detail.title }
        imgSrc={ detail.imgSrc }
        imgAlt={ detail.imgAlt }
        author={ detail.author }
        genre={ detail.genre }
        description={ detail.description }
        date={detail.date }
      />
      <EpisodesList episodes={ podcastItem } />
    </PodcastDetailContainer>
  );
};

export default PodcastDetail;
