import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import * as movieApi from "../../servises/movieApi";
import s from './HomePage.module.css'

function HomePageView() {
    // const { url } = useRouteMatch();
    const [trendMovies, setTrendMovies] = useState(null);

    useEffect(() => {
        movieApi.fetchTrending().then((data) => setTrendMovies(data.results));
    }, []);

    return (
        <>
            <h1>Today's most popular movie</h1>
            {trendMovies && (
                <ul className={s.trend}>
                    {trendMovies.map(trendMovie =>
                        <li key={trendMovie.id}>
                           <Link to={`movies/${trendMovie.id}`} >{trendMovie.title}</Link> </li>)
                    }
                </ul>
            )}
        </>
    )}
export default HomePageView;
