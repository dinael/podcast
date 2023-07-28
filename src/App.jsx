import './App.css'
import Router from './router/Router'
import PodcastProvider from './context/podcast-context/PodcastContext'
import PodcastDetailProvider from './context/podcast-detail-context/PodcastDetailContext'

function App() {
  return (
    <div className="App">
      <PodcastProvider>
        <PodcastDetailProvider>
            <Router />
        </PodcastDetailProvider>
      </PodcastProvider>
    </div>
  )
}

export default App