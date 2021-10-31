import "./App.css";
import { Switch, Route } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import NotFoundView from "./pages/NotFoundView";
import HomePageView from "./pages/HomePageView";
import MovieDetailsPageViews from "./pages/MovieDateilsPageView";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePageView />
        </Route>
        {/* <Route path="/movies" exact>
          <MoviesPageView />
        </Route> */}
        <Route path="/movies/:movieID">
          <MovieDetailsPageViews/>
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
