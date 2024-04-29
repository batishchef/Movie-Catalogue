import styles from './movieElem.module.css'
import img from './../../../shared/static/avengers.jpeg'
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/hooks';
import { Link } from 'react-router-dom';
export interface IMovieElemProps {
    status: string;
    id?: number;
    rating?: number;
    img?: string;
    title?: string;
}

export default function MovieElem({status, id, rating, img, title}: IMovieElemProps) {
    if(status === 'pending') {
        return (
            <div className={styles.movieElemSketelon}>
            </div>
        );
    } else {
        return (
            <Link className={styles.movieElem} to={`/${id}`} >
                <div className={styles.ratingCircle}>
                    <p className={styles.rating}>{rating}</p>
                </div>
                <img className={styles.img} src={img} alt="movie" />
                <p className={styles.title}>{title}</p>
            </Link>
        );
    }
}