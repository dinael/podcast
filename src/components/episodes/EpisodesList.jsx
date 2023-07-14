import styled from 'styled-components'
import { Link } from 'react-router-dom'

import EpisodeDuration from '../episode-duration/EpisodeDuration'
import EpisodeDate from '../episode-date/EpisodeDate'

export const EpisodeTable = styled.table`
  inline-size: 100%;
  margin:0;
  padding:0;
  background:none;
  border:none;
  border-collapse:collapse;
  border-spacing:0;
  background-image:none;
`

export const EpisodeTableHeader = styled.thead`
  border-block-end: 1px solid red;

  th {
    padding: 0.5rem;
    border-bottom: 1px solid var(--color-main);
  }
`

export const EpisodeTableHeaderTitle = styled.th`
  inline-size: 60%;
  text-align: left;
`

export const EpisodeTableHeaderCol = styled.th``

export const EpisodeTableRow = styled.tr`
  transition: background .3s ease-in-out;

  &:nth-child(even) {
    background: var(--episode-table-row, var(--color-main-005));
  }

  &:hover {
    background: var(--color-main-010);
  }
`
export const EpisodeTableCol = styled.td`
  padding: 0.5rem;
`

export const EpisodeTableColumnTitle = styled.td`
  text-align: left;
  padding: 0.75rem 0.5rem;
`

export const EpisodeTitleLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const ListEpisodes = ({ episodes }) => {
  return (
    <>
      {episodes.length === 0
        ? <p>No se encontraron episodios.</p>
        : <EpisodeTable>
          <EpisodeTableHeader>
            <tr>
              <EpisodeTableHeaderTitle>
                Title
              </EpisodeTableHeaderTitle>
              <EpisodeTableHeaderCol>Date</EpisodeTableHeaderCol>
              <EpisodeTableHeaderCol>Duration</EpisodeTableHeaderCol>
            </tr>
          </EpisodeTableHeader>
          <tbody>
            {episodes.slice(1).map((episode) => (
              <EpisodeTableRow key={episode.trackName}>
                <EpisodeTableColumnTitle>
                  <EpisodeTitleLink to={episode.trackViewUrl}>{episode.trackName}</EpisodeTitleLink>
                </EpisodeTableColumnTitle>
                <EpisodeTableCol>
                  <EpisodeDate release={episode.releaseDate} />
                </EpisodeTableCol>
                <EpisodeTableCol>
                  <EpisodeDuration duration={episode.trackTimeMillis} />
                </EpisodeTableCol>
              </EpisodeTableRow>
            ))}
          </tbody>
        </EpisodeTable>
      }
    </>
  )
}

export default ListEpisodes