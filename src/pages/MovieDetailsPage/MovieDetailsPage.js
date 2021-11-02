import { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import * as movieApi from "../../servises/movieApi";
import s from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);


  const history = useHistory();
  const location = useLocation();


    const handleBack = () => {
    history.push(location?.state?.from);
  };

    
  useEffect(() => {
    movieApi
      .fetchMovieDetails(movieID)
      // .then(d => console.log(d))
      .then(setMovie)
      .catch(setError);
  }, [movieID]);

  return (
    <>
      
      {movie && (
        <>
          <button type="button" onClick={handleBack}>
        GO BACK
      </button>
          <div className={s.cards_container}>
            <div>
              <img
                src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
                alt={movie.title}
              />
            </div>
            <div>
              <h2>
                {movie.title} ({movie.release_date.substr(0, 4)})
              </h2>
              <h4 className={s.main_info}> User Scores: <span className={s.movie_info}>{movie.vote_average}</span>{" "}
              </h4>
              <h4 className={s.main_info}>
                Overview: <span className={s.movie_info}>{movie.overview}</span>
              </h4>
              <h4 className={s.main_info}>
                Genres: <span className={s.movie_info}>{movie.genres.slice(0, 3).map((genre) => {
                    return `${genre.name} `;
                  })}
                </span>
              </h4>
            </div>
          </div>
        </>
      )}
    </>
  );
}

