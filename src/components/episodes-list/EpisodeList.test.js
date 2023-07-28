import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import EpisodeList from './EpisodesList'

describe('EpisodeList', () => {
  const episodes = [
    {},
    {
      trackId: 1,
      trackName: 'Episode 1',
      releaseDate: '2023-07-24',
      trackTimeMillis: 3600000,
    },
    {
      trackId: 2,
      trackName: 'Episode 2',
      releaseDate: '2023-07-25',
      trackTimeMillis: 1800000,
    },
  ]

  it('renders "Not found episodes" when episodes length is 0', () => {
    const episodes = []
    render(
      <MemoryRouter>
        <EpisodeList episodes={episodes} />
      </MemoryRouter>
    )

    const noEpisodesText = screen.getByText('Not found episodes')
    expect(noEpisodesText).toBeInTheDocument()
  })

  it('renders the episodes table correctly when episodes are provided', () => {
    render(
      <MemoryRouter>
        <EpisodeList episodes={episodes} />
      </MemoryRouter>
    )

    // Episode 1
    expect(screen.getByText('Episode 1')).toBeInTheDocument()
    expect(screen.getByText('24/7/2023')).toBeInTheDocument()
    expect(screen.getByText('1:00:00')).toBeInTheDocument()
    // Episode 2
    expect(screen.getByText('Episode 2')).toBeInTheDocument()
    expect(screen.getByText('25/7/2023')).toBeInTheDocument()
    expect(screen.getByText('0:30:00')).toBeInTheDocument()
  })
})
