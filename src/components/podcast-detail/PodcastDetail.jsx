import styled from 'styled-components'

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PodcastDetailHeader from './PodcastDetailHeader';
import EpisodesList from '../episodes-list/EpisodesList'

const PodcastDetailContainer = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const PodcastDetail = () => {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [podcastItem, setPodcastItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=10`);
        const data = await response.json();

        data.results && data.results.length > 0
          ? setPodcastItem(data.results)
          : setError('No se encontraron resultados');

      } catch (error) {
        setError('No se encuentran los detalles del episodio');
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!podcastItem) {
    return <p>Loading...</p>;
  }

  console.log(podcastItem)

  return (
    <PodcastDetailContainer>
      <PodcastDetailHeader
        title={podcastItem[0].collectionName}
        imgSrc={podcastItem[0].artworkUrl100}
        imgAlt={podcastItem[0].collectionName}
        author={podcastItem[0].artistName}
        genre={podcastItem[0].primaryGenreName}
        description={podcastItem[1].description}
        date={podcastItem[0].releaseDate}
      />
      <EpisodesList episodes={podcastItem}/>
    </PodcastDetailContainer>
  );
};

export default PodcastDetail