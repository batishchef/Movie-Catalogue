import styles from "./movie.module.css";
import img from "../../../shared/static/avengers.jpeg";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/hooks";
import { useEffect } from "react";
import { fetchMovieInfo } from "../api/api";
import MoviePending from "./pending/MoviePending";
import MovieFulfilled from "./fulfilled/MovieFulfilled";
import MovieRejected from "./rejected/MovieRejected";
export default function Movie() {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.movie.status);
  const id = Number(useParams().id);

  useEffect(() => {
    dispatch(fetchMovieInfo(id));
  }, [id]);

  if (status === "pending") {
    return <MoviePending />;
  } else if (status === "fulfilled") {
    return <MovieFulfilled />;
  } else {
    return <MovieRejected />;
  }
}
