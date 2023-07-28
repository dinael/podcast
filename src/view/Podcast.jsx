import MainHeader from '../components/header/Header'
import PodcastDetail from '../components/podcast-detail/PodcastDetail'

import { AppStyle as App } from '../App.style.js'

const Podcast = () => {
  return (
    <>
      <MainHeader />
      <App.Main>
        <PodcastDetail />
      </App.Main>
    </>
  )
}

export default Podcast