import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import * as movieApi from "../../servises/movieApi";
import s from "./HomePage.module.css";

function HomePageView() {
  // const { url } = useRouteMatch();
  const [trendMovies, setTrendMovies] = useState(null);
  const location = useLocation();


  useEffect(() => {
    movieApi.fetchTrending().then((data) => setTrendMovies(data.results));
  }, []);

  return (
    <>
      <h1>Today's most popular movie</h1>
      {trendMovies && (
        <ul className={s.movieList}>
          {trendMovies.map((trendMovie) => (
            <li key={trendMovie.id} className={s.movieItem}>
              <Link to={{
                pathname: `/movies/${trendMovie.id}`,
                state: {from: location}
              }}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/w200" + trendMovie.poster_path
                  }
                  alt={trendMovie.title} width='200'
                ></img>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default HomePageView;
