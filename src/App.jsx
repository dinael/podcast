import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PodcastProvider from './components/podcast-context/PodcastContext'
import PodcastDetailProvider, { usePodcastDetailContext } from './components/podcast-detail-context/PodcastDetailContext'

import PodcastHeader from './components/podcast-header/PodcastHeader'
import PodcastList from './components/podcast-list/PodcastList'
import PodcastDetail from './components/podcast-detail/PodcastDetail'
import EpisodeDetail from './components/episode-detail/EpisodeDetail'

const podcastAPI = 'https://itunes.apple.com/us/rss/toppodcasts/genre=1310/limit=100/json'


function App() {
  return (
    <main className="App">
      <div className="App-wrapper">
        <PodcastHeader />
        <PodcastProvider url={podcastAPI}>
          <PodcastDetailProvider>
              <Router>
                <Routes>
                  <Route
                    exact
                    path="/"
                    element={
                      <PodcastList />
                    } />
                  <Route
                    exact
                    path="/podcast/:podcastId"
                    element={
                      <PodcastDetail />
                    } />
                  <Route
                    exact
                    path="/podcast/:podcastId/episode/:trackId"
                    element={
                      <EpisodeDetail />
                    } />
                </Routes>
              </Router>
          </PodcastDetailProvider>
        </PodcastProvider>
      </div>
    </main>
  );
}

export default App