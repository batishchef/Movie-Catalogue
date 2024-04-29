import MovieCarousel from '../../../widgets/movieCarousel/ui/MovieCarousel';
import styles from './catalogue.module.css'

export interface ICatalogueProps {
}

export default function Catalogue (props: ICatalogueProps) {
  return (
    <div className={styles.catalogue}>
      <div className={styles.header}>
      <h1>КАТАЛОГ ФИЛЬМОВ</h1>
      </div>
      <MovieCarousel />
    </div>
  );
}
