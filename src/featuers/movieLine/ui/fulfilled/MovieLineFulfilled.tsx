import MovieElem from "../../../../entities/movieElem/ui/MovieElem";
import styles from '../movieLine.module.css'
import { useAppDispatch, useAppSelector } from "../../../../shared/hooks/hooks";
import { ListOfMovies } from "../../../../widgets/movieCarousel/model/types";

export interface IMovieLineProps {
}

export default function MovieLineFulfilled (props: IMovieLineProps) {
      const dispatch = useAppDispatch()
    const currentPage = useAppSelector(state => state.catalogue.currentPage)
    const movies: ListOfMovies = useAppSelector(state => state.catalogue.pages[currentPage])


    const movie = movies.docs.map((value) => {
      const id = value.id
      const rating = value.rating.kp
      const img = value.poster.previewUrl
      const title = value.name
      return <MovieElem status='fullfilled' id={id} rating={rating} img={img} title={title} />
    })

    
  return (
    <div className={styles.movieLine}>
        {movie}
    </div>
  );
}