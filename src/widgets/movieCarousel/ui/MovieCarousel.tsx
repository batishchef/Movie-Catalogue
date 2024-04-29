import { useEffect, useState } from "react";
import MovieLine from "../../../featuers/movieLine/ui/MovieLine";
import Pagination from "../../../featuers/pagination/ui/Pagination";
import styles from './movieCarousel.module.css'
import { ListOfMovies, value } from "../model/types";
import { fetchListOfMovies } from "../api/api";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/hooks";
import { changePage } from "../model/catalogueSlice";

export default function MovieCarousel() {
  const [page, setPage] = useState<number>(1)
  const pages = useAppSelector(state => state.catalogue.pages)
  const totalPages  = useAppSelector(state => state.catalogue.pages[0]?.pages) | NaN
  const dispatch = useAppDispatch()

  function handleChangePage(value: value) {
    if(value === 'prev' && page !== 1) {
      setPage(page => page - 1)
    }
    if(value === 'next') {
      setPage(page => page + 1)
    }
    if(typeof value === 'number') {
      setPage(value)
    }
  }


  useEffect(() => {
    if(pages[page] !== undefined) {
      dispatch(changePage(page))
    } else {
      dispatch(fetchListOfMovies(page))
    }
  }, [page])

  return (
    <main className={styles.movieCarousel}>
      <MovieLine />
        {page}
      <Pagination onChange={handleChangePage} page={page} totalPages={totalPages}/>
    </main>
  );
}
