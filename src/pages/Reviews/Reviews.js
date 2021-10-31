import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as movieApi from "../../servises/movieApi";
import s from "./Reviews.module.css";

export default function Reviews() {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    movieApi
      .fatchReviews(movieID)
      .then((data) => setReviews(data.results))
      .catch(console.log("Error on Review Fetch"));
  }, [movieID]);

  return (
    <>
      {reviews && reviews.length > 0 && (
        <>
          <ul className={s.reviews_list}>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      {reviews && reviews.length === 0 && (
        <p className={s.reviews_error}>There are no reviews for this movie</p>
      )}
    </>
  );
}
