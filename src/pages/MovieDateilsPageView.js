import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import { useLocation, NavLink, Route, useRouteMatch,   } from "react-router-dom";
import * as movieApi from "../servises/movieApi";
import s from "./MovieDetailsPage/MovieDetailsPage.module.css";
import { Suspense, lazy } from "react";

const Cast = lazy(() =>
  import("./CastPage/CastPage" /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import("./Reviews/Reviews" /* webpackChunkName: "Reviews" */)
);

export default function MovieDetailsPageViews() {
  const { url, path } = useRouteMatch();
  const location = useLocation();


  return (
    <>
     
      <MovieDetailsPage />

      <div className={s.addinfocontainer}>
        <div>
          <h2>Additional Information</h2>
        </div>

        <NavLink
          exact
          to={{
            pathname: `${url}/cast`,
            state: { from: location.state?.from || '/' },
          }}
          className={s.link}
          activeClassName={s.activeLink}
        >
          Cast
        </NavLink>

        <NavLink
          exact
          to={{
            pathname: `${url}/reviews`,
            state: {from: location.state?.from || '/' },
          }}
          className={s.link}
          activeClassName={s.activeLink}
        >
          Reviews
        </NavLink>

        <Suspense fallback={<h1>LOADING ...</h1>}>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route path={`${path}/reviews`} exact>
            <div>
              <Reviews />
            </div>
          </Route>
        </Suspense>
      </div>
    </>
  );
}


