import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import * as movieApi from '../servises/movieApi';
import Cast from "./CastPage/CastPage";
import Reviews from "./Reviews/Reviews";

export default function MovieDetailsPageViews() {
    const {url, path} = useRouteMatch();
    const dd = useRouteMatch();
    console.log('dd', dd);

    return (

        <>
            <MovieDetailsPage />
            <div>
                <h2>Additional Information</h2>
            </div>
            <NavLink
            exact to={`${url}/cast`}
            // className={s.link}
            // activeClassName={s.activeLink}
        >
            Cast
            </NavLink>
            
            <NavLink
            exact to={`${url}/reviews`}
            // className={s.link}
            // activeClassName={s.activeLink}
        >
            Reviews
            </NavLink>

            <Route path={`${path}/cast`}>
            <Cast/>
        </Route>

        <Route path={`${path}/reviews`} exact>
          <div>
            <Reviews />
          </div>
        </Route>
            </>
    )
}