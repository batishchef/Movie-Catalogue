import MovieElem from "../../../../entities/movieElem/ui/MovieElem";
import styles from '../movieLine.module.css'
import { useAppDispatch, useAppSelector } from "../../../../shared/hooks/hooks";
import { ListOfMovies } from "../../../../widgets/movieCarousel/model/types";

export interface IMovieLineProps {
}

export default function MovieLineRejected (props: IMovieLineProps) {


    
  return (
    <div className={styles.movieLine}>
        ERROR
    </div>
  );
}