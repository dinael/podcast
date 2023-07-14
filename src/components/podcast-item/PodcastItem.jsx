import styled from 'styled-components'
import { Link } from 'react-router-dom';

const PodcastContainer = styled.article`
  display: grid;
  padding: 0 1rem 1rem 1rem;
  border: 1px solid var(--podcast-container-border-color, var(--color-content-low));
  border-radius: 0.25rem;
  inline-size: 100%;
  background: var(--color-background-base);
  box-shadow:
    hsla(0, 0%, 0%, var(--podcast-container-box-shadow-opacity, .1)) 0 0.375rem 1.5rem 0,
    hsla(0, 0%, 0%, var(--podcast-container-box-shadow-opacity, .1)) 0 0 0 0.0625rem;
  transition: box-shadow .36s ease-in-out;
    &:hover {
      --podcast-container-box-shadow-opacity: 0;
    }
`

const PodcastTitle = styled.h2`
  display: -webkit-box;
  align-items: center;
  vertical-align: center;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0.25rem 0;
  max-inline-size: calc(16ch - 1px);
  block-size: 3.5ch;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`
const PodcastImage = styled.img`
  position: relative;
  display: flex;
  flex: 1 0 6rem;
  width: 6rem;
  height: 6rem;
  border-radius: 16rem;
  aspect-ratio: 16/9;
  object-fit: cover;
  margin-block-start: -1.75rem;
  margin-inline: auto;
  order: -1;
  background: var(--podcast-img-background, --color-background-base);
  border: 1px solid var(--podcast-img-border-color, var(--color-main));
`
const PodcastDescription = styled.p`
  margin: 0;
`

const PodcastAuthor = styled.address`
  margin: 0 auto;
  max-inline-size: calc(16ch - 1px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const PodcastCTA = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: .75rem;
  padding: 0.5em 0.5em;
  font-size: 1.025rem;
  text-decoration: none;
  border: none;
  color: var(--color-main);
  background: var(--podcast-cta-background, transparent);
  border: 1px solid var(--podcast-container-border-color, var(--color-content-low));
  cursor: pointer;
  transition:
    color .33s ease-in-out,
    background .33s ease-in-out,
    border-color .33s ease-in-out;
  &:hover,
  &:focus {
    --podcast-container-border-color: var(--color-main);
  }
  &:active {
    --podcast-cta-background: var(--color-sales);
  }
`

const PodcastItem = ({
  title,
  imgSrc,
  imgAlt,
  author,
  callToAction,
  url
}) => {
  return (
    <PodcastContainer>
      <PodcastTitle>
        {title}
      </PodcastTitle>
      <PodcastImage
        src={imgSrc}
        alt={imgAlt}/>
      <PodcastDescription>
        <PodcastAuthor>
          {author}
        </PodcastAuthor>
      </PodcastDescription>
      <PodcastCTA to={url}>
        {callToAction}
      </PodcastCTA>
    </PodcastContainer>
  )
};

export default PodcastItem