import React from 'react';
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import PodcastDetail from './PodcastDetail'

const mockContext = {
  fetchData: jest.fn(),
  error: null,
  podcastItem: [{ /* datos simulados para podcastItem */ }],
  detail: {
    title: 'Podcast Title',
    imgSrc: 'https://example.com/image.jpg',
    imgAlt: 'Podcast Image',
    author: 'John Doe',
    genre: 'Podcast Genre',
    description: 'Podcast Description',
    date: '2023-07-24',
  },
};

jest.mock('../../context/podcast-detail-context/PodcastDetailContext', () => ({
  usePodcastDetailContext: () => mockContext,
}));

describe('PodcastDetail', () => {
  it('renders PodcastDetailHeader and EpisodesList components', () => {
    render(
      <MemoryRouter initialEntries={['/podcast/123']}>
        <PodcastDetail />
      </MemoryRouter>
    )
  })
})
