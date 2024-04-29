import MovieElem from "../../../../entities/movieElem/ui/MovieElem";
import styles from '../movieLine.module.css'
import { useAppDispatch, useAppSelector } from "../../../../shared/hooks/hooks";
import { ListOfMovies } from "../../../../widgets/movieCarousel/model/types";

export interface IMovieLineProps {
}

export default function MovieLinePending (props: IMovieLineProps) {
    
  return (
    <div className={styles.movieLine}>
        <MovieElem status='pending'/>
        <MovieElem status='pending'/>
        <MovieElem status='pending'/>
        <MovieElem status='pending'/>
        <MovieElem status='pending'/>
    </div>
  );
}