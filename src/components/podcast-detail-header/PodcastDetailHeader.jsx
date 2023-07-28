import { Header } from './PodcastDetailHeader.style.js'

const PodcastDetailHeader = ({
  title,
  imgSrc,
  imgAlt,
  author,
  genre,
  description,
  className
 }) => {
  return (
    <Header.Container className={className}>
      <Header.Title>
        {title ? title : 'Title not found'}
      </Header.Title>
      <Header.Cover
        src={imgSrc ? imgSrc : 'https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif'}
        alt={imgAlt ? imgAlt : 'Loading'} />
      <Header.Author>
        {author ? `By ${author}` : 'Author not found'}
      </Header.Author>
      <Header.DetailList>
        <dt>Genre:</dt>
        <dd>{genre ? genre: 'Genre not found'}</dd>
      </Header.DetailList>
      <Header.DetailList>
        <dt>Description:</dt>
        <dd>{description ? description : 'Description not found'}</dd>
      </Header.DetailList>
    </Header.Container>
  )
}

export default PodcastDetailHeader