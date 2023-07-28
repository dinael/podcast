import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom' // Importamos el MemoryRouter
import PodcastList from './PodcastList'

describe('PodcastList', () => {
  const items = [
    { id: 1, name: 'Podcast 1', img: 'img1.jpg', author: 'Author 1' },
    { id: 2, name: 'Podcast 2', img: 'img2.jpg', author: 'Author 2' },
    { id: 3, name: 'Podcast 3', img: 'img3.jpg', author: 'Author 3' },
  ]

  it('renders loading when items is empty', () => {
    render(
      <MemoryRouter>
        <PodcastList items={null} />
      </MemoryRouter>
    )
    const loadingElement = screen.getByText('Loading...')
    expect(loadingElement).toBeInTheDocument()
  })

  it('renders "Results not found" when filteredPodcast is empty', () => {
    render(
      <MemoryRouter>
        <PodcastList items={[]} />
      </MemoryRouter>
    )
    const noResultsElement = screen.getByText('Results not found.')
    expect(noResultsElement).toBeInTheDocument()
  })

  it('renders the correct number of filtered items', () => {
    render(
      <MemoryRouter>
        <PodcastList items={items} />
      </MemoryRouter>
    )
    const filteredPodcastCountElement = screen.getByLabelText('Total search result:')
    expect(filteredPodcastCountElement).toHaveTextContent('3')
  })

  it('renders the correct podcast items', () => {
    render(
      <MemoryRouter>
        <PodcastList items={items} />
      </MemoryRouter>
    )
    const podcast1Element = screen.getByText('Podcast 1')
    const podcast2Element = screen.getByText('Podcast 2')
    const podcast3Element = screen.getByText('Podcast 3')

    expect(podcast1Element).toBeInTheDocument()
    expect(podcast2Element).toBeInTheDocument()
    expect(podcast3Element).toBeInTheDocument()
  })

  // Add more test cases as needed for different scenarios
})
