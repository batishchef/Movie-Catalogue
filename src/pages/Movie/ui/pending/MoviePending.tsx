import styles from "./movie.module.css";

export default function MoviePending() {

  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
}
