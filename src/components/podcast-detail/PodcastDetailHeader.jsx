import styled from 'styled-components'

const PodcastDetailHeaderContainer = styled.header`
  display: grid;
  align-items: center;
`

const PodcastTitle = styled.h2`
  margin: 0;
  padding: 0;
`

const PodcastCover = styled.img`
  border-radius: 100rem;
  margin-inline: auto;
  order: -1;

  transition: border-radius .5s ease-in-out;

  &:hover {
    border-radius: 0;
  }
`

const PodcastDetailList = styled.dl`
  margin: 0;
  padding: 0;
  display: grid;
  flex: 1 0 100%;
  inline-size: 100%;
  text-align: left;

  dt {
    margin: 0;
    padding: 0;
    font-weight: 600;
  }

  dd {
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 400;
  }
`

const PodcastDetailAuthor = styled.address`
  margin: 0;
  padding: 0;
`

const PodcastDetailHeader = ({
  title,
  imgSrc,
  imgAlt,
  author,
  genre,
  description,
  date,
  className
 }) => {
  return (
    <PodcastDetailHeaderContainer className={className}>
      <PodcastTitle>
        {title}
      </PodcastTitle>
      <PodcastCover
        src={imgSrc}
        alt={imgAlt} />
      <PodcastDetailAuthor>
        By {author}
      </PodcastDetailAuthor>
      <PodcastDetailList>
        <dt>Genre:</dt>
        <dd>{genre}</dd>
      </PodcastDetailList>
      <PodcastDetailList>
        <dt>Description:</dt>
        <dd>{description}</dd>
      </PodcastDetailList>
    </PodcastDetailHeaderContainer>
  )
}

export default PodcastDetailHeader