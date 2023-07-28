import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PodcastItem from './PodcastItem'

describe('PodcastItem', () => {
  it('renders the podcast item correctly with provided data', () => {
    const title = 'Podcast Title'
    const imgSrc = 'https://example.com/image.jpg'
    const imgAlt = 'Podcast Image'
    const author = 'John Doe'
    const callToAction = 'Listen Now'
    const url = '/podcast/123'

    render(
      <MemoryRouter>
        <PodcastItem
          title={title}
          imgSrc={imgSrc}
          imgAlt={imgAlt}
          author={author}
          callToAction={callToAction}
          url={url}
        />
      </MemoryRouter>
    )

    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()

    const imageElement = screen.getByAltText(imgAlt)
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', imgSrc)

    const authorElement = screen.getByText(author)
    expect(authorElement).toBeInTheDocument()

    const callToActionElement = screen.getByText(callToAction)
    expect(callToActionElement).toBeInTheDocument()
    expect(callToActionElement).toHaveAttribute('href', url)
  })
})
