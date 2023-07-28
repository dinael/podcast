import React from 'react';
import { render, screen } from '@testing-library/react';
import PodcastDetailHeader from './PodcastDetailHeader';

describe('PodcastDetailHeader', () => {
  it('renders the title', () => {
    const title = 'Podcast Title';
    render(<PodcastDetailHeader title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders default title when title prop is not provided', () => {
    render(<PodcastDetailHeader />);
    const defaultTitle = 'Title not found';
    const titleElement = screen.getByText(defaultTitle);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the author', () => {
    const author = 'Podcast Author';
    render(<PodcastDetailHeader author={author} />);
    const authorElement = screen.getByText(`By ${author}`);
    expect(authorElement).toBeInTheDocument();
  });
});
