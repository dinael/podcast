import { Episode } from './EpisodeList.style'

import Time from '../../utils/TimeConvertor'
import Date from '../../utils/DateFormat'

const ListEpisodes = ({ episodes }) => {
  return (
    <>
      {episodes.length === 0
        ? <p>Not found episodes</p>
        : <Episode.Table>
            <Episode.TableHeader>
              <tr>
                <Episode.TableHeaderTitle>
                  Title
                </Episode.TableHeaderTitle>
                <Episode.TableHeaderCol>Date</Episode.TableHeaderCol>
                <Episode.TableHeaderCol>Duration</Episode.TableHeaderCol>
              </tr>
            </Episode.TableHeader>
            <tbody>
              {episodes.slice(1).map((episode, index) => (
                <Episode.TableRow key={episode.trackName}>
                  <Episode.TableColTitle>
                    <Episode.TitleLink to={`episode/${episode.trackId}`}>
                      {episode.trackName}
                    </Episode.TitleLink>
                  </Episode.TableColTitle>
                  <Episode.TableColDate>
                    <Date date={episode.releaseDate} />
                  </Episode.TableColDate>
                  <Episode.TableColTime>
                    <Time duration={episode.trackTimeMillis} />
                  </Episode.TableColTime>
                </Episode.TableRow>
              ))}
            </tbody>
          </Episode.Table>
      }
    </>
  )
}

export default ListEpisodes