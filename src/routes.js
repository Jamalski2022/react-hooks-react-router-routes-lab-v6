

// const routes = [

//   ];

// export default routes;

import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage'; // Create this component


const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />, // Error page for unmatched routes
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movie/:id", // Dynamic route with id parameter
    element: <Movie />,
    errorElement: <ErrorPage />
  }
];

export default routes;
