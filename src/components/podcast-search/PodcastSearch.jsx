import styled from 'styled-components'

export const PodcastSearchField = styled.label`
  display:grid;
`

export const PodcastLabel = styled.span`
  display: flex;
  flex: 1 0 100%;
  padding-block-end: 0.25rem;
`

export const PodcastInputField = styled.input`
  display: flex;
  padding: 0.75rem 0.5rem;
  border: 0;
  border-block-end: 1px solid var(--color-main);
`

const PodcastSearch = ({
  type,
  label,
  value,
  placeholder,
  className,
  onChange }) => {

  return (
    <PodcastSearchField className={className}>
      <PodcastLabel>
        {`${label}:`}
      </PodcastLabel>
      <PodcastInputField
        type={type ? type : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </PodcastSearchField>
  )
}

export default PodcastSearch;
