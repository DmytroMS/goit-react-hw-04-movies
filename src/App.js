import "./App.css";
import { lazy, Suspense } from 'react';
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";

const HomePageView = lazy(() => import('./pages/HomePageView' /* webpackChunkName: "homepage-view" */ ));
const MovieDetailsPageViews = lazy(() => import('./pages/MovieDateilsPageView' /* webpackChunkName: "MovieDetailsPageViews" */));
const MoviesPageView = lazy(() => import('./pages/MoviesPageView' /* webpackChunkName: "MoviesPageView" */));
const NotFoundView = lazy(() => import('./pages/NotFoundView' /* webpackChunkName: "NotFoundView" */));

function App() {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<h1>LOADING ...</h1>}>
              <Switch>
        <Route path="/" exact>
          <HomePageView />
        </Route>
        <Route path="/movies" exact>
          <MoviesPageView />
        </Route>
        <Route path="/movies/:movieID">
          <MovieDetailsPageViews/>
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
</Suspense>
    </div>
  );
}

export default App;
