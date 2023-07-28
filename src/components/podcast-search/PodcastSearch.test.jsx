import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import PodcastSearch from './PodcastSearch'

describe('PodcastSearch', () => {
  const mockOnChange = jest.fn()

  it('renders without crashing', () => {
    render(
      <PodcastSearch
        label="Search"
        placeholder="Search for podcasts"
        value=""
        onChange={mockOnChange}
      />
    )
  })

  it('renders the correct label', () => {
    render(
      <PodcastSearch
        label="Search"
        placeholder="Search for podcasts"
        value=""
        onChange={mockOnChange}
      />
    )
    const labelElement = screen.getByText('Search:')
    expect(labelElement).toBeInTheDocument()
  })

  it('calls onChange when input value changes', () => {
    render(
      <PodcastSearch
        label="Search"
        placeholder="Search for podcasts"
        value=""
        onChange={mockOnChange}
      />
    )
    const inputElement = screen.getByPlaceholderText('Search for podcasts')
    fireEvent.change(inputElement, { target: { value: 'value' } })
    expect(mockOnChange).toHaveBeenCalledTimes(1)
  })
})
