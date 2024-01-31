import { useDispatch } from "react-redux"
import { addToSortContent } from "../store/reducers"

export function SortTopComponent({content}){
    const dispatch = useDispatch()
    const sortArrayAsc = [...content].sort((a, b) => a.price - b.price)
    const sortArrayDesc = [...content].sort((a, b) => b.price - a.price)
    const sortByRating = [...content].sort((a, b) => b.rating.rate - a.rating.rate)
    const sortByCount = [...content].sort((a, b) => b.rating.count - a.rating.count)
    
    return (
        <div className="sort_cont_top">
            <p>Сортировать по:</p>
            <div className="sort_cont_top_option">
                <p onClick={() => {
                    dispatch(addToSortContent(sortArrayAsc))
                }}>Возрастанию цены</p>
                <p onClick={() => {
                    dispatch(addToSortContent(sortArrayDesc))
                }}>Убыванию цены</p>
                <p onClick={() => {
                    dispatch(addToSortContent(sortByRating))
                }}>Рейтингу</p>
                <p onClick={() => {
                    dispatch(addToSortContent(sortByCount))
                }}>Количеству</p>
            </div>
        </div>
    )
}