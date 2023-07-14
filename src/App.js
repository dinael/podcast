import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PodcastHeader from './components/podcast-header/PodcastHeader';
import PodcastList from './components/podcast-list/PodcastList';
import PodcastDetail from './components/podcast-detail/PodcastDetail';

const podcastAPI = 'https://itunes.apple.com/us/rss/toppodcasts/genre=1310/limit=100/json'

function App() {
  return (
    <main className="App">
      <div className="App-wrapper">
        <PodcastHeader />
        <Router>
          <Routes>
            <Route
              path="/"
              element={<PodcastList url={podcastAPI}/>} />
            <Route
              path="/podcast/:id"
              element={<PodcastDetail />} />
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
