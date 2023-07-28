import { Search } from './PodcastSearch.style.js'

const PodcastSearch = ({
  type,
  label,
  value,
  placeholder,
  className,
  onChange }) => {

  return (
    <Search.Container className={className}>
      <Search.Label>
        {`${label}:`}
      </Search.Label>
      <Search.Input
        type={type ? type : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Search.Container>
  )
}

export default PodcastSearch
