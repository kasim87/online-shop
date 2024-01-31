import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToSortContent } from "../store/reducers"

export function SortAsideComponent({ content }){
    const dispatch = useDispatch()
    let [priceRange, setPriceRange] = useState(0)
    let [countRange, setCountRange] = useState(0)
    const sortByPrice = [...content].filter((item) => item.price <= priceRange)
    const sortByCount = [...content].filter((item) => item.rating.count <= countRange)

    return (
        <div className="sort_cont_aside">
            <div className="price_range">
                <h4>цена</h4>
                <input
                min={0}
                max={1000}
                 value={priceRange}
                        onChange={(e) => {
                            setPriceRange(e.target.value)
                            dispatch(addToSortContent(sortByPrice))
                        }}
                type="range" />
                <p>{priceRange}</p>
            </div>
            <div className="count_range">
                <h4>Количество</h4>
                <input 
                min={0}
                max={1000}
                value={countRange}
                onChange={(e) => {
                    setCountRange(e.target.value)
                    dispatch(addToSortContent(sortByCount))
                }}
                type="range"/>
                <p>{countRange}</p>
            </div>
    </div>
    )
}