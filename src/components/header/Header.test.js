import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PodcastProvider from '../../context/podcast-context/PodcastContext'
import PodcastDetailProvider from '../../context/podcast-detail-context/PodcastDetailContext'
import Header from './Header'

describe('Header rendering test', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
          <Header />
      </MemoryRouter>
    )
  })

  it('renders the title', () => {
    render(
      <MemoryRouter>
          <Header/>
      </MemoryRouter>
    )
    const titleElement = screen.getByText('Podcaster app')
    expect(titleElement).toBeInTheDocument()
  })

  it('render heading component whit provider and loading true', () => {
    render(
      <MemoryRouter>
        <PodcastProvider>
          <PodcastDetailProvider>
            <Header loading={true} />
          </PodcastDetailProvider>
        </PodcastProvider>
      </MemoryRouter>
    )
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('render "Loading..." when loading it is false', () => {
    expect(screen.queryByText('Loading...')).toBeNull();
  });
})
