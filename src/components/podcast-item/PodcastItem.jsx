import { Item } from './PodcastItem.style'

const PodcastItem = ({
  title,
  imgSrc,
  imgAlt,
  author,
  callToAction,
  url
}) => {
  return (
    <Item.Container>
      <Item.Title>
        {title}
      </Item.Title>
      <Item.Image
        src={imgSrc}
        alt={imgAlt}/>
      <Item.Description>
        <Item.Author>
          {author}
        </Item.Author>
      </Item.Description>
      <Item.CTA to={url}>
        {callToAction}
      </Item.CTA>
    </Item.Container>
  )
}

export default PodcastItem