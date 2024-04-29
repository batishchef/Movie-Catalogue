import MovieElem from "../../../entities/movieElem/ui/MovieElem";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/hooks";
import { ListOfMovies } from "../../../widgets/movieCarousel/model/types";
import MovieLinePending from "./pending/MovieLinePending";
import MovieLineFulfilled from "./fulfilled/MovieLineFulfilled";
import MovieLineRejected from "./rejected/MovieLineRejected";

export interface IMovieLineProps {}

export default function MovieLine(props: IMovieLineProps) {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.catalogue.currentPage);
  const status = useAppSelector((state) => state.catalogue.status);

  if (status === "pending") {
    return <MovieLinePending />;
  } else if (status === "fulfilled") {
    return <MovieLineFulfilled />;
  } else {
    return <MovieLineRejected />;
  }
}
