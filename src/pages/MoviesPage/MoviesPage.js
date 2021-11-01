import { useState, useEffect } from "react";
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { fetchMovies } from '../../servises/movieApi';
import s from "./MoviesPage.module.css";
import { Link } from "react-router-dom";

const MoviesPage = () => {
    const [query, setQuery] = useState("");
    const [foundMovies, setfoundMovies] = useState([]);
    const history = useHistory();
    const location = useLocation();
    const params = useParams();

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchMovies(query)
            .then((res) => setfoundMovies(res));
        // history.push(
        //     {
        //         ...location,
        //         search: `query=${query}`,
                
        //     }, {state: query}
        // );
    };

    useEffect(() => {

    }, [history]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="query" value={query} />
          </form>
          {foundMovies && (
        <ul className={s.movieList}>
          {foundMovies.map((movie) => (
            <li key={movie.id} className={s.movieItem}>
              <Link to={`movies/${movie.id}`}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/w200" + movie.poster_path
                  }
                  alt={movie.title}
                ></img>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesPage;
