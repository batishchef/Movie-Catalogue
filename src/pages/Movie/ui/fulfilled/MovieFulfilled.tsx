import styles from "../movie.module.css";
import { useAppSelector } from "../../../../shared/hooks/hooks";
import { Link } from "react-router-dom";

export default function MovieFulfilled() {
  const movie = useAppSelector((state) => state.movie.movie);

  const starring = movie.persons.map((person) => {
    return <li key={person.id}>{person.name}</li>;
  });

  const similiarMovies = movie.similarMovies.map((movie) => {
    return (
      <Link className={styles.similiarMoviesLink} to={`/${movie.id}`}>
        <img
          className={styles.similarMovieImg}
          src={movie.poster.previewUrl}
          alt="poster"
        />
        <h3 className={styles.similarMovieName}>{movie.name}</h3>
      </Link>
    );
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.mainHeader}>Справочник кино</h1>
      <div className={styles.movieContainer}>
        <img className={styles.poster} src={movie.poster.url} alt="poster" />
        <div className={styles.about}>
          <h2 className={styles.title}>{movie.name}</h2>
          <h3 className={styles.descriptionHeader}>Описание:</h3>
          <p className={styles.description}>{movie.description}</p>
          <p>Слоган: "{movie.year}"</p>
          <p>Год: {movie.year}</p>
          <p>Длина: {movie.movieLength}</p>
          <p>Год: {}movie.year</p>
        </div>
        <div>
          <div className={styles.ratingCircle}>
            <p className={styles.rating}>{movie.rating.kp}</p>
          </div>
          <div className={styles.starringContainer}>
            <h4>В главных ролях:</h4>
            <ul>{starring}</ul>
          </div>
        </div>
      </div>
      <div>
        <h2>Похожие фильмы:</h2>
        <div className={styles.similarMoviesBlock}>{similiarMovies}</div>
      </div>
    </div>
  );
}
