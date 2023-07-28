import { usePodcastContext } from '../context/podcast-context/PodcastContext'

import MainHeader from '../components/header/Header'
import PodcastList from '../components/podcast-list/PodcastList'

import { AppStyle as App } from '../App.style.js'

const Home = () => {
  const { podcasts, loading } = usePodcastContext()

  return (
    <>
      <MainHeader loading={ loading } />
      <App.Main>
        <PodcastList items={ podcasts } />
      </App.Main>
    </>
  )
}

export default Home