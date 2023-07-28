import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '../view/Home'
import Podcast from '../view/Podcast'
import Episode from '../view/Episode'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/podcast/:podcastId",
    element: <Podcast />,
  },
  {
    path: "/podcast/:podcastId/episode/:trackId",
    element: <Episode />,
  }

]);

const Router = () => <RouterProvider router={routes} />;

export default Router;
