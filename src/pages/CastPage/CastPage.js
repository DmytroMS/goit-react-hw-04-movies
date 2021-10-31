import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as movieApi from "../../servises/movieApi";
import s from "./CastPage.module.css";

export default function Cast() {
  const { movieID } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    movieApi
      .fetchCast(movieID)
      .then((data) => setCast(data.cast))
      .catch(console.log("Error on CastPage"));
  }, [movieID]);

  return (
    <>
      {cast && (
        <>
          <div className={s.cards_container}>
            <ul className={s.cast_list}>
              {cast.slice(0, 10).map((actor) => (
                <li key={actor.id} className={s.item}>
                  <div>
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w200" + actor.profile_path
                      }
                      alt={actor.title}
                    ></img>
                    <h3>{actor.name}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
