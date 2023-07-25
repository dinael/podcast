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
  transition: background .3s ease-in-out, color .3s ease-in-out;

  &:nth-child(even) {
    background: var(--episode-table-row, var(--color-main-010));
  }

  &:hover {
    color: white;
    background: var(--color-main-040);

    a {
      color: white;
    }
  }
`
export const EpisodeTableCol = styled.td`
  padding: 0.5rem;
`

export const EpisodeTableColTitle = styled.td`
  text-align: left;
  padding: 0.75rem 0.5rem 0.75rem 1rem;
`

export const EpisodeTableColPlayer = styled.td`
  text-align: right;
  padding: 0.75rem 0.5rem;
`

export const EpisodeTitleLink = styled(Link)`
  color: var(--color-main);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const EpisodePlayer = styled.audio`
  inline-size: 120px;
  accent-color: red;
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
              <EpisodeTableHeaderCol>Play</EpisodeTableHeaderCol>
            </tr>
          </EpisodeTableHeader>
          <tbody>
            {episodes.slice(1).map((episode, index) => (
              <EpisodeTableRow key={episode?.trackName}>
                <EpisodeTableColTitle>
                  <EpisodeTitleLink
                    to={`episode/${episode.trackId}`}>
                    {episode?.trackName}
                  </EpisodeTitleLink>
                </EpisodeTableColTitle>
                <EpisodeTableCol>
                  <EpisodeDate release={episode?.releaseDate} />
                </EpisodeTableCol>
                <EpisodeTableCol>
                  <EpisodeDuration duration={episode?.trackTimeMillis} />
                </EpisodeTableCol>
                <EpisodeTableColPlayer>
                  <EpisodePlayer controls>
                    <source
                      src={`${episode?.episodeUrl}`}
                      type="audio/mpeg" />
                    Your browser does not support the audio tag.
                  </EpisodePlayer>
                </EpisodeTableColPlayer>
              </EpisodeTableRow>
            ))}
          </tbody>
        </EpisodeTable>
      }
    </>
  )
}

export default ListEpisodes