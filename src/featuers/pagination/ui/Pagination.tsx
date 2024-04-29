// import styles from './pagination.module.css'
import { IPaginationProps } from "../model/types"

export default function Pagination({onChange, page, totalPages}: IPaginationProps) {
    const currentPage = page
    const scndPage = page + 1
    const thridPage = page + 2
    const fourthPage = page + 3
    const fifthPage = page + 4


    return (
        <div >
            <button onClick={() => onChange(1)}>В начало</button>
            <button onClick={() => onChange('prev')}>Назад</button>
            <button onClick={() => onChange(currentPage)}>{currentPage}</button>
            <button onClick={() => onChange(scndPage)}>{scndPage}</button>
            <button onClick={() => onChange(thridPage)}>{thridPage}</button>
            <button onClick={() => onChange(fourthPage)}>{fourthPage}</button>
            <button onClick={() => onChange(fifthPage)}>{fifthPage}</button>
            <span>...</span>
            <button onClick={() => onChange(totalPages)}>{totalPages}</button>
            <button onClick={() => onChange('next')}>Вперед</button>
        </div>
    );
}
