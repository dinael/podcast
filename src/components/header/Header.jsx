import { Header } from './Header.style.js'

const MainHeader = ({ loading }) => {
  return (
    <Header.Container>
      <Header.Title>
        <Header.Link to='/'>
          Podcaster app
        </Header.Link>
      </Header.Title>
      {loading
        ? <p>Loading...</p>
        : null
      }
    </Header.Container>
  )
}

export default MainHeader